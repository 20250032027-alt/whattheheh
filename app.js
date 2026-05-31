'use strict';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

const PENALTY = 3;
const STORAGE_KEY = 'heh_progress_v1';

let state = {
  currentLevelId: null,
  lineIndex: 0,
  penaltyLeft: 0,
  scores: { smooth: 0, stumbled: 0, twisted: 0 },
  completedIds: [],
  streak: 0,
  lastDate: null,
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      state.completedIds = saved.completedIds || [];
      state.streak = saved.streak || 0;
      state.lastDate = saved.lastDate || null;
    }
  } catch (e) {}
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      completedIds: state.completedIds,
      streak: state.streak,
      lastDate: state.lastDate,
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

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function renderHome() {
  const grid = document.getElementById('levels-grid');
  grid.innerHTML = '';

  LEVELS.forEach((level, i) => {
    const unlocked = i === 0 || state.completedIds.includes(LEVELS[i - 1].id);
    const done = state.completedIds.includes(level.id);

    const card = document.createElement('button');
    card.className = 'level-card' + (done ? ' completed' : '') + (!unlocked ? ' locked' : '');
    card.setAttribute('aria-label', level.title + (done ? ', completed' : !unlocked ? ', locked' : ''));

    const numEl = document.createElement('div');
    numEl.className = 'level-num';
    numEl.textContent = String(level.id).padStart(2, '0');

    const infoEl = document.createElement('div');
    infoEl.className = 'level-info';
    infoEl.innerHTML = `<div class="level-title">${level.title}</div><div class="level-subtitle">${level.subtitle}</div>`;

    let tagText = level.type === 'boss' ? 'boss' : 'drill';
    let tagClass = done ? 'tag-done' : level.type === 'boss' ? 'tag-boss' : 'tag-drill';
    if (done) tagText = 'done';
    const tagEl = document.createElement('div');
    tagEl.className = `level-tag ${tagClass}`;
    tagEl.textContent = tagText;

    card.appendChild(numEl);
    card.appendChild(infoEl);
    card.appendChild(tagEl);

    if (done) {
      const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('width', '16');
      icon.setAttribute('height', '16');
      icon.setAttribute('viewBox', '0 0 16 16');
      icon.setAttribute('fill', 'none');
      icon.setAttribute('aria-hidden', 'true');
      icon.classList.add('level-status-icon');
      icon.innerHTML = '<path d="M3 8L6.5 11.5L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
      card.appendChild(icon);
    }

    if (unlocked) {
      card.addEventListener('click', () => startLevel(level.id));
    }

    grid.appendChild(card);
  });

  const row = document.getElementById('streak-row');
  row.innerHTML = state.streak > 0
    ? `day streak <span class="streak-val">${state.streak}</span>`
    : 'start your streak today';

  showScreen('home-screen');
}

function startLevel(id) {
  const level = LEVELS.find(l => l.id === id);
  if (!level) return;

  state.currentLevelId = id;
  state.lineIndex = 0;
  state.penaltyLeft = 0;
  state.scores = { smooth: 0, stumbled: 0, twisted: 0 };

  if (level.type === 'boss') {
    renderBossLevel(level);
    return;
  }

  document.getElementById('drill-level-name').textContent = level.title;
  document.getElementById('chat-thread').innerHTML = '';
  document.getElementById('penalty-bar').classList.remove('visible');

  updateProgressBar(0, level.lines.length);
  renderLine(level, 0);
  showScreen('drill-screen');
}

function renderLine(level, idx) {
  if (idx >= level.lines.length) {
    finishDrill(level);
    return;
  }

  const line = level.lines[idx];
  const phraseCard = document.getElementById('phrase-card');
  phraseCard.style.animation = 'none';
  phraseCard.offsetHeight;
  phraseCard.style.animation = '';

  const speakerEl = document.getElementById('speaker-label');
  speakerEl.textContent = line.name;
  speakerEl.className = 'speaker-label' + (line.speaker === 'me' ? ' is-me' : '');

  document.getElementById('phrase-text').textContent = line.bisaya;
  document.getElementById('phrase-english').textContent = line.en;

  const cue = document.getElementById('drill-cue');
  cue.textContent = line.speaker === 'me'
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
  if (!level) return;

  if (state.penaltyLeft > 0) {
    state.penaltyLeft--;
    updatePenaltyDots(PENALTY - state.penaltyLeft);
    document.getElementById('penalty-msg').textContent =
      state.penaltyLeft > 0 ? `say it ${state.penaltyLeft} more time${state.penaltyLeft !== 1 ? 's' : ''}` : 'good. moving on.';

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

  const line = level.lines[state.lineIndex];
  addBubble(line);

  if (result === 'stumbled' || result === 'twisted') {
    state.penaltyLeft = PENALTY;
    showPenalty(line);
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
  document.getElementById('speaker-label').className = 'speaker-label' + (line.speaker === 'me' ? ' is-me' : '');
  document.getElementById('phrase-text').textContent = line.bisaya;
  document.getElementById('phrase-english').textContent = line.en;
  document.getElementById('drill-cue').textContent = 'keep going. mark each attempt.';
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
  if (!state.completedIds.includes(level.id)) {
    state.completedIds.push(level.id);
    updateStreak();
    saveState();
  }

  document.getElementById('progress-fill').style.width = '100%';

  document.getElementById('complete-level-tag').textContent = `level ${level.id}`;
  document.getElementById('complete-title').textContent = level.title;

  const total = level.lines.length;
  const smooth = state.scores.smooth;
  const pct = Math.round(smooth / total * 100);
  let msg = '';
  if (pct === 100) msg = 'Clean run. Every line came out right.';
  else if (pct >= 70) msg = 'Most of it landed. A few lines need more reps.';
  else if (pct >= 40) msg = 'Rough around the edges, but that is what drills are for.';
  else msg = 'Your mouth needs more time with these words. Retry it.';

  document.getElementById('complete-sub').textContent = msg;
  document.getElementById('score-smooth').textContent = state.scores.smooth;
  document.getElementById('score-stumbled').textContent = state.scores.stumbled;
  document.getElementById('score-twisted').textContent = state.scores.twisted;

  const nextBtn = document.getElementById('next-level-btn');
  const nextLevel = LEVELS.find(l => l.id === level.id + 1);
  if (nextLevel) {
    nextBtn.style.display = '';
    nextBtn.textContent = 'next level';
  } else {
    nextBtn.style.display = 'none';
  }

  showScreen('complete-screen');
}

function renderBossLevel(level) {
  const drillMain = document.querySelector('#drill-screen .drill-main');
  drillMain.innerHTML = `<div class="boss-screen" id="boss-screen"></div>`;

  const boss = document.getElementById('boss-screen');

  const intro = document.createElement('div');
  intro.className = 'boss-intro';
  intro.innerHTML = `
    <div class="boss-intro-tag">boss level ${level.id}</div>
    <div class="boss-intro-title">${level.title}</div>
    <div class="boss-intro-body">${level.subtitle}. No scoring, no marks. Just watch, listen, and repeat what you catch.</div>
  `;
  boss.appendChild(intro);

  const taskList = document.createElement('div');
  taskList.className = 'boss-task-list';

  level.tasks.forEach(task => {
    const t = document.createElement('div');
    t.className = 'boss-task';
    t.innerHTML = `<div class="boss-task-num">${task.num}</div>${task.text}`;
    if (task.link) {
      const a = document.createElement('a');
      a.className = 'boss-link';
      a.href = task.link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = task.linkLabel || task.link;
      t.appendChild(document.createElement('br'));
      t.appendChild(a);
    }
    taskList.appendChild(t);
  });

  boss.appendChild(taskList);

  const doneBtn = document.createElement('button');
  doneBtn.className = 'boss-done-btn';
  doneBtn.textContent = 'done, mark complete';
  doneBtn.addEventListener('click', () => {
    if (!state.completedIds.includes(level.id)) {
      state.completedIds.push(level.id);
      updateStreak();
      saveState();
    }

    document.getElementById('complete-level-tag').textContent = `boss level ${level.id}`;
    document.getElementById('complete-title').textContent = level.title;
    document.getElementById('complete-sub').textContent = 'Watch enough of these and the words stop sounding foreign. Keep going.';
    document.getElementById('score-smooth').textContent = '-';
    document.getElementById('score-stumbled').textContent = '-';
    document.getElementById('score-twisted').textContent = '-';

    const nextBtn = document.getElementById('next-level-btn');
    const nextLevel = LEVELS.find(l => l.id === level.id + 1);
    if (nextLevel) { nextBtn.style.display = ''; nextBtn.textContent = 'next level'; }
    else { nextBtn.style.display = 'none'; }

    showScreen('complete-screen');
  });

  boss.appendChild(doneBtn);

  document.getElementById('drill-level-name').textContent = level.title;
  document.getElementById('drill-progress-text').textContent = 'boss';
  document.getElementById('progress-fill').style.width = '0%';
  showScreen('drill-screen');
}

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

document.getElementById('back-btn').addEventListener('click', () => {
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
        <div class="phrase-roman" id="phrase-roman"></div>
        <div class="phrase-english" id="phrase-english"></div>
      </div>
      <div class="drill-cue" id="drill-cue">say it out loud, then mark how it felt</div>
      <div class="mark-row">
        <button class="mark-btn mark-smooth" onclick="mark('smooth')" aria-label="Mark as smooth"><span class="mark-label">smooth</span></button>
        <button class="mark-btn mark-stumbled" onclick="mark('stumbled')" aria-label="Mark as stumbled"><span class="mark-label">stumbled</span></button>
        <button class="mark-btn mark-twisted" onclick="mark('twisted')" aria-label="tongue-twisted"><span class="mark-label">twisted</span></button>
      </div>
    </div>
  `;
  renderHome();
});

loadState();
renderHome();
