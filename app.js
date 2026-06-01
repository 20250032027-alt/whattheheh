'use strict';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

const PENALTY = 3;
const STORAGE_KEY = 'heh_progress_v2';

let state = {
  currentLevelId: null,
  lineIndex: 0,
  penaltyLeft: 0,
  scores: { smooth: 0, stumbled: 0, twisted: 0 },
  completedIds: [],
  stars: {},        // { levelId: 1|2|3 }
  streak: 0,
  lastDate: null,
  // boss state
  bossIndex: 0,
  bossRevealed: false,
  bossScores: { nailed: 0, close: 0, missed: 0 },
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      state.completedIds = s.completedIds || [];
      state.stars        = s.stars        || {};
      state.streak       = s.streak       || 0;
      state.lastDate     = s.lastDate     || null;
    }
  } catch (e) {}
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      completedIds: state.completedIds,
      stars:        state.stars,
      streak:       state.streak,
      lastDate:     state.lastDate,
    }));
  } catch (e) {}
}

function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  state.streak = state.lastDate === yesterday ? state.streak + 1 : 1;
  state.lastDate = today;
  saveState();
}

function calcStars(smooth, total) {
  const pct = smooth / total;
  if (pct === 1)    return 3;
  if (pct >= 0.66)  return 2;
  return 1;
}

function starSVG(filled) {
  const color = filled ? 'var(--star-fill)' : 'var(--star-empty)';
  return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1.5L9.854 5.757L14.5 6.368L11.25 9.493L12.09 14.118L8 11.875L3.91 14.118L4.75 9.493L1.5 6.368L6.146 5.757L8 1.5Z"
      fill="${color}" stroke="${color}" stroke-width="1" stroke-linejoin="round"/>
  </svg>`;
}

function starsHTML(count) {
  return [1,2,3].map(i => starSVG(i <= count)).join('');
}

// ── SCREENS ──────────────────────────────────────────────

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

// ── HOME ─────────────────────────────────────────────────

function renderHome() {
  const grid = document.getElementById('levels-grid');
  grid.innerHTML = '';

  LEVELS.forEach((level, i) => {
    const unlocked = i === 0 || state.completedIds.includes(LEVELS[i - 1].id);
    const done     = state.completedIds.includes(level.id);
    const stars    = state.stars[level.id] || 0;

    const card = document.createElement('button');
    card.className = 'level-card'
      + (done ? ' completed' : '')
      + (!unlocked ? ' locked' : '');
    card.setAttribute('aria-label',
      level.title + (done ? `, ${stars} star${stars !== 1 ? 's' : ''}` : !unlocked ? ', locked' : ''));

    const numEl = document.createElement('div');
    numEl.className = 'level-num';
    numEl.textContent = String(level.id).padStart(2, '0');

    const infoEl = document.createElement('div');
    infoEl.className = 'level-info';

    let starsEl = '';
    if (done) {
      starsEl = `<div class="level-stars">${starsHTML(stars)}</div>`;
    }

    infoEl.innerHTML = `<div class="level-title">${level.title}</div>
      <div class="level-subtitle">${level.subtitle}</div>
      ${starsEl}`;

    let tagText  = level.type === 'boss' ? 'boss' : 'drill';
    let tagClass = level.type === 'boss' ? 'tag-boss' : 'tag-drill';
    const tagEl  = document.createElement('div');
    tagEl.className = `level-tag ${tagClass}`;
    tagEl.textContent = tagText;

    card.appendChild(numEl);
    card.appendChild(infoEl);
    card.appendChild(tagEl);

    if (unlocked) card.addEventListener('click', () => startLevel(level.id));

    grid.appendChild(card);
  });

  const row = document.getElementById('streak-row');
  row.innerHTML = state.streak > 0
    ? `day streak <span class="streak-val">${state.streak}</span>`
    : 'start your streak today';

  showScreen('home-screen');
}

// ── DRILL ────────────────────────────────────────────────

function startLevel(id) {
  const level = LEVELS.find(l => l.id === id);
  if (!level) return;

  state.currentLevelId = id;
  state.lineIndex      = 0;
  state.penaltyLeft    = 0;
  state.scores         = { smooth: 0, stumbled: 0, twisted: 0 };

  if (level.type === 'boss') {
    startBoss(level);
    return;
  }

  restoreDrillDOM();
  document.getElementById('drill-level-name').textContent = level.title;
  document.getElementById('chat-thread').innerHTML = '';
  document.getElementById('penalty-bar').classList.remove('visible');
  updateProgressBar(0, level.lines.length);
  renderLine(level, 0);
  showScreen('drill-screen');
}

function restoreDrillDOM() {
  const drillMain = document.querySelector('#drill-screen .drill-main');
  drillMain.innerHTML = `
    <div class="chat-thread" id="chat-thread"></div>
    <div class="drill-zone" id="drill-zone">
      <div class="penalty-bar" id="penalty-bar">
        <span id="penalty-msg"></span>
        <div class="penalty-dots" id="penalty-dots"></div>
      </div>
      <div class="phrase-card" id="phrase-card">
        <div class="speaker-label" id="speaker-label"></div>
        <div class="phrase-text" id="phrase-text"></div>
        <div class="phrase-english" id="phrase-english"></div>
      </div>
      <div class="drill-cue" id="drill-cue">say it out loud, then mark how it felt</div>
      <div class="mark-row">
        <button class="mark-btn mark-smooth"   onclick="mark('smooth')"   aria-label="Smooth">  <span class="mark-label">smooth</span></button>
        <button class="mark-btn mark-stumbled" onclick="mark('stumbled')" aria-label="Stumbled"><span class="mark-label">stumbled</span></button>
        <button class="mark-btn mark-twisted"  onclick="mark('twisted')"  aria-label="Twisted"> <span class="mark-label">twisted</span></button>
      </div>
    </div>`;
}

function renderLine(level, idx) {
  if (idx >= level.lines.length) { finishDrill(level); return; }

  const line      = level.lines[idx];
  const card      = document.getElementById('phrase-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = '';

  const speakerEl = document.getElementById('speaker-label');
  speakerEl.textContent = line.name;
  speakerEl.className   = 'speaker-label' + (line.speaker === 'me' ? ' is-me' : '');

  document.getElementById('phrase-text').textContent    = line.bisaya;
  document.getElementById('phrase-english').textContent = line.en;

  document.getElementById('drill-cue').textContent = line.speaker === 'me'
    ? 'your line. say it out loud, then mark how it felt.'
    : 'their line. repeat it out loud, then mark how it felt.';

  updateProgressBar(idx, level.lines.length);
  document.getElementById('drill-progress-text').textContent = `${idx + 1} / ${level.lines.length}`;
}

function updateProgressBar(idx, total) {
  document.getElementById('progress-fill').style.width = (idx / total * 100) + '%';
}

function mark(result) {
  const level = LEVELS.find(l => l.id === state.currentLevelId);
  if (!level || level.type === 'boss') return;

  if (state.penaltyLeft > 0) {
    state.penaltyLeft--;
    updatePenaltyDots(PENALTY - state.penaltyLeft);
    document.getElementById('penalty-msg').textContent =
      state.penaltyLeft > 0
        ? `say it ${state.penaltyLeft} more time${state.penaltyLeft !== 1 ? 's' : ''}`
        : 'good. moving on.';

    if (state.penaltyLeft === 0) {
      setTimeout(() => {
        document.getElementById('penalty-bar').classList.remove('visible');
        state.lineIndex++;
        renderLine(level, state.lineIndex);
      }, 600);
    }
    return;
  }

  state.scores[result]++;
  addBubble(level.lines[state.lineIndex]);

  if (result === 'stumbled' || result === 'twisted') {
    state.penaltyLeft = PENALTY;
    showPenalty(level.lines[state.lineIndex]);
    return;
  }

  state.lineIndex++;
  renderLine(level, state.lineIndex);
}

function showPenalty(line) {
  const bar = document.getElementById('penalty-bar');
  bar.classList.add('visible');
  document.getElementById('penalty-msg').textContent = `say it ${PENALTY} more times`;
  updatePenaltyDots(0);
  document.getElementById('speaker-label').textContent = line.name;
  document.getElementById('speaker-label').className   = 'speaker-label' + (line.speaker === 'me' ? ' is-me' : '');
  document.getElementById('phrase-text').textContent    = line.bisaya;
  document.getElementById('phrase-english').textContent = line.en;
  document.getElementById('drill-cue').textContent      = 'keep going. mark each attempt.';
}

function updatePenaltyDots(filled) {
  const wrap = document.getElementById('penalty-dots');
  wrap.innerHTML = '';
  for (let i = 0; i < PENALTY; i++) {
    const d = document.createElement('div');
    d.className = 'pdot' + (i < filled ? ' done' : '');
    wrap.appendChild(d);
  }
}

function addBubble(line) {
  const thread = document.getElementById('chat-thread');
  const b = document.createElement('div');
  b.className = 'bubble ' + (line.speaker === 'me' ? 'me' : 'them');
  b.innerHTML = line.bisaya + `<span class="en">${line.en}</span>`;
  thread.appendChild(b);
  thread.scrollTop = thread.scrollHeight;
}

function finishDrill(level) {
  const smooth = state.scores.smooth;
  const total  = level.lines.length;
  const earned = calcStars(smooth, total);

  const prev = state.stars[level.id] || 0;
  if (earned > prev) state.stars[level.id] = earned;

  if (!state.completedIds.includes(level.id)) {
    state.completedIds.push(level.id);
    updateStreak();
  }
  saveState();

  document.getElementById('progress-fill').style.width = '100%';
  document.getElementById('complete-level-tag').textContent = `level ${level.id}`;
  document.getElementById('complete-title').textContent     = level.title;

  const pct = smooth / total;
  let msg = '';
  if (pct === 1)       msg = 'Clean run. Every line came out right.';
  else if (pct >= 0.66) msg = 'Most of it landed. A few lines need more reps.';
  else if (pct >= 0.33) msg = 'Rough around the edges, but that is what drills are for.';
  else                  msg = 'Your mouth needs more time with these words. Retry it.';

  document.getElementById('complete-sub').textContent          = msg;
  document.getElementById('complete-stars').innerHTML          = starsHTML(earned);
  document.getElementById('score-smooth').textContent          = state.scores.smooth;
  document.getElementById('score-stumbled').textContent        = state.scores.stumbled;
  document.getElementById('score-twisted').textContent         = state.scores.twisted;
  document.getElementById('complete-score-grid').style.display = '';

  const nextBtn = document.getElementById('next-level-btn');
  const next    = LEVELS.find(l => l.id === level.id + 1);
  nextBtn.style.display  = next ? '' : 'none';
  nextBtn.textContent    = 'next level';

  showScreen('complete-screen');
}

// ── BOSS ─────────────────────────────────────────────────

function startBoss(level) {
  state.bossIndex  = 0;
  state.bossScores = { nailed: 0, close: 0, missed: 0 };

  document.getElementById('drill-level-name').textContent = level.title;
  document.getElementById('drill-progress-text').textContent = 'boss';
  document.getElementById('progress-fill').style.width = '0%';

  const drillMain = document.querySelector('#drill-screen .drill-main');
  drillMain.innerHTML = `<div class="boss-zone" id="boss-zone"></div>`;

  renderBossChallenge(level, 0);
  showScreen('drill-screen');
}

function renderBossChallenge(level, idx) {
  if (idx >= level.challenges.length) { finishBoss(level); return; }

  const ch   = level.challenges[idx];
  const zone = document.getElementById('boss-zone');
  const total = level.challenges.length;

  updateProgressBar(idx, total);
  document.getElementById('drill-progress-text').textContent = `${idx + 1} / ${total}`;

  zone.innerHTML = `
    <div class="boss-challenge-card" id="boss-card">
      <div class="boss-challenge-num">${String(idx + 1).padStart(2, '0')} / ${total}</div>
      <div class="boss-scenario">${ch.en}</div>
      <div class="boss-cue">think of the Bisaya phrase, then say it out loud</div>
      <button class="boss-reveal-btn" id="boss-reveal-btn" onclick="revealBoss()">reveal answer</button>
    </div>
    <div class="boss-answer-card hidden" id="boss-answer">
      <div class="boss-answer-label">correct phrase</div>
      <div class="boss-answer-text">${ch.bisaya}</div>
      <div class="boss-answer-note">${ch.note}</div>
      <div class="boss-mark-row">
        <button class="boss-mark-btn boss-nailed"  onclick="markBoss('nailed')"> <span>nailed it</span></button>
        <button class="boss-mark-btn boss-close"   onclick="markBoss('close')">  <span>close</span></button>
        <button class="boss-mark-btn boss-missed"  onclick="markBoss('missed')"> <span>missed</span></button>
      </div>
    </div>`;
}

function revealBoss() {
  document.getElementById('boss-reveal-btn').style.display = 'none';
  document.getElementById('boss-answer').classList.remove('hidden');
  document.getElementById('boss-card').querySelector('.boss-cue').textContent = 'how did it go?';
}

function markBoss(result) {
  const level = LEVELS.find(l => l.id === state.currentLevelId);
  if (!level) return;
  state.bossScores[result]++;
  state.bossIndex++;
  renderBossChallenge(level, state.bossIndex);
}

function finishBoss(level) {
  const { nailed, close, missed } = state.bossScores;
  const total  = level.challenges.length;
  const earned = calcStars(nailed, total);

  const prev = state.stars[level.id] || 0;
  if (earned > prev) state.stars[level.id] = earned;

  if (!state.completedIds.includes(level.id)) {
    state.completedIds.push(level.id);
    updateStreak();
  }
  saveState();

  document.getElementById('progress-fill').style.width = '100%';
  document.getElementById('complete-level-tag').textContent = `boss ${level.id}`;
  document.getElementById('complete-title').textContent     = level.title;

  const pct = nailed / total;
  let msg = '';
  if (pct === 1)        msg = 'Every situation handled. That is the goal.';
  else if (pct >= 0.66) msg = 'Most of it came out right. A few gaps to close.';
  else if (pct >= 0.33) msg = 'You are building the recall. Keep drilling.';
  else                  msg = 'Cold production is hard. Go back to the drills, then retry.';

  document.getElementById('complete-sub').textContent          = msg;
  document.getElementById('complete-stars').innerHTML          = starsHTML(earned);
  document.getElementById('score-smooth').textContent          = nailed;
  document.getElementById('score-stumbled').textContent        = close;
  document.getElementById('score-twisted').textContent         = missed;
  document.getElementById('complete-score-grid').style.display = '';

  // swap labels for boss
  const labels = document.querySelectorAll('#complete-score-grid .score-lbl');
  if (labels[0]) labels[0].textContent = 'nailed';
  if (labels[1]) labels[1].textContent = 'close';
  if (labels[2]) labels[2].textContent = 'missed';

  const nextBtn = document.getElementById('next-level-btn');
  const next    = LEVELS.find(l => l.id === level.id + 1);
  nextBtn.style.display = next ? '' : 'none';
  nextBtn.textContent   = 'next level';

  showScreen('complete-screen');
}

// ── COMPLETE ─────────────────────────────────────────────

function goNextLevel() {
  const current = LEVELS.find(l => l.id === state.currentLevelId);
  if (!current) { renderHome(); return; }
  const next = LEVELS.find(l => l.id === current.id + 1);
  if (next) startLevel(next.id);
  else renderHome();
}

function retryLevel() {
  if (state.currentLevelId) startLevel(state.currentLevelId);
  else renderHome();
}

// ── BACK BTN ─────────────────────────────────────────────

document.getElementById('back-btn').addEventListener('click', () => {
  restoreDrillDOM();
  renderHome();
});

// ── INIT ─────────────────────────────────────────────────

loadState();
renderHome();
