const LEVELS = [
  // ── BLOCK 1 ─────────────────────────────────────────────
  {
    id: 1,
    type: 'drill',
    title: 'Magkita Ta',
    subtitle: 'bumping into a friend',
    lines: [
      { speaker: 'dodong', name: 'Si Dodong', bisaya: 'Hoy! Asa ka man?', en: 'Hey, where are you going?' },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Naa ko sa balay. Ngano?', en: "I'm at home. Why?" },
      { speaker: 'dodong', name: 'Si Dodong', bisaya: 'Gusto nimo mag-kape?', en: 'You want to get coffee?' },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Sige, pila ka minuto lang.', en: 'Sure, just give me a few minutes.' },
      { speaker: 'dodong', name: 'Si Dodong', bisaya: 'Naa ko sa tindahan ni Aling Rosa.', en: "I'm at Aling Rosa's store." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Sige, hapit na ko.', en: "Alright, I'm almost there." },
      { speaker: 'dodong', name: 'Si Dodong', bisaya: 'Dali ha, init kaayo ang kape!', en: 'Hurry up, the coffee is really hot!' },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Oo oo. Lakaw na ko.', en: "Yeah yeah, heading out now." },
    ]
  },
  {
    id: 2,
    type: 'drill',
    title: 'Unsa Imong Gikaon?',
    subtitle: 'talking about food',
    lines: [
      { speaker: 'ate',  name: 'Si Ate',  bisaya: 'Nangaon na ka?', en: 'Have you eaten yet?' },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Wala pa. Gutom na ko.', en: "Not yet. I'm already hungry." },
      { speaker: 'ate',  name: 'Si Ate',  bisaya: 'Unsa imong gusto?', en: 'What do you want to eat?' },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Sinugba lang. Simple lang.', en: 'Just grilled stuff. Nothing complicated.' },
      { speaker: 'ate',  name: 'Si Ate',  bisaya: 'Adto ta sa kanto, naa dihay manok.', en: "Let's go to the corner, there's chicken there." },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Okay lang. Pila man ang manok?', en: 'That works. How much is the chicken?' },
      { speaker: 'ate',  name: 'Si Ate',  bisaya: 'Singkwenta pesos ang isa ka piraso.', en: 'Fifty pesos a piece.' },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Sige, duha lang. Kulang na ang kwarta ko.', en: "Fine, just two. I'm running low on cash." },
    ]
  },
  {
    id: 3,
    type: 'drill',
    title: 'Asa Ka Gikan?',
    subtitle: "asking about someone's day",
    lines: [
      { speaker: 'kuya',  name: 'Si Kuya',  bisaya: 'Asa ka gikan?', en: 'Where did you come from?' },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Gikan ko sa opisina. Kapoy kaayo.', en: 'I came from the office. Really exhausting.' },
      { speaker: 'kuya',  name: 'Si Kuya',  bisaya: 'Unsay nahitabo?', en: 'What happened?' },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Daghang trabaho. Di mabayran.', en: "Too much work. It's not worth it." },
      { speaker: 'kuya',  name: 'Si Kuya',  bisaya: 'Pahulaya na lang. Ugma pa na.', en: 'Just rest. You can deal with it tomorrow.' },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Oo nga. Matulog na ko.', en: "Right. I'm going to sleep." },
      { speaker: 'kuya',  name: 'Si Kuya',  bisaya: 'Mokaon ka una?', en: 'Will you eat first?' },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Dili na. Busog pa ko.', en: "Nah. I'm still full." },
    ]
  },
  {
    id: 4,
    type: 'drill',
    title: 'Palita Ko Niana',
    subtitle: 'buying something at the store',
    lines: [
      { speaker: 'tindera',  name: 'Si Tindera',  bisaya: 'Hoy, unsa imong gusto?', en: 'Hey, what do you want?' },
      { speaker: 'me',       name: 'Ikaw',        bisaya: 'Naa ba moy tubig? Ug chips?', en: 'Do you have water? And chips?' },
      { speaker: 'tindera',  name: 'Si Tindera',  bisaya: 'Naa. Unsa nga chips?', en: 'Yes. Which chips?' },
      { speaker: 'me',       name: 'Ikaw',        bisaya: 'Niana lang. Yung malaki.', en: 'That one. The big one.' },
      { speaker: 'tindera',  name: 'Si Tindera',  bisaya: 'Baynte ang tubig, tersenta ang chips.', en: 'Twenty for the water, thirty for the chips.' },
      { speaker: 'me',       name: 'Ikaw',        bisaya: 'Singkwenta tanan? Sige.', en: 'Fifty total? Okay.' },
      { speaker: 'tindera',  name: 'Si Tindera',  bisaya: 'Naa kay sukli?', en: 'Do you have change?' },
      { speaker: 'me',       name: 'Ikaw',        bisaya: 'Wala eh. Bayad ko og singkwenta.', en: "I don't have any. I'll pay with fifty." },
    ]
  },
  {
    id: 5,
    type: 'drill',
    title: 'Maayong Buntag',
    subtitle: 'morning small talk',
    lines: [
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Maayong buntag! Naka-bangon na?', en: 'Good morning! You up already?' },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Oo, Nay. Pila na ang oras?', en: 'Yeah, Mom. What time is it?' },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Alas otso na. Mokaon ka?', en: "It's already eight. You eating?" },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Oo. Unsa ang pamahaw?', en: 'Yeah. What is for breakfast?' },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Itlog ug tinapay lang. Naa pay kape.', en: 'Just eggs and bread. There is also coffee.' },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Okay ra. Salamat, Nay.', en: 'That is fine. Thank you, Mom.' },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Asa man ka karon nga adlaw?', en: 'Where are you off to today?' },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Adto ko sa opisina. Balik ko sa hapon.', en: "I'm going to the office. I'll be back in the afternoon." },
    ]
  },
  {
    id: 6,
    type: 'drill',
    title: 'Sakit Ba?',
    subtitle: 'checking in when someone is sick',
    lines: [
      { speaker: 'barkada',  name: 'Si Barkada',  bisaya: 'Okay ka lang? Daghan ka nag-ayo.', en: "You okay? You've been coughing a lot." },
      { speaker: 'me',       name: 'Ikaw',        bisaya: 'Dili. Gisakit ko sukad kagabi.', en: "No. I've been sick since last night." },
      { speaker: 'barkada',  name: 'Si Barkada',  bisaya: 'Sakit ba ang ulo?', en: 'Does your head hurt?' },
      { speaker: 'me',       name: 'Ikaw',        bisaya: 'Oo, ug hilanat pa ko.', en: "Yes, and I also have a fever." },
      { speaker: 'barkada',  name: 'Si Barkada',  bisaya: 'Nakainom ka na og tambal?', en: 'Have you taken medicine yet?' },
      { speaker: 'me',       name: 'Ikaw',        bisaya: 'Wala pa. Wala koy tambal diri.', en: "Not yet. I don't have medicine here." },
      { speaker: 'barkada',  name: 'Si Barkada',  bisaya: 'Palit ko nimo. Hulat lang ka.', en: "I'll buy some for you. Just wait." },
      { speaker: 'me',       name: 'Ikaw',        bisaya: 'Salamat kaayo. Bayran tika.', en: "Thank you so much. I'll pay you back." },
    ]
  },
  {
    id: 7,
    type: 'drill',
    title: 'Mangadto Ta',
    subtitle: 'making plans to go somewhere',
    lines: [
      { speaker: 'bes',  name: 'Si Bes',  bisaya: 'Mangadto ta sa mall ugma?', en: "Want to go to the mall tomorrow?" },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Unsa nga oras?', en: 'What time?' },
      { speaker: 'bes',  name: 'Si Bes',  bisaya: 'Porsiyete sa buntag, pwede?', en: 'Seven in the morning, does that work?' },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Sayo kaayo. Pwede ba alas nuwebe?', en: "That's too early. Can we make it nine?" },
      { speaker: 'bes',  name: 'Si Bes',  bisaya: 'Okay. Mag-meet ta sa entrance.', en: "Okay. Let's meet at the entrance." },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Unsang entrance? Daghan man.', en: "Which entrance? There are many." },
      { speaker: 'bes',  name: 'Si Bes',  bisaya: 'Sa may Jollibee. Klaro ba?', en: "Near the Jollibee. Is that clear?" },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Klaro. Ingon ana, sige.', en: "Got it. Alright, sounds good." },
    ]
  },
  {
    id: 8,
    type: 'drill',
    title: 'Pasensya Na',
    subtitle: 'apologizing and making up for it',
    lines: [
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Asa ka? Naghulat ko nimo.', en: "Where were you? I was waiting for you." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Pasensya na. Na-late ko.', en: "Sorry. I got held up." },
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Dugay na kaayo ko diri. Oras na.', en: "I've been here for an hour already." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Akong sala. Grabe ang traffic.', en: "It's my fault. The traffic was terrible." },
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Susama ra kana nga rason pirmi.', en: "That's always your excuse." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Tinuod gyud karon. Wala gyud ko naghunahuna.', en: "It's true this time. I really wasn't thinking." },
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Okay na. Sulod na lang ta.', en: "Fine. Let's just go inside." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Akong bayad ang kape. Pasaylo ra ko.', en: "Coffee is on me. Just forgive me." },
    ]
  },
  {
    id: 9,
    type: 'drill',
    title: 'Mag-inom Ta',
    subtitle: 'grabbing drinks with someone',
    lines: [
      { speaker: 'pare',  name: 'Si Pare',  bisaya: 'Mag-inom ta karong gabii?', en: "Want to drink tonight?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Asa man? Dili ko ganahan sa layo.', en: "Where? I don't want somewhere far." },
      { speaker: 'pare',  name: 'Si Pare',  bisaya: 'Sa balay ni Dodong lang. Siya ang may beer.', en: "Just at Dodong's place. He has the beer." },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Okay ra. Pila mo tanan?', en: "That's fine. How many of you are there?" },
      { speaker: 'pare',  name: 'Si Pare',  bisaya: 'Upat lang. Ikaw na ikalima.', en: "Just four. You'll be the fifth." },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Sige. Magdala ko og pulutan.', en: "Alright. I'll bring some snacks." },
      { speaker: 'pare',  name: 'Si Pare',  bisaya: 'Ayaw na. Naa naman diri.', en: "Don't bother. We already have some here." },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Sigurado? Magdala na lang ko para sigurado.', en: "You sure? I'll just bring some to be safe." },
    ]
  },
  {
    id: 10,
    type: 'drill',
    title: 'Hain ang CR?',
    subtitle: 'asking for directions inside a building',
    lines: [
      { speaker: 'me',       name: 'Ikaw',         bisaya: 'Ate, hain ang CR?', en: "Ate, where is the restroom?" },
      { speaker: 'guard',    name: 'Si Guard',      bisaya: 'Adto sa ikaduhang pasilyo, wala.', en: "Go to the second hallway, on the left." },
      { speaker: 'me',       name: 'Ikaw',          bisaya: 'Kini bang pasilyo o ang sunod?', en: "This hallway or the next one?" },
      { speaker: 'guard',    name: 'Si Guard',      bisaya: 'Ang sunod. Tupad sa opisina.', en: "The next one. Next to the office." },
      { speaker: 'me',       name: 'Ikaw',          bisaya: 'Salamat. Buhaton na nako.', en: "Thank you. I'll go ahead." },
      { speaker: 'guard',    name: 'Si Guard',      bisaya: 'Sige lang. Taas ang linya karon.', en: "Go ahead. The line is long right now." },
      { speaker: 'me',       name: 'Ikaw',          bisaya: 'Ay sus. Sige na lang.', en: "Oh no. Fine, I'll manage." },
      { speaker: 'guard',    name: 'Si Guard',      bisaya: 'Maayo pa og adto ka sa ubos nga floor.', en: "Better go to the lower floor instead." },
    ]
  },

  // ── BOSS 1 ───────────────────────────────────────────────
  {
    id: 11,
    type: 'boss',
    title: 'Boss 1',
    subtitle: 'produce the right phrase cold',
    challenges: [
      { en: "Your friend offers you food but you already ate. Decline politely.", bisaya: "Salamat, pero busog pa ko.", note: "Saying salamat first softens the decline." },
      { en: "Someone bumps into you on the street. Brush it off casually.", bisaya: "Okay lang. Walay problema.", note: "Walay problema is the easiest closer here." },
      { en: "Ask a stranger what time it is.", bisaya: "Pila na ang oras?", note: "Short, direct. No extra words needed." },
      { en: "Your ate asks if you want rice. You do.", bisaya: "Oo, palihug.", note: "Palihug adds politeness without being stiff." },
      { en: "Tell someone you will be right back.", bisaya: "Balik ko dayon.", note: "Dayon means immediately or right away." },
      { en: "Someone asks how you are. Tell them you are tired.", bisaya: "Kapoy kaayo ko.", note: "Kaayo strengthens the adjective, like saying really." },
      { en: "Ask your friend if they are going home already.", bisaya: "Mouli na ka?", note: "Mouli means to go home. Na signals the question." },
      { en: "Tell someone to wait for a moment.", bisaya: "Hulat lang usa.", note: "Usa here means just a moment, not the number one." },
    ]
  },

  // ── BLOCK 2 ─────────────────────────────────────────────
  {
    id: 12,
    type: 'drill',
    title: 'Panahon Karon',
    subtitle: 'complaining about the weather',
    lines: [
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Init kaayo ngayon. Dili ko makalabas.', en: "It's so hot today. I can't go out." },
      { speaker: 'jowa',   name: 'Si Jowa',   bisaya: 'Oo nga. Mag-aircon na lang ta sa sulod.', en: "Right. Let's just stay inside with the aircon." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Gusto ko unta og ice cream.', en: "I actually want ice cream." },
      { speaker: 'jowa',   name: 'Si Jowa',   bisaya: 'Deliver na lang nato. Di na kita mogawas.', en: "Let's just have it delivered. We're not going out." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Mura bag mag-uwan. Tan-awa ang langit.', en: "Looks like it might rain. Look at the sky." },
      { speaker: 'jowa',   name: 'Si Jowa',   bisaya: 'Mas maayo na lang nga mag-uwan. Mobugnaw.', en: "Better if it rains actually. It'll cool down." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Sige lang. Andam na ko og payong.', en: "Fine by me. I already have my umbrella ready." },
      { speaker: 'jowa',   name: 'Si Jowa',   bisaya: 'Maayo ka. Wala koy payong diri.', en: "Good on you. I don't have one here." },
    ]
  },
  {
    id: 13,
    type: 'drill',
    title: 'Naa Ba Si?',
    subtitle: 'asking if someone is around',
    lines: [
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Naa ba si Kuya diri?', en: "Is Kuya here?" },
      { speaker: 'lola',  name: 'Si Lola',  bisaya: 'Wala. Naglabay siya kagabi.', en: "No. He passed by last night." },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Nahibaw-an mo kung asa siya karon?', en: "Do you know where he is now?" },
      { speaker: 'lola',  name: 'Si Lola',  bisaya: 'Dili ko sigurado. Tingali sa trabaho.', en: "I'm not sure. Probably at work." },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Sige, hatagan ko siyag mensahe.', en: "Okay, I'll send him a message." },
      { speaker: 'lola',  name: 'Si Lola',  bisaya: 'O sige. Naay importante?', en: "Okay. Is it something important?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Dili kaayo. Pangutana lang ko.', en: "Not really. I just have a question." },
      { speaker: 'lola',  name: 'Si Lola',  bisaya: 'Sige, hulata nalang niya ang imong mensahe.', en: "Alright, just wait for his reply." },
    ]
  },
  {
    id: 14,
    type: 'drill',
    title: 'Unsaon Pagluto?',
    subtitle: 'asking how to cook something',
    lines: [
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Nay, unsaon pagluto og tinola?', en: "Mom, how do you cook tinola?" },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Lutoa ang manok sa tubig una.', en: "Boil the chicken in water first." },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Pila ka minuto?', en: "For how many minutes?" },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Mga baynte minutos. Hangtod humok.', en: "About twenty minutes. Until it's tender." },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Unya ibutang na ang utan?', en: "Then add the vegetables?" },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Oo. Sayote una, papaya sunod.', en: "Yes. Chayote first, then papaya." },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Unsa pa ang ibutang?', en: "What else goes in?" },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Patis ug paminta. Sige na, tan-awon mo.', en: "Fish sauce and pepper. Just watch me." },
    ]
  },
  {
    id: 15,
    type: 'drill',
    title: 'Maayo Rag Dili',
    subtitle: 'politely saying no to plans',
    lines: [
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Manggawas ta ugma gabii?', en: "Want to go out tomorrow night?" },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Dili ko kasabot ugma. Aduna koy plano.', en: "I can't make it tomorrow. I have plans." },
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Unsang plano? Kanselahon na lang.', en: "What plans? Just cancel them." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Dili pwede. Importante kaayo.', en: "Can't. It's really important." },
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Sige na. Kausa ra ni.', en: "Come on. This is a one-time thing." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Sigurado gyud dili. Sunod na lang.', en: "Definitely not. Next time." },
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Okay okay. Sunod na lang nga semana?', en: "Okay okay. Next week then?" },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Oo, sige. Ingna lang ko kung asa.', en: "Yes, sure. Just tell me where." },
    ]
  },
  {
    id: 16,
    type: 'drill',
    title: 'Mag-aral Ko',
    subtitle: 'telling someone you need to study',
    lines: [
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Dili ko makaadto. Naa koy aralun.', en: "I can't come. I have stuff to study." },
      { speaker: 'barkada', name: 'Si Barkada', bisaya: 'Kanunay ka mag-aral. Pahulaya na.', en: "You always study. Just take a break." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Exam nako ugma. Seryoso ni.', en: "I have an exam tomorrow. This is serious." },
      { speaker: 'barkada', name: 'Si Barkada', bisaya: 'Unsa ang subject?', en: "What subject?" },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Math. Lisod kaayo ang topic.', en: "Math. The topic is really difficult." },
      { speaker: 'barkada', name: 'Si Barkada', bisaya: 'Kaya nimo na. Maayo ka sa math.', en: "You can handle it. You are good at math." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Salamat. Mag-review pa gyud ko.', en: "Thanks. I still need to review though." },
      { speaker: 'barkada', name: 'Si Barkada', bisaya: 'Sige. Good luck. Ingna ko ang resulta.', en: "Okay. Good luck. Tell me how it goes." },
    ]
  },
  {
    id: 17,
    type: 'drill',
    title: 'Suway Kini',
    subtitle: 'recommending something to a friend',
    lines: [
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Suwayi ang kana nga lutaw. Lami kaayo.', en: "Try that dish over there. It is so good." },
      { speaker: 'bes',   name: 'Si Bes',   bisaya: 'Unsa man na?', en: "What is that?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Kare-kare. Nasuwayi na nimo?', en: "Kare-kare. Have you tried it before?" },
      { speaker: 'bes',   name: 'Si Bes',   bisaya: 'Wala pa. Lami ba gyud?', en: "Not yet. Is it really good?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Oo. Kuhaa og bagoong pud.', en: "Yes. Get some bagoong too." },
      { speaker: 'bes',   name: 'Si Bes',   bisaya: 'Unsa ang bagoong?', en: "What is bagoong?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Asin nga isda. Ihalo sa kare-kare.', en: "Fermented fish paste. You mix it in." },
      { speaker: 'bes',   name: 'Si Bes',   bisaya: 'Uy, lami diay. Salamat sa tip.', en: "Oh, it is good actually. Thanks for the tip." },
    ]
  },
  {
    id: 18,
    type: 'drill',
    title: 'Nawaldan Ko',
    subtitle: 'saying you lost something',
    lines: [
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Nawad-an ko og pitaka. Dili ko makit-an.', en: "I lost my wallet. I can't find it." },
      { speaker: 'kuya',  name: 'Si Kuya',  bisaya: 'Asa ka katong nag-adto?', en: "Where did you go earlier?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Sa mall lang. Naa gyud ko niana.', en: "Just the mall. I definitely had it there." },
      { speaker: 'kuya',  name: 'Si Kuya',  bisaya: 'Naa pay kwarta didto?', en: "Was there money in it?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Oo. Ug ang ID ko pa gyud.', en: "Yes. And my ID as well." },
      { speaker: 'kuya',  name: 'Si Kuya',  bisaya: 'Tawgan ang mall. Basin nakit-an nila.', en: "Call the mall. Maybe they found it." },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Unsa ang number nila?', en: "What is their number?" },
      { speaker: 'kuya',  name: 'Si Kuya',  bisaya: 'I-Google na lang. Dali, ayaw hulata.', en: "Just Google it. Hurry, don't wait." },
    ]
  },
  {
    id: 19,
    type: 'drill',
    title: 'Pag-uli Na',
    subtitle: 'convincing someone to go home',
    lines: [
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Uli na ka. Gabii na.', en: "Come home now. It is already night." },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Konting oras pa lang, Nay.', en: "Just a little more time, Mom." },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Alas onse na. Ugma pa ang ugma.', en: "It's already eleven. Tomorrow is another day." },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Sige na. Mag-Grab na ko.', en: "Okay fine. I'll Grab home." },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Aduna kay bayad?', en: "Do you have money for it?" },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Naa pa. Dili ka mag-alala.', en: "I still have some. Don't worry." },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Sige. Ingna ko kung anaa ka na.', en: "Alright. Tell me when you get home." },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Okay, Nay. Katulgon na ka.', en: "Okay, Mom. Go to sleep." },
    ]
  },
  {
    id: 20,
    type: 'drill',
    title: 'Pwede Ba Ko?',
    subtitle: 'asking permission for something',
    lines: [
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Nay, pwede ko mag-gawas ugma?', en: "Mom, can I go out tomorrow?" },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Kang kinsa man ka kadto?', en: "Who are you going with?" },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Sa mga barkada. Sa mall lang.', en: "With friends. Just at the mall." },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Kinsa tong mga barkada nimo?', en: "Who are these friends?" },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Si Dodong ug si Bes. Nakilala mo na sila.', en: "Dodong and Bes. You have already met them." },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Unsa nga oras ka mouli?', en: "What time will you come home?" },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Sa alas singko sa hapon. Dili ko molate.', en: "By five in the afternoon. I won't be late." },
      { speaker: 'nay',  name: 'Si Nay',  bisaya: 'Sige. Pero alas singko gyud ha.', en: "Fine. But five o'clock sharp." },
    ]
  },
  {
    id: 21,
    type: 'drill',
    title: 'Naluoy Ko',
    subtitle: 'expressing sympathy',
    lines: [
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Namatay ang iro namo kagabi.', en: "Our dog died last night." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Ay sus. Pasensya na gyud ka.', en: "Oh no. I am so sorry to hear that." },
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Dugay na namo siya. Dose anyos na.', en: "We had him a long time. Twelve years already." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Dugay gyud. Sakit unta ang gibati nimo.', en: "That is a long time. You must be hurting." },
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Oo. Di ko matulog kagabi.', en: "Yes. I couldn't sleep last night." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Normal lang na. Dawata ang imong gibati.', en: "That is normal. Let yourself feel it." },
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Salamat. Tabang kaayo nga naa ka.', en: "Thank you. It really helps that you are here." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Kanunay ko naa para nimo. Usab.', en: "I am always here for you. Always." },
    ]
  },

  // ── BOSS 2 ───────────────────────────────────────────────
  {
    id: 22,
    type: 'boss',
    title: 'Boss 2',
    subtitle: 'situational recall, no hints',
    challenges: [
      { en: "Someone hands you something heavy. Thank them and say you can carry it from here.", bisaya: "Salamat. Kaya na nako gikan diri.", note: "Gikan diri means from here. Short and clean." },
      { en: "Your friend looks tired. Ask if they slept okay.", bisaya: "Okay ba imong tulog?", note: "Direct. No need to soften this one." },
      { en: "Someone asks if you speak Bisaya. Say a little but you are still learning.", bisaya: "Gamay lang. Nag-akat pa ko.", note: "Nag-akat means learning or studying a skill." },
      { en: "You bump into a neighbor. Greet them good afternoon.", bisaya: "Maayong hapon.", note: "Hapon is afternoon. Buntag is morning, gabii is evening." },
      { en: "Someone asks your name. Tell them and ask theirs back.", bisaya: "Ako si [pangalan]. Ikaw?", note: "Ikaw with a rise in tone is the question." },
      { en: "Tell your friend the food is really delicious.", bisaya: "Lami kaayo ang pagkaon.", note: "Lami is delicious. Kaayo strengthens it." },
      { en: "Ask someone to say it again because you did not understand.", bisaya: "Pasensya, wala ko kasabot. Usba lang.", note: "Usba means say it again or repeat." },
      { en: "Someone thanks you. Brush it off casually.", bisaya: "Walay sapayan.", note: "The Bisaya version of don't mention it." },
    ]
  },

  // ── BLOCK 3 ─────────────────────────────────────────────
  {
    id: 23,
    type: 'drill',
    title: 'Kapoy sa Trabaho',
    subtitle: 'venting about work',
    lines: [
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Kapoy kaayo sa trabaho karon. Grabeng damo.', en: "Work is so exhausting today. Way too much." },
      { speaker: 'jowa',   name: 'Si Jowa',   bisaya: 'Unsay nahitabo?', en: "What happened?" },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Daghang deadline. Tanan gusto urgente.', en: "Too many deadlines. Everyone wants things urgent." },
      { speaker: 'jowa',   name: 'Si Jowa',   bisaya: 'Naka-kaon ka man?', en: "Have you eaten at least?" },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Wala pa. Busy kaayo ko.', en: "Not yet. I was too busy." },
      { speaker: 'jowa',   name: 'Si Jowa',   bisaya: 'Kaon una. Di ka makahimo og wala kay gana.', en: "Eat first. You can't function without fuel." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Sige. Pahulat ko sa boss ko.', en: "Fine. Let me just tell my boss to wait." },
      { speaker: 'jowa',   name: 'Si Jowa',   bisaya: 'Oo. Importante ang imong lawas.', en: "Yes. Your body comes first." },
    ]
  },
  {
    id: 24,
    type: 'drill',
    title: 'Bag-ong Numero',
    subtitle: 'sharing your contact info',
    lines: [
      { speaker: 'classmate',  name: 'Si Classmate',  bisaya: 'Naa bay numero nimo? Mag-text ta.', en: "Do you have a number? Let us text." },
      { speaker: 'me',         name: 'Ikaw',           bisaya: 'Naa. Ig-save nimo. Zero nine...', en: "Yes. Save this. Zero nine..." },
      { speaker: 'classmate',  name: 'Si Classmate',  bisaya: 'Hulat lang, nag-type pa ko.', en: "Hold on, I am still typing." },
      { speaker: 'me',         name: 'Ikaw',           bisaya: 'Okay. Sultihi ko kung naa naka.', en: "Okay. Tell me once you have it." },
      { speaker: 'classmate',  name: 'Si Classmate',  bisaya: 'Naa na. Mag-Messenger ba ta?', en: "Got it. Should we use Messenger instead?" },
      { speaker: 'me',         name: 'Ikaw',           bisaya: 'Sige, mas maayo pa. Kanunay ko online.', en: "Sure, even better. I am always online." },
      { speaker: 'classmate',  name: 'Si Classmate',  bisaya: 'I-add ko ikaw later.', en: "I will add you later." },
      { speaker: 'me',         name: 'Ikaw',           bisaya: 'Sige. I-accept ko dayon.', en: "Sure. I will accept right away." },
    ]
  },
  {
    id: 25,
    type: 'drill',
    title: 'Unsa Imong Trabaho?',
    subtitle: 'talking about what you do',
    lines: [
      { speaker: 'tita',  name: 'Si Tita',  bisaya: 'Unsa na imong trabaho karon?', en: "What do you do for work now?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Nag-trabaho ko sa IT. Online ang trabaho.', en: "I work in IT. The work is online." },
      { speaker: 'tita',  name: 'Si Tita',  bisaya: 'Maayo. Pila ang sweldo nimo, kung pwede pangutan-on?', en: "Good. How much do you earn, if I may ask?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Dili ko mosulti. Pero okay ra.', en: "I would rather not say. But it is okay." },
      { speaker: 'tita',  name: 'Si Tita',  bisaya: 'Haha, sige. Malipay ka sa trabaho?', en: "Haha, fine. Are you happy with the work?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Okay lang. Maka-bayad sa bills, sige na.', en: "It is fine. It pays the bills, that is enough." },
      { speaker: 'tita',  name: 'Si Tita',  bisaya: 'Importante na ang stable. Di tanang oras masaya.', en: "Stability matters. It is not always fun." },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Oo, Tita. Tama ka ana.', en: "Yes, Tita. You are right about that." },
    ]
  },
  {
    id: 26,
    type: 'drill',
    title: 'Lagi Nang Ganahan',
    subtitle: 'talking about what you like',
    lines: [
      { speaker: 'bes',  name: 'Si Bes',  bisaya: 'Unsa imong paboritong pagkaon?', en: "What is your favorite food?" },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Manok nga sinugba. Kanunay ko niana.', en: "Grilled chicken. I always go for that." },
      { speaker: 'bes',  name: 'Si Bes',  bisaya: 'Ug unsa pay gusto nimo?', en: "And what else do you like?" },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Pancit. Lami kaayo kung init pa.', en: "Pancit. Really good when it is still hot." },
      { speaker: 'bes',  name: 'Si Bes',  bisaya: 'Ako pod. Unsa imong ayaw kaayo?', en: "Same. What do you dislike most?" },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Ampalaya. Di ko ganahan sa pait.', en: "Bitter melon. I don't like bitter things." },
      { speaker: 'bes',  name: 'Si Bes',  bisaya: 'Haha. Maayo man na para sa lawas.', en: "Haha. That is actually good for you." },
      { speaker: 'me',   name: 'Ikaw',    bisaya: 'Bisan pa. Dili pa gyud ko.', en: "Even so. Still not for me." },
    ]
  },
  {
    id: 27,
    type: 'drill',
    title: 'Naunsa Ka?',
    subtitle: 'asking what happened to someone',
    lines: [
      { speaker: 'kuya',  name: 'Si Kuya',  bisaya: 'Naunsa ka? Samok ang imong nawong.', en: "What happened to you? You look bothered." },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Gipasagdan ko sa jeep. Pito ka minuto lang.', en: "The jeep left me. Just seven minutes." },
      { speaker: 'kuya',  name: 'Si Kuya',  bisaya: 'Naa pay sunod. Pila ka minuto?', en: "There is another one. How long?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Baynte minutos pa. Kapoy hulaton.', en: "Twenty more minutes. It's tiring to wait." },
      { speaker: 'kuya',  name: 'Si Kuya',  bisaya: 'Mag-Grab na lang ka. Pila ang fare?', en: "Just Grab it. How much is the fare?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Mahal kaayo. Baynte pa lang ang jeep.', en: "Too expensive. The jeep is only twenty." },
      { speaker: 'kuya',  name: 'Si Kuya',  bisaya: 'Oo nga. Hulat na lang ka.', en: "True. Just wait then." },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Sige na. Wala na koy laing choice.', en: "Fine. I don't have much of a choice." },
    ]
  },
  {
    id: 28,
    type: 'drill',
    title: 'Dugay Na Nako',
    subtitle: 'catching up after a long time',
    lines: [
      { speaker: 'classmate',  name: 'Si Classmate',  bisaya: 'Hoy! Dugay ta walay balitaan!', en: "Hey! It has been so long since we caught up!" },
      { speaker: 'me',         name: 'Ikaw',           bisaya: 'Oo nga. Pila na kabuwan?', en: "Right. How many months has it been?" },
      { speaker: 'classmate',  name: 'Si Classmate',  bisaya: 'Mga upat. Kamusta ka na?', en: "About four. How have you been?" },
      { speaker: 'me',         name: 'Ikaw',           bisaya: 'Okay lang. Trabaho lang pirmi.', en: "I am fine. Just working all the time." },
      { speaker: 'classmate',  name: 'Si Classmate',  bisaya: 'Wala ka nagbakasyon?', en: "You haven't taken a vacation?" },
      { speaker: 'me',         name: 'Ikaw',           bisaya: 'Wala pa. Di ko kalingkawas.', en: "Not yet. I can't get away." },
      { speaker: 'classmate',  name: 'Si Classmate',  bisaya: 'Kinahanglan ka mag-pahinga. Seryoso.', en: "You need to rest. Seriously." },
      { speaker: 'me',         name: 'Ikaw',           bisaya: 'Oo. Basin sunod buwan. Naa pa koy plans.', en: "Yes. Maybe next month. I still have plans." },
    ]
  },
  {
    id: 29,
    type: 'drill',
    title: 'Gikulbaan Ko',
    subtitle: 'talking about being nervous',
    lines: [
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Gikulbaan ko. Naa koy presentasyon ugma.', en: "I am nervous. I have a presentation tomorrow." },
      { speaker: 'jowa',   name: 'Si Jowa',   bisaya: 'Andam ka na man. Maayong mo.', en: "You are prepared already. You will do well." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Di ko sigurado. Basin mag-blangko ko.', en: "I am not sure. I might blank out." },
      { speaker: 'jowa',   name: 'Si Jowa',   bisaya: 'Normal ra na. Slow down lang sa pag-ginhawa.', en: "That is normal. Just slow your breathing down." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Okay. Practice pa ko karong gabii.', en: "Okay. I will practice again tonight." },
      { speaker: 'jowa',   name: 'Si Jowa',   bisaya: 'Dili na sobra. Matulog ka ug sayo.', en: "Don't overdo it. Sleep early." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Sige. Mag-pray nalang ko.', en: "Alright. I will just pray." },
      { speaker: 'jowa',   name: 'Si Jowa',   bisaya: 'Maayo na. Confident ka. Kaya nimo.', en: "Good. Be confident. You can do it." },
    ]
  },
  {
    id: 30,
    type: 'drill',
    title: 'Bag-ong Sulod',
    subtitle: 'welcoming someone new',
    lines: [
      { speaker: 'me',        name: 'Ikaw',          bisaya: 'Uy, bag-o ka diri?', en: "Hey, are you new here?" },
      { speaker: 'newcomer',  name: 'Si Newcomer',   bisaya: 'Oo. Bag-o ko lang miabot.', en: "Yes. I just arrived." },
      { speaker: 'me',        name: 'Ikaw',           bisaya: 'Taga-asa ka man?', en: "Where are you from?" },
      { speaker: 'newcomer',  name: 'Si Newcomer',   bisaya: 'Taga-Davao ko. Ikaw?', en: "I am from Davao. You?" },
      { speaker: 'me',        name: 'Ikaw',           bisaya: 'Taga-CDO ko. Dugay na ko diri.', en: "I am from CDO. I have been here a long time." },
      { speaker: 'newcomer',  name: 'Si Newcomer',   bisaya: 'Maayo. Naa kay masulti bahin sa lugar?', en: "Good. Do you have tips about the area?" },
      { speaker: 'me',        name: 'Ikaw',           bisaya: 'Daghan. Kita ta later, irekomendar tika.', en: "Plenty. Let's meet up later, I will show you around." },
      { speaker: 'newcomer',  name: 'Si Newcomer',   bisaya: 'Salamat kaayo. Swerte nakong nakakilala nimo.', en: "Thank you so much. I am lucky I met you." },
    ]
  },
  {
    id: 31,
    type: 'drill',
    title: 'Gikapoy Ko Nimo',
    subtitle: 'being honest about frustration',
    lines: [
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Tagsa ra ta mag-usap. Ngano man?', en: "We rarely talk. How come?" },
      { speaker: 'friend', name: 'Si Friend', bisaya: 'Busy kaayo ko. Di ko nagpasagad.', en: "I have been really busy. I did not mean to." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Okay lang. Pero nasakitan ko.', en: "It is fine. But it did hurt." },
      { speaker: 'friend', name: 'Si Friend', bisaya: 'Pasensya na gyud. Di ko nakaingon.', en: "I am really sorry. I did not realize." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Di ko gusto nga mag-away ta. Ingna lang ko.', en: "I don't want to fight. Just tell me." },
      { speaker: 'friend', name: 'Si Friend', bisaya: 'Okay. Mag-ingon ko. Importante ka nako.', en: "Okay. I will. You matter to me." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Salamat sa pag-amin. Mao ra to.', en: "Thank you for saying that. That is all I needed." },
      { speaker: 'friend', name: 'Si Friend', bisaya: 'Sige. Kita ta pag-adto, kumpleto na ta.', en: "Deal. Let's meet up and catch up properly." },
    ]
  },
  {
    id: 32,
    type: 'drill',
    title: 'Grabe ang Balita',
    subtitle: 'reacting to surprising news',
    lines: [
      { speaker: 'pare',  name: 'Si Pare',  bisaya: 'Oy, nabalitaan na ka? Nagpakasal si Dodong.', en: "Hey, did you hear? Dodong is getting married." },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Unsa?! Kanus-a?', en: "What?! When?" },
      { speaker: 'pare',  name: 'Si Pare',  bisaya: 'Sunod buwan. Dali ra.', en: "Next month. Very soon." },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Kang kinsa man siya? Di ko kahibaw.', en: "Who is he marrying? I didn't know about this." },
      { speaker: 'pare',  name: 'Si Pare',  bisaya: 'Sa iya classmate sa college. Dugay na sila.', en: "His college classmate. They have been together a long time." },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Grabeng sekreto. Wala ko ni-abi.', en: "What a secret. I had no idea." },
      { speaker: 'pare',  name: 'Si Pare',  bisaya: 'Imbitado ta. Naa ka?', en: "We are invited. Are you going?" },
      { speaker: 'me',    name: 'Ikaw',     bisaya: 'Oo gyud. Di ko maka-miss ana.', en: "Of course. I cannot miss that." },
    ]
  },

  // ── BOSS 3 ───────────────────────────────────────────────
  {
    id: 33,
    type: 'boss',
    title: 'Boss 3',
    subtitle: 'harder situations, full production',
    challenges: [
      { en: "You are at a store and the item you want is out of stock. Ask if they will have it again.", bisaya: "Kanus-a ba mo maka-stock pag-usab?", note: "Pag-usab means again. Kanus-a is when." },
      { en: "Someone asks if you are free this weekend. Tell them you are busy Saturday but free Sunday.", bisaya: "Bisyo ko Sabado, pero libre ko Domingo.", note: "Bisyo here means busy. Libre means free." },
      { en: "Your friend is upset. Tell them you are on your way and will be there soon.", bisaya: "Hapit na ko. Pag-andam lang.", note: "Pag-andam lang is like just hold on or get ready." },
      { en: "Someone is being too loud near you. Politely ask them to lower their voice.", bisaya: "Pwede ba og gamay ra ang tingog? Salamat.", note: "Gamay ra ang tingog means lower the voice a little." },
      { en: "You are offered a seat on a jeep. Decline politely because you are getting off soon.", bisaya: "Salamat, pero manaog na ko sa sunod.", note: "Manaog means to get off. Sunod is next." },
      { en: "You want to split the bill with a friend. Suggest it.", bisaya: "Ato na lang siya i-split? Tagsa-tagsa ta.", note: "Tagsa-tagsa means each pays their own." },
      { en: "Someone gives you a compliment. Respond humbly.", bisaya: "Ay, salamat. Nag-overrate ka lang.", note: "Nag-overrate is understood in Bisaya casual speech." },
      { en: "Tell your friend you forgot your phone at home and ask to borrow theirs.", bisaya: "Nahikalimtan nako ang akong phone. Pwede ba ko manghulam nimo?", note: "Manghulam means to borrow from someone." },
    ]
  },
];
