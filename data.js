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
      { speaker: 'me',     name: 'Ikaw',     bisaya: 'Ate, hain ang CR?', en: "Ate, where is the restroom?" },
      { speaker: 'guard',  name: 'Si Guard', bisaya: 'Adto sa ikaduhang pasilyo, wala.', en: "Go to the second hallway, on the left." },
      { speaker: 'me',     name: 'Ikaw',     bisaya: 'Kini bang pasilyo o ang sunod?', en: "This hallway or the next one?" },
      { speaker: 'guard',  name: 'Si Guard', bisaya: 'Ang sunod. Tupad sa opisina.', en: "The next one. Next to the office." },
      { speaker: 'me',     name: 'Ikaw',     bisaya: 'Salamat. Buhaton na nako.', en: "Thank you. I'll go ahead." },
      { speaker: 'guard',  name: 'Si Guard', bisaya: 'Sige lang. Taas ang linya karon.', en: "Go ahead. The line is long right now." },
      { speaker: 'me',     name: 'Ikaw',     bisaya: 'Ay sus. Sige na lang.', en: "Oh no. Fine, I'll manage." },
      { speaker: 'guard',  name: 'Si Guard', bisaya: 'Maayo pa og adto ka sa ubos nga floor.', en: "Better go to the lower floor instead." },
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
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Init kaayo ngayon. Dili ko makalabas.', en: "It's so hot today. I can't go out." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Oo nga. Mag-aircon na lang ta sa sulod.', en: "Right. Let's just stay inside with the aircon." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Gusto ko unta og ice cream.', en: "I actually want ice cream." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Deliver na lang nato. Di na kita mogawas.', en: "Let's just have it delivered. We're not going out." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Mura bag mag-uwan. Tan-awa ang langit.', en: "Looks like it might rain. Look at the sky." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Mas maayo na lang nga mag-uwan. Mobugnaw.', en: "Better if it rains actually. It'll cool down." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Sige lang. Andam na ko og payong.', en: "Fine by me. I already have my umbrella ready." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Maayo ka. Wala koy payong diri.', en: "Good on you. I don't have one here." },
    ]
  },
  {
    id: 13,
    type: 'drill',
    title: 'Naa Ba Si?',
    subtitle: 'asking if someone is around',
    lines: [
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Naa ba si Kuya diri?', en: "Is Kuya here?" },
      { speaker: 'lola',  name: 'Si Lola', bisaya: 'Wala. Naglabay siya kagabi.', en: "No. He passed by last night." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Nahibaw-an mo kung asa siya karon?', en: "Do you know where he is now?" },
      { speaker: 'lola',  name: 'Si Lola', bisaya: 'Dili ko sigurado. Tingali sa trabaho.', en: "I'm not sure. Probably at work." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Sige, hatagan ko siyag mensahe.', en: "Okay, I'll send him a message." },
      { speaker: 'lola',  name: 'Si Lola', bisaya: 'O sige. Naay importante?', en: "Okay. Is it something important?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Dili kaayo. Pangutana lang ko.', en: "Not really. I just have a question." },
      { speaker: 'lola',  name: 'Si Lola', bisaya: 'Sige, hulata nalang niya ang imong mensahe.', en: "Alright, just wait for his reply." },
    ]
  },
  {
    id: 14,
    type: 'drill',
    title: 'Unsaon Pagluto?',
    subtitle: 'asking how to cook something',
    lines: [
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Nay, unsaon pagluto og tinola?', en: "Mom, how do you cook tinola?" },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Lutoa ang manok sa tubig una.', en: "Boil the chicken in water first." },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Pila ka minuto?', en: "For how many minutes?" },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Mga baynte minutos. Hangtod humok.', en: "About twenty minutes. Until it's tender." },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Unya ibutang na ang utan?', en: "Then add the vegetables?" },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Oo. Sayote una, papaya sunod.', en: "Yes. Chayote first, then papaya." },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Unsa pa ang ibutang?', en: "What else goes in?" },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Patis ug paminta. Sige na, tan-awon mo.', en: "Fish sauce and pepper. Just watch me." },
    ]
  },
  {
    id: 15,
    type: 'drill',
    title: 'Maayo Rag Dili',
    subtitle: 'politely saying no to plans',
    lines: [
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Manggawas ta ugma gabii?', en: "Want to go out tomorrow night?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Dili ko kasabot ugma. Aduna koy plano.', en: "I can't make it tomorrow. I have plans." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Unsang plano? Kanselahon na lang.', en: "What plans? Just cancel them." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Dili pwede. Importante kaayo.', en: "Can't. It's really important." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Sige na. Kausa ra ni.', en: "Come on. This is a one-time thing." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Sigurado gyud dili. Sunod na lang.', en: "Definitely not. Next time." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Okay okay. Sunod na lang nga semana?', en: "Okay okay. Next week then?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Oo, sige. Ingna lang ko kung asa.', en: "Yes, sure. Just tell me where." },
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
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Suwayi ang kana nga lutaw. Lami kaayo.', en: "Try that dish over there. It is so good." },
      { speaker: 'bes',  name: 'Si Bes', bisaya: 'Unsa man na?', en: "What is that?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Kare-kare. Nasuwayi na nimo?', en: "Kare-kare. Have you tried it before?" },
      { speaker: 'bes',  name: 'Si Bes', bisaya: 'Wala pa. Lami ba gyud?', en: "Not yet. Is it really good?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Oo. Kuhaa og bagoong pud.', en: "Yes. Get some bagoong too." },
      { speaker: 'bes',  name: 'Si Bes', bisaya: 'Unsa ang bagoong?', en: "What is bagoong?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Asin nga isda. Ihalo sa kare-kare.', en: "Fermented fish paste. You mix it in." },
      { speaker: 'bes',  name: 'Si Bes', bisaya: 'Uy, lami diay. Salamat sa tip.', en: "Oh, it is good actually. Thanks for the tip." },
    ]
  },
  {
    id: 18,
    type: 'drill',
    title: 'Nawaldan Ko',
    subtitle: 'saying you lost something',
    lines: [
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Nawad-an ko og pitaka. Dili ko makit-an.', en: "I lost my wallet. I can't find it." },
      { speaker: 'kuya',  name: 'Si Kuya', bisaya: 'Asa ka katong nag-adto?', en: "Where did you go earlier?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Sa mall lang. Naa gyud ko niana.', en: "Just the mall. I definitely had it there." },
      { speaker: 'kuya',  name: 'Si Kuya', bisaya: 'Naa pay kwarta didto?', en: "Was there money in it?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Oo. Ug ang ID ko pa gyud.', en: "Yes. And my ID as well." },
      { speaker: 'kuya',  name: 'Si Kuya', bisaya: 'Tawgan ang mall. Basin nakit-an nila.', en: "Call the mall. Maybe they found it." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Unsa ang number nila?', en: "What is their number?" },
      { speaker: 'kuya',  name: 'Si Kuya', bisaya: 'I-Google na lang. Dali, ayaw hulata.', en: "Just Google it. Hurry, don't wait." },
    ]
  },
  {
    id: 19,
    type: 'drill',
    title: 'Pag-uli Na',
    subtitle: 'convincing someone to go home',
    lines: [
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Uli na ka. Gabii na.', en: "Come home now. It is already night." },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Konting oras pa lang, Nay.', en: "Just a little more time, Mom." },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Alas onse na. Ugma pa ang ugma.', en: "It's already eleven. Tomorrow is another day." },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Sige na. Mag-Grab na ko.', en: "Okay fine. I'll Grab home." },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Aduna kay bayad?', en: "Do you have money for it?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Naa pa. Dili ka mag-alala.', en: "I still have some. Don't worry." },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Sige. Ingna ko kung anaa ka na.', en: "Alright. Tell me when you get home." },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Okay, Nay. Katulgon na ka.', en: "Okay, Mom. Go to sleep." },
    ]
  },
  {
    id: 20,
    type: 'drill',
    title: 'Pwede Ba Ko?',
    subtitle: 'asking permission for something',
    lines: [
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Nay, pwede ko mag-gawas ugma?', en: "Mom, can I go out tomorrow?" },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Kang kinsa man ka kadto?', en: "Who are you going with?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Sa mga barkada. Sa mall lang.', en: "With friends. Just at the mall." },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Kinsa tong mga barkada nimo?', en: "Who are these friends?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Si Dodong ug si Bes. Nakilala mo na sila.', en: "Dodong and Bes. You have already met them." },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Unsa nga oras ka mouli?', en: "What time will you come home?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Sa alas singko sa hapon. Dili ko molate.', en: "By five in the afternoon. I won't be late." },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Sige. Pero alas singko gyud ha.', en: "Fine. But five o'clock sharp." },
    ]
  },
  {
    id: 21,
    type: 'drill',
    title: 'Naluoy Ko',
    subtitle: 'expressing sympathy',
    lines: [
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Namatay ang iro namo kagabi.', en: "Our dog died last night." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Ay sus. Pasensya na gyud ka.', en: "Oh no. I am so sorry to hear that." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Dugay na namo siya. Dose anyos na.', en: "We had him a long time. Twelve years already." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Dugay gyud. Sakit unta ang gibati nimo.', en: "That is a long time. You must be hurting." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Oo. Di ko matulog kagabi.', en: "Yes. I couldn't sleep last night." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Normal lang na. Dawata ang imong gibati.', en: "That is normal. Let yourself feel it." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Salamat. Tabang kaayo nga naa ka.', en: "Thank you. It really helps that you are here." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Kanunay ko naa para nimo. Usab.', en: "I am always here for you. Always." },
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
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Kapoy kaayo sa trabaho karon. Grabeng damo.', en: "Work is so exhausting today. Way too much." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Unsay nahitabo?', en: "What happened?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Daghang deadline. Tanan gusto urgente.', en: "Too many deadlines. Everyone wants things urgent." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Naka-kaon ka man?', en: "Have you eaten at least?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Wala pa. Busy kaayo ko.', en: "Not yet. I was too busy." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Kaon una. Di ka makahimo og wala kay gana.', en: "Eat first. You can't function without fuel." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Sige. Pahulat ko sa boss ko.', en: "Fine. Let me just tell my boss to wait." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Oo. Importante ang imong lawas.', en: "Yes. Your body comes first." },
    ]
  },
  {
    id: 24,
    type: 'drill',
    title: 'Bag-ong Numero',
    subtitle: 'sharing your contact info',
    lines: [
      { speaker: 'classmate',  name: 'Si Classmate', bisaya: 'Naa bay numero nimo? Mag-text ta.', en: "Do you have a number? Let us text." },
      { speaker: 'me',         name: 'Ikaw',         bisaya: 'Naa. Ig-save nimo. Zero nine...', en: "Yes. Save this. Zero nine..." },
      { speaker: 'classmate',  name: 'Si Classmate', bisaya: 'Hulat lang, nag-type pa ko.', en: "Hold on, I am still typing." },
      { speaker: 'me',         name: 'Ikaw',         bisaya: 'Okay. Sultihi ko kung naa naka.', en: "Okay. Tell me once you have it." },
      { speaker: 'classmate',  name: 'Si Classmate', bisaya: 'Naa na. Mag-Messenger ba ta?', en: "Got it. Should we use Messenger instead?" },
      { speaker: 'me',         name: 'Ikaw',         bisaya: 'Sige, mas maayo pa. Kanunay ko online.', en: "Sure, even better. I am always online." },
      { speaker: 'classmate',  name: 'Si Classmate', bisaya: 'I-add ko ikaw later.', en: "I will add you later." },
      { speaker: 'me',         name: 'Ikaw',         bisaya: 'Sige. I-accept ko dayon.', en: "Sure. I will accept right away." },
    ]
  },
  {
    id: 25,
    type: 'drill',
    title: 'Unsa Imong Trabaho?',
    subtitle: 'talking about what you do',
    lines: [
      { speaker: 'tita',  name: 'Si Tita', bisaya: 'Unsa na imong trabaho karon?', en: "What do you do for work now?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Nag-trabaho ko sa IT. Online ang trabaho.', en: "I work in IT. The work is online." },
      { speaker: 'tita',  name: 'Si Tita', bisaya: 'Maayo. Pila ang sweldo nimo, kung pwede pangutan-on?', en: "Good. How much do you earn, if I may ask?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Dili ko mosulti. Pero okay ra.', en: "I would rather not say. But it is okay." },
      { speaker: 'tita',  name: 'Si Tita', bisaya: 'Haha, sige. Malipay ka sa trabaho?', en: "Haha, fine. Are you happy with the work?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Okay lang. Maka-bayad sa bills, sige na.', en: "It is fine. It pays the bills, that is enough." },
      { speaker: 'tita',  name: 'Si Tita', bisaya: 'Importante na ang stable. Di tanang oras masaya.', en: "Stability matters. It is not always fun." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Oo, Tita. Tama ka ana.', en: "Yes, Tita. You are right about that." },
    ]
  },
  {
    id: 26,
    type: 'drill',
    title: 'Lagi Nang Ganahan',
    subtitle: 'talking about what you like',
    lines: [
      { speaker: 'bes',  name: 'Si Bes', bisaya: 'Unsa imong paboritong pagkaon?', en: "What is your favorite food?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Manok nga sinugba. Kanunay ko niana.', en: "Grilled chicken. I always go for that." },
      { speaker: 'bes',  name: 'Si Bes', bisaya: 'Ug unsa pay gusto nimo?', en: "And what else do you like?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Pancit. Lami kaayo kung init pa.', en: "Pancit. Really good when it is still hot." },
      { speaker: 'bes',  name: 'Si Bes', bisaya: 'Ako pod. Unsa imong ayaw kaayo?', en: "Same. What do you dislike most?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Ampalaya. Di ko ganahan sa pait.', en: "Bitter melon. I don't like bitter things." },
      { speaker: 'bes',  name: 'Si Bes', bisaya: 'Haha. Maayo man na para sa lawas.', en: "Haha. That is actually good for you." },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Bisan pa. Dili pa gyud ko.', en: "Even so. Still not for me." },
    ]
  },
  {
    id: 27,
    type: 'drill',
    title: 'Naunsa Ka?',
    subtitle: 'asking what happened to someone',
    lines: [
      { speaker: 'kuya',  name: 'Si Kuya', bisaya: 'Naunsa ka? Samok ang imong nawong.', en: "What happened to you? You look bothered." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Gipasagdan ko sa jeep. Pito ka minuto lang.', en: "The jeep left me. Just seven minutes." },
      { speaker: 'kuya',  name: 'Si Kuya', bisaya: 'Naa pay sunod. Pila ka minuto?', en: "There is another one. How long?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Baynte minutos pa. Kapoy hulaton.', en: "Twenty more minutes. It's tiring to wait." },
      { speaker: 'kuya',  name: 'Si Kuya', bisaya: 'Mag-Grab na lang ka. Pila ang fare?', en: "Just Grab it. How much is the fare?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Mahal kaayo. Baynte pa lang ang jeep.', en: "Too expensive. The jeep is only twenty." },
      { speaker: 'kuya',  name: 'Si Kuya', bisaya: 'Oo nga. Hulat na lang ka.', en: "True. Just wait then." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Sige na. Wala na koy laing choice.', en: "Fine. I don't have much of a choice." },
    ]
  },
  {
    id: 28,
    type: 'drill',
    title: 'Dugay Na Nako',
    subtitle: 'catching up after a long time',
    lines: [
      { speaker: 'classmate',  name: 'Si Classmate', bisaya: 'Hoy! Dugay ta walay balitaan!', en: "Hey! It has been so long since we caught up!" },
      { speaker: 'me',         name: 'Ikaw',         bisaya: 'Oo nga. Pila na kabuwan?', en: "Right. How many months has it been?" },
      { speaker: 'classmate',  name: 'Si Classmate', bisaya: 'Mga upat. Kamusta ka na?', en: "About four. How have you been?" },
      { speaker: 'me',         name: 'Ikaw',         bisaya: 'Okay lang. Trabaho lang pirmi.', en: "I am fine. Just working all the time." },
      { speaker: 'classmate',  name: 'Si Classmate', bisaya: 'Wala ka nagbakasyon?', en: "You haven't taken a vacation?" },
      { speaker: 'me',         name: 'Ikaw',         bisaya: 'Wala pa. Di ko kalingkawas.', en: "Not yet. I can't get away." },
      { speaker: 'classmate',  name: 'Si Classmate', bisaya: 'Kinahanglan ka mag-pahinga. Seryoso.', en: "You need to rest. Seriously." },
      { speaker: 'me',         name: 'Ikaw',         bisaya: 'Oo. Basin sunod buwan. Naa pa koy plans.', en: "Yes. Maybe next month. I still have plans." },
    ]
  },
  {
    id: 29,
    type: 'drill',
    title: 'Gikulbaan Ko',
    subtitle: 'talking about being nervous',
    lines: [
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Gikulbaan ko. Naa koy presentasyon ugma.', en: "I am nervous. I have a presentation tomorrow." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Andam ka na man. Maayong mo.', en: "You are prepared already. You will do well." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Di ko sigurado. Basin mag-blangko ko.', en: "I am not sure. I might blank out." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Normal ra na. Slow down lang sa pag-ginhawa.', en: "That is normal. Just slow your breathing down." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Okay. Practice pa ko karong gabii.', en: "Okay. I will practice again tonight." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Dili na sobra. Matulog ka ug sayo.', en: "Don't overdo it. Sleep early." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Sige. Mag-pray nalang ko.', en: "Alright. I will just pray." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Maayo na. Confident ka. Kaya nimo.', en: "Good. Be confident. You can do it." },
    ]
  },
  {
    id: 30,
    type: 'drill',
    title: 'Bag-ong Sulod',
    subtitle: 'welcoming someone new',
    lines: [
      { speaker: 'me',       name: 'Ikaw',       bisaya: 'Uy, bag-o ka diri?', en: "Hey, are you new here?" },
      { speaker: 'newcomer', name: 'Si Newcomer', bisaya: 'Oo. Bag-o ko lang miabot.', en: "Yes. I just arrived." },
      { speaker: 'me',       name: 'Ikaw',       bisaya: 'Taga-asa ka man?', en: "Where are you from?" },
      { speaker: 'newcomer', name: 'Si Newcomer', bisaya: 'Taga-Davao ko. Ikaw?', en: "I am from Davao. You?" },
      { speaker: 'me',       name: 'Ikaw',       bisaya: 'Taga-CDO ko. Dugay na ko diri.', en: "I am from CDO. I have been here a long time." },
      { speaker: 'newcomer', name: 'Si Newcomer', bisaya: 'Maayo. Naa kay masulti bahin sa lugar?', en: "Good. Do you have tips about the area?" },
      { speaker: 'me',       name: 'Ikaw',       bisaya: 'Daghan. Kita ta later, irekomendar tika.', en: "Plenty. Let's meet up later, I will show you around." },
      { speaker: 'newcomer', name: 'Si Newcomer', bisaya: 'Salamat kaayo. Swerte nakong nakakilala nimo.', en: "Thank you so much. I am lucky I met you." },
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
      { speaker: 'pare',  name: 'Si Pare', bisaya: 'Oy, nabalitaan na ka? Nagpakasal si Dodong.', en: "Hey, did you hear? Dodong is getting married." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Unsa?! Kanus-a?', en: "What?! When?" },
      { speaker: 'pare',  name: 'Si Pare', bisaya: 'Sunod buwan. Dali ra.', en: "Next month. Very soon." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Kang kinsa man siya? Di ko kahibaw.', en: "Who is he marrying? I didn't know about this." },
      { speaker: 'pare',  name: 'Si Pare', bisaya: 'Sa iya classmate sa college. Dugay na sila.', en: "His college classmate. They have been together a long time." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Grabeng sekreto. Wala ko ni-abi.', en: "What a secret. I had no idea." },
      { speaker: 'pare',  name: 'Si Pare', bisaya: 'Imbitado ta. Naa ka?', en: "We are invited. Are you going?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Oo gyud. Di ko maka-miss ana.', en: "Of course. I cannot miss that." },
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

  // ── BLOCK 4 ─────────────────────────────────────────────
  {
    id: 34,
    type: 'drill',
    title: 'Kinahanglan Ko',
    subtitle: 'expressing a need urgently',
    lines: [
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Kinahanglan ko og tabang. Dali ra.', en: "I need help. Just quickly." },
      { speaker: 'kuya',  name: 'Si Kuya', bisaya: 'Unsay nahitabo? Okay ka ba?', en: "What happened? Are you okay?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Naa koy flat tire. Di ko kahibaw og ayuson.', en: "I have a flat tire. I don't know how to fix it." },
      { speaker: 'kuya',  name: 'Si Kuya', bisaya: 'Asa ka karon?', en: "Where are you right now?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Sa may kanto sa Divisoria. Duol sa simbahan.', en: "Near the corner in Divisoria. Close to the church." },
      { speaker: 'kuya',  name: 'Si Kuya', bisaya: 'Tara, adto ko nimo. Baynte minutos lang.', en: "I am coming to you. Just twenty minutes." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Salamat kaayo. Nagkinahanglan gyud ko.', en: "Thank you so much. I really needed this." },
      { speaker: 'kuya',  name: 'Si Kuya', bisaya: 'Hulat lang. Ayaw panawon.', en: "Just wait. Don't go anywhere." },
    ]
  },
  {
    id: 35,
    type: 'drill',
    title: 'Sa Barbero',
    subtitle: 'getting a haircut',
    lines: [
      { speaker: 'barbero', name: 'Si Barbero', bisaya: 'Unsa imong gusto, boss?', en: "What would you like, boss?" },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Pag-ilis lang. Dili kaayo mubo.', en: "Just a trim. Not too short." },
      { speaker: 'barbero', name: 'Si Barbero', bisaya: 'Unsa nga numero sa gilid?', en: "What number on the sides?" },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Tres lang. Ug layer sa taas.', en: "Just a three. And layers on top." },
      { speaker: 'barbero', name: 'Si Barbero', bisaya: 'Gusto ka og fade?', en: "Do you want a fade?" },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Oo, pero natural lang. Dili grabe.', en: "Yes, but keep it natural. Not too extreme." },
      { speaker: 'barbero', name: 'Si Barbero', bisaya: 'Sige boss. Limpyohan pud ang liog?', en: "Okay boss. Should I clean up the neck too?" },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Oo, palihug. Salamat.', en: "Yes, please. Thank you." },
    ]
  },
  {
    id: 36,
    type: 'drill',
    title: 'Naa Koy Problema',
    subtitle: 'opening up about a problem',
    lines: [
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Bes, pwede ba kita mag-usap? Seryoso.', en: "Bes, can we talk? It is serious." },
      { speaker: 'friend', name: 'Si Friend', bisaya: 'Sige, unsa man? Okay ka ba?', en: "Sure, what is it? Are you okay?" },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Naa koy problema sa trabaho. Lisod kaayo.', en: "I have a problem at work. It is really difficult." },
      { speaker: 'friend', name: 'Si Friend', bisaya: 'Sultihi ko tanan. Naa ko diri.', en: "Tell me everything. I am here." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Gusto nila ko mag-resign. Pero di ko gusto.', en: "They want me to resign. But I don't want to." },
      { speaker: 'friend', name: 'Si Friend', bisaya: 'Nagpugos sila? Di nila pwede na buhaton na.', en: "They are forcing you? They can't do that." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Dili pa ko sigurado kung unsa ang buhaton.', en: "I am not sure yet what to do." },
      { speaker: 'friend', name: 'Si Friend', bisaya: 'Mag-isip ta og solusyon. Dugay pa kita.', en: "Let us think of a solution. We have time." },
    ]
  },
  {
    id: 37,
    type: 'drill',
    title: 'Mag-exercise Ta',
    subtitle: 'convincing someone to work out with you',
    lines: [
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Mag-exercise ta ugma sa buntag?', en: "Want to exercise with me tomorrow morning?" },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Kapoy. Dili pa ko ready.', en: "That is tiring. I am not ready yet." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Gamay ra. Jogging lang sa park.', en: "Just a little. Only jogging at the park." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Unsa nga oras?', en: "What time?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Alas siyete. Di pa init kaayo.', en: "Seven o'clock. It is not that hot yet." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Sige, pero dili ko molarga kung mulate ka.', en: "Fine, but I am not waiting if you are late." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Di ko molate. Promise.', en: "I will not be late. I promise." },
      { speaker: 'jowa',  name: 'Si Jowa', bisaya: 'Okay. Pag-andam og tubig.', en: "Okay. Bring water." },
    ]
  },
  {
    id: 38,
    type: 'drill',
    title: 'Sa Ospital',
    subtitle: 'talking to a doctor or nurse',
    lines: [
      { speaker: 'nurse',  name: 'Si Nurse', bisaya: 'Unsa imong reklamo?', en: "What is your complaint?" },
      { speaker: 'me',     name: 'Ikaw',     bisaya: 'Sakit ang tiyan ko sukad kagabi.', en: "My stomach has been hurting since last night." },
      { speaker: 'nurse',  name: 'Si Nurse', bisaya: 'Naa ka bay hilanat?', en: "Do you have a fever?" },
      { speaker: 'me',     name: 'Ikaw',     bisaya: 'Dili ko sigurado. Mura bag naa.', en: "I am not sure. Feels like it." },
      { speaker: 'nurse',  name: 'Si Nurse', bisaya: 'Naa ka bay gisuka o gihubo?', en: "Have you vomited or had diarrhea?" },
      { speaker: 'me',     name: 'Ikaw',     bisaya: 'Naa. Tulo na ka beses sukad kagabi.', en: "Yes. Three times already since last night." },
      { speaker: 'nurse',  name: 'Si Nurse', bisaya: 'Kuhaa og number. Hulat ka sa labas.', en: "Take a number. Wait outside." },
      { speaker: 'me',     name: 'Ikaw',     bisaya: 'Pila ka dugay ang hulat?', en: "How long is the wait?" },
    ]
  },
  {
    id: 39,
    type: 'drill',
    title: 'Sulod sa Taxi',
    subtitle: 'giving directions to a driver',
    lines: [
      { speaker: 'driver',  name: 'Si Driver', bisaya: 'Asa mo, boss?', en: "Where to, boss?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Sa SM City. Kilala mo?', en: "To SM City. Do you know it?" },
      { speaker: 'driver',  name: 'Si Driver', bisaya: 'Oo. Duha ka dalan paingon doon.', en: "Yes. There are two ways to get there." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Unsa ang mas dali? Busy ko karon.', en: "Which is faster? I am in a hurry." },
      { speaker: 'driver',  name: 'Si Driver', bisaya: 'Sa highway, pero naa puy trapik karon.', en: "Via the highway, but there is traffic right now." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Sige, trabahoa na. Kinahanglan ko sa trese.', en: "Just go for it. I need to be there by one." },
      { speaker: 'driver',  name: 'Si Driver', bisaya: 'Maningkamot ko, boss. Basta naa pay sulod.', en: "I will try my best, boss. As long as there is a gap." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Sige. Salamat kung makaya.', en: "Alright. Thanks if you can manage it." },
    ]
  },
  {
    id: 40,
    type: 'drill',
    title: 'Nagpahuwam Ko',
    subtitle: 'lending something to a friend',
    lines: [
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Pwede ba ko manghulam og kwarta? Pananglitan lang.', en: "Can I borrow some money? Just temporarily." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Pila man?', en: "How much?" },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Singkwenta lang. Kulang sa jeep.', en: "Just fifty. Short for the jeep fare." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Naa ra. Ania.', en: "I have some. Here." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Salamat. Bayran tika sa ugma.', en: "Thanks. I will pay you back tomorrow." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Okay lang. Dili urgent.', en: "It is fine. No rush." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Dili ko ganahan nga nay utang. Bayran gyud tika.', en: "I don't like having debts. I will really pay you." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Nahibaw-an ko. Wala ko nagduha-duha.', en: "I know. I never doubted you." },
    ]
  },
  {
    id: 41,
    type: 'drill',
    title: 'Di Ko Ganahan',
    subtitle: 'expressing a dislike directly',
    lines: [
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Tan-awa ni nga show. Lami kaayo siya.', en: "Watch this show. It is really good." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Unsa nga show?', en: "What show?" },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Kana nga koreano. Bag-o ra kaayo.', en: "That Korean one. Very new." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Di ko ganahan og koreano nga show.', en: "I don't like Korean shows." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Nag-try na ka? Di mo parehas ang tanan.', en: "Have you tried any? They are not all the same." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Pipila ka episodes ra. Di ko natuloy.', en: "Just a few episodes. I never continued." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Basi lang. Kani pud lahi.', en: "Maybe this one is different." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Sige, suwayon ko. Pero dili ko nag-saad.', en: "Fine, I will try it. But I am not promising anything." },
    ]
  },
  {
    id: 42,
    type: 'drill',
    title: 'Reunion',
    subtitle: 'seeing family after a long time',
    lines: [
      { speaker: 'tito',  name: 'Si Tito', bisaya: 'Ay, nag-dako ka na kaayo! Dugay ta.', en: "You have grown so much! It has been so long." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Oo, Tito. Dugay na gyud. Kamusta ka?', en: "Yes, Tito. It really has been. How are you?" },
      { speaker: 'tito',  name: 'Si Tito', bisaya: 'Okay lang. Tigulang na ko. Ikaw?', en: "I am fine. Just getting old. You?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Maayo ra ko. Nag-trabaho na ko karon.', en: "I am good. I am working already now." },
      { speaker: 'tito',  name: 'Si Tito', bisaya: 'Saan? Diri ba sa CDO?', en: "Where? Here in CDO?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Oo. Online ang trabaho, sa balay lang ko.', en: "Yes. The work is online, I work from home." },
      { speaker: 'tito',  name: 'Si Tito', bisaya: 'Maayo na. Naa naka sa balay pirmi.', en: "That is good. You are always home." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Oo Tito. Kita ta pag-kaon ugma?', en: "Yes Tito. Can we eat together tomorrow?" },
    ]
  },
  {
    id: 43,
    type: 'drill',
    title: 'Nawong Sa Opisina',
    subtitle: 'small talk with a coworker',
    lines: [
      { speaker: 'coworker',  name: 'Si Coworker', bisaya: 'Hoy, bag-o ka ba diri?', en: "Hey, are you new here?" },
      { speaker: 'me',        name: 'Ikaw',        bisaya: 'Oo. Ikaduhang semana pa lang nako.', en: "Yes. It is only my second week." },
      { speaker: 'coworker',  name: 'Si Coworker', bisaya: 'Kumusta ang trabaho? Okay ba?', en: "How is the job? Is it okay?" },
      { speaker: 'me',        name: 'Ikaw',        bisaya: 'Daghan pag-akat. Pero okay ang mga tawo.', en: "A lot to learn. But the people are nice." },
      { speaker: 'coworker',  name: 'Si Coworker', bisaya: 'Oo, maayo diri. Libre ang lunch basta birthday.', en: "Yes, it is good here. Lunch is free on birthdays." },
      { speaker: 'me',        name: 'Ikaw',        bisaya: 'Grabe. Naa ba koy nasayran pa?', en: "Wow. Anything else I should know?" },
      { speaker: 'coworker',  name: 'Si Coworker', bisaya: 'Ayaw ug mag-late sa Lunes. Mahilig ang boss.', en: "Don't be late on Mondays. The boss notices." },
      { speaker: 'me',        name: 'Ikaw',        bisaya: 'Salamat sa tip. Malimtan ko unta na.', en: "Thanks for the tip. I would have forgotten that." },
    ]
  },

  // ── BOSS 4 ───────────────────────────────────────────────
  {
    id: 44,
    type: 'boss',
    title: 'Boss 4',
    subtitle: 'real-world pressure situations',
    challenges: [
      { en: "You ordered the wrong item at a food stall. Tell them politely and ask to change it.", bisaya: "Pasensya, sayop ko og order. Pwede ba nako ilisan?", note: "Ilisan means to replace or swap." },
      { en: "Someone cuts in front of you in line. Calmly point it out.", bisaya: "Pasensya, naa na koy numero diri. Ang linya naa sa luyo.", note: "Sa luyo means at the back." },
      { en: "Your phone is dying and you need to charge it. Ask a stranger if there is an outlet nearby.", bisaya: "Naa ba diri og outlet? Patay na ang battery ko.", note: "Patay here means dead, as in out of battery." },
      { en: "Tell someone you are running a bit late and ask them to order for you.", bisaya: "Molate ko konti. Order na lang ko nimo, okay?", note: "Order na lang ko nimo means order on my behalf." },
      { en: "A vendor is pressuring you to buy. Tell them you are just looking.", bisaya: "Tan-aw lang ko. Salamat.", note: "Short and enough. No further explanation needed." },
      { en: "Someone asks if you want to join a group photo. Say yes enthusiastically.", bisaya: "Oo, sige! Dali lang.", note: "Dali lang signals you are ready and not hesitating." },
      { en: "You finished eating and want to ask for the bill.", bisaya: "Pwede na ang bayad?", note: "Clean and direct. No need for padded phrasing." },
      { en: "Tell your friend their idea is good but you want to think about it first.", bisaya: "Maayo ang ideya nimo. Hunahunaan ko una.", note: "Hunahunaan ko una is I will think about it first." },
    ]
  },

  // ── BLOCK 5 ─────────────────────────────────────────────
  {
    id: 45,
    type: 'drill',
    title: 'Sa Palengke',
    subtitle: 'buying at the wet market',
    lines: [
      { speaker: 'vendor',  name: 'Si Vendor', bisaya: 'Unsa imong gusto, day?', en: "What would you like, dear?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Pila ang kilo sa bangus?', en: "How much per kilo of bangus?" },
      { speaker: 'vendor',  name: 'Si Vendor', bisaya: 'Dose anyente sa kilo. Presko pa.', en: "One hundred twenty a kilo. Still fresh." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Tulo ka piraso, pwede?', en: "Three pieces, is that okay?" },
      { speaker: 'vendor',  name: 'Si Vendor', bisaya: 'Sige. Limpyohan ko ba?', en: "Sure. Should I clean it?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Oo, palihug. Alianan ang langib.', en: "Yes, please. Remove the scales." },
      { speaker: 'vendor',  name: 'Si Vendor', bisaya: 'Ibuak pud ba ang tiyan?', en: "Should I also cut the belly open?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Oo, para sulod og relyeno. Salamat.', en: "Yes, for stuffing it. Thank you." },
    ]
  },
  {
    id: 46,
    type: 'drill',
    title: 'Gibug-atan Ko',
    subtitle: 'talking about feeling stressed or overwhelmed',
    lines: [
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Gibug-atan ko karon. Daghan kaayo.', en: "I feel overwhelmed right now. Too much going on." },
      { speaker: 'friend', name: 'Si Friend', bisaya: 'Unsa tong mga gibug-atan nimo?', en: "What is weighing on you?" },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Trabaho, pamilya, kwarta. Tanan sa usa ka higayon.', en: "Work, family, money. All at once." },
      { speaker: 'friend', name: 'Si Friend', bisaya: 'Normal lang na. Di tanan kaya sa usa ka araw.', en: "That is normal. Not everything can be handled in one day." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Nahibaw-an ko. Pero mabug-at gihapon.', en: "I know. But it still feels heavy." },
      { speaker: 'friend', name: 'Si Friend', bisaya: 'Mag-ginhawa lang. Usa-usa ra.', en: "Just breathe. Take it one at a time." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Salamat. Nagkinahanglan ko og maminaw.', en: "Thank you. I needed someone to listen." },
      { speaker: 'friend', name: 'Si Friend', bisaya: 'Kanunay. Naa ko.', en: "Always. I am here." },
    ]
  },
  {
    id: 47,
    type: 'drill',
    title: 'Sa Bangko',
    subtitle: 'transacting at the bank',
    lines: [
      { speaker: 'teller',  name: 'Si Teller', bisaya: 'Unsa imong transaksyon?', en: "What is your transaction?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Mag-withdraw ko. Pila ang limit sa araw?', en: "I am withdrawing. What is the daily limit?" },
      { speaker: 'teller',  name: 'Si Teller', bisaya: 'Baynte mil sa isang araw, sir.', en: "Twenty thousand per day, sir." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Sige, singko mil lang. Ania ang ATM card ko.', en: "Okay, just five thousand. Here is my ATM card." },
      { speaker: 'teller',  name: 'Si Teller', bisaya: 'Adunay valid ID?', en: "Do you have a valid ID?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Oo. Ania ang driver\'s license.', en: "Yes. Here is my driver's license." },
      { speaker: 'teller',  name: 'Si Teller', bisaya: 'Salamat. Hulat lang usa ka gutlo.', en: "Thank you. Please wait a moment." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Sige. Naa ba koy kwenta sa dihang mahuman?', en: "Okay. Will I get a receipt when it is done?" },
    ]
  },
  {
    id: 48,
    type: 'drill',
    title: 'Bag-ong Luto',
    subtitle: 'trying food you made for the first time',
    lines: [
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Niluto ka? Unsa man na?', en: "You cooked? What is that?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Tinolang isda. Suwayi na nimo.', en: "Fish sinigang. Go ahead and try it." },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Hm. Unsa imong gibutang?', en: "Hmm. What did you put in?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Kamatis, sibuyas, ug gabi. Ug siyempre bangus.', en: "Tomatoes, onion, and taro. And of course bangus." },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Lami man diay. Medyo kulang sa asin.', en: "It is actually good. Just a little short on salt." },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Nahibaw-an na ko. Susunod mas maayo.', en: "I already know. Next time will be better." },
      { speaker: 'nay',  name: 'Si Nay', bisaya: 'Maayo na para una. Sige ka niyan.', en: "Already good for a first try. Keep it up." },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Salamat, Nay. Hatagan tika og duha ka tasa.', en: "Thanks, Mom. I will give you two cups." },
    ]
  },
  {
    id: 49,
    type: 'drill',
    title: 'Hunahunaan Pa',
    subtitle: 'being undecided about something',
    lines: [
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Nakahukom na ka? Adto ka ba o dili?', en: "Have you decided? Are you going or not?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Wala pa. Naghuna-huna pa ko.', en: "Not yet. I am still thinking." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Unsa imong gihunahuna?', en: "What are you thinking about?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Kwarta ug oras. Duha ka problema.', en: "Money and time. Two problems." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Hatagan ta ka og panahon. Pero dili langan.', en: "I will give you time. But don't take too long." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Sige. Sultihi ko sa ugma.', en: "Okay. I will tell you tomorrow." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Pero gusto ko nga moadto ka ha.', en: "But I want you to come, okay." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Nahibaw-an ko. Makita na lang nato.', en: "I know. We will see." },
    ]
  },
  {
    id: 50,
    type: 'drill',
    title: 'Mag-serbisyo',
    subtitle: 'helping out at a family event',
    lines: [
      { speaker: 'tita',  name: 'Si Tita', bisaya: 'Pwede ka motabang sa kusina?', en: "Can you help in the kitchen?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Oo, Tita. Unsa imong kinahanglan?', en: "Yes, Tita. What do you need?" },
      { speaker: 'tita',  name: 'Si Tita', bisaya: 'Laba-laba na ang plato ug ihanda ang lamesa.', en: "Wash the plates and set the table." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Pila ang tao? Para mahibaw-an ko pila ka plato.', en: "How many people? So I know how many plates." },
      { speaker: 'tita',  name: 'Si Tita', bisaya: 'Mga baynte. Naa pay mosulod.', en: "About twenty. More might still come." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Sige, mag-andam ko og baynte lima para sigurado.', en: "Okay, I will prepare twenty-five to be safe." },
      { speaker: 'tita',  name: 'Si Tita', bisaya: 'Maayo na. Ug ayaw kalimti ang baso.', en: "Good. And don't forget the glasses." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Oo, Tita. Ikaw ang mag-sige og luto.', en: "Yes, Tita. You just keep on cooking." },
    ]
  },
  {
    id: 51,
    type: 'drill',
    title: 'Online Shopping',
    subtitle: 'talking about a package that has not arrived',
    lines: [
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Nay, nag-abot na ba ang package nako?', en: "Mom, has my package arrived yet?" },
      { speaker: 'nay',   name: 'Si Nay',  bisaya: 'Wala pa. Dugay na kaayo.', en: "Not yet. It has been so long." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Lima na ka adlaw na. Naka-track ko, naa sa lungsod na.', en: "It has been five days. I tracked it, it is in the city already." },
      { speaker: 'nay',   name: 'Si Nay',  bisaya: 'Basin wala nakit-an ang address.', en: "Maybe they could not find the address." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Tawagan ko ang rider.', en: "I will call the rider." },
      { speaker: 'nay',   name: 'Si Nay',  bisaya: 'Naa ba number niya?', en: "Do you have their number?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Naa sa app. Hulat lang ko og sagot.', en: "It is in the app. I am waiting for a response." },
      { speaker: 'nay',   name: 'Si Nay',  bisaya: 'Sige. Sultihi ko kung nag-abot na.', en: "Okay. Tell me when it arrives." },
    ]
  },
  {
    id: 52,
    type: 'drill',
    title: 'Dili Ko Ganahan Mog Away',
    subtitle: 'trying to de-escalate a tense moment',
    lines: [
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Grabe ka. Wala ka nakadungog nako.', en: "You are unbelievable. You did not listen to me." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Naghulat ko nga mahuman ka. Di ko nagpuyo.', en: "I was waiting for you to finish. I was not ignoring you." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Murag di ka interesado.', en: "It seems like you are not interested." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Interesado ko. Tingali lahi lang ang akong paagi.', en: "I am interested. Maybe my way of showing it is just different." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Gusto ko nga mag-away ta. Kapoy na.', en: "I don't want us to fight. I am tired of it." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Ako pod. Mag-usap ta og maayo.', en: "Same here. Let us talk properly." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Sige. Pasensya na ko sa akong gisulti.', en: "Okay. Sorry for what I said." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Okay na. Mag-sugod ta og bag-o.', en: "It is okay. Let us start fresh." },
    ]
  },
  {
    id: 53,
    type: 'drill',
    title: 'Pag-hire og Tricycle',
    subtitle: 'negotiating with a tricycle driver',
    lines: [
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Manong, libre ba kamo? Sa Cogon.', en: "Manong, are you available? Going to Cogon." },
      { speaker: 'driver',  name: 'Si Driver', bisaya: 'Sige. Baynte pesos, boss.', en: "Sure. Twenty pesos, boss." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Mahal. Singkap na lang?', en: "That is too much. How about fifteen?" },
      { speaker: 'driver',  name: 'Si Driver', bisaya: 'Layo man. Baynte talaga.', en: "It is far. Twenty is fair." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Okay, baynte. Apil ba ang duha namo?', en: "Okay, twenty. Does that include both of us?" },
      { speaker: 'driver',  name: 'Si Driver', bisaya: 'Oo, duha lang man mo. Sulod na.', en: "Yes, there are only two of you. Come in." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Paabot ba ko sa may merkado?', en: "Can you drop me near the market?" },
      { speaker: 'driver',  name: 'Si Driver', bisaya: 'Sige. Sultihi lang ko kung asa.', en: "Sure. Just tell me where." },
    ]
  },
  {
    id: 54,
    type: 'drill',
    title: 'Bag-ong Buhok',
    subtitle: 'reacting to someone\'s new look',
    lines: [
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Kumusta ang bag-o kong buhok?', en: "What do you think of my new hair?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Uy, lahi kaayo. Bag-o.', en: "Oh, very different. Fresh." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Lami ba? Dili ba grabe?', en: "Is it nice? Is it not too much?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Bagay nimo.似乎 Mas Matanda ka lang konti.', en: "It suits you. You just look a bit more mature." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Haha. Okay lang na o dili?', en: "Haha. Is that okay or not?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Okay ra. Seryoso. Maganda ka.', en: "It is fine. Seriously. You look great." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Salamat. Nervous ko sa una.', en: "Thank you. I was nervous at first." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Normal lang na. Pero nindot gyud.', en: "That is normal. But it really looks good." },
    ]
  },

  // ── BOSS 5 ───────────────────────────────────────────────
  {
    id: 55,
    type: 'boss',
    title: 'Boss 5',
    subtitle: 'full spontaneous production under pressure',
    challenges: [
      { en: "You arrive somewhere and realize you left your wallet. Explain and ask to borrow for now.", bisaya: "Ay, nabiyaan ko ang pitaka. Pwede ko manghulam una?", note: "Nabiyaan means left behind by accident." },
      { en: "Someone asks if you have siblings. Tell them you have two, an older brother and a younger sister.", bisaya: "Naa. Usa ka kuya ug usa ka manghod nga babaye.", note: "Manghod means younger sibling. Babaye is female." },
      { en: "You are at a party and do not know anyone. Introduce yourself to the person next to you.", bisaya: "Hi, ako si [pangalan]. Bag-o lang ko diri.", note: "Bag-o lang ko diri means I am new here or just arrived." },
      { en: "Someone is giving you too much food. Tell them it is enough and you cannot finish more.", bisaya: "Sige na, igo na. Dili na ko makakuha ug dugang.", note: "Igo na means that is enough. Dugang means more." },
      { en: "You are catching a flight early and need to leave right now. Tell your friend quickly.", bisaya: "Palihug, kinahanglan na ko molarga. Flight ko sa sayo.", note: "Molarga means to leave or depart." },
      { en: "Greet your neighbor's elderly parent respectfully when you pass by their house.", bisaya: "Maayong buntag, Lolo. Kumusta ka na?", note: "Lolo for grandfather, Lola for grandmother. Always respectful." },
      { en: "Your friend asks if you are mad at them. Reassure them you are not.", bisaya: "Dili ko nasuko nimo. Okay ta.", note: "Nasuko means angry or mad. Okay ta means we are fine." },
      { en: "You dropped something in public. React and pick it up naturally.", bisaya: "Ay! Hubas!", note: "Hubas is a common Bisaya exclamation when something drops or spills." },
    ]
  },

  // ── BLOCK 6 ─────────────────────────────────────────────
  {
    id: 56,
    type: 'drill',
    title: 'Bata nga Pangutana',
    subtitle: 'explaining something simple to a child',
    lines: [
      { speaker: 'bata',  name: 'Si Bata', bisaya: 'Kuya, nganong nag-uwan man?', en: "Kuya, why is it raining?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Kay daghan tubig sa langit. Nahulog na.', en: "Because there is a lot of water in the sky. It is falling down." },
      { speaker: 'bata',  name: 'Si Bata', bisaya: 'Kanasa man ang tubig?', en: "Where did the water come from?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Gikan sa dagat. Gi-supsop sa init.', en: "From the ocean. The heat drew it up." },
      { speaker: 'bata',  name: 'Si Bata', bisaya: 'Nganong supsupun man?', en: "Why does it get drawn up?" },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Mao ra gyud na ang gibuhat sa adlaw. Natural.', en: "That is just what the sun does. It is natural." },
      { speaker: 'bata',  name: 'Si Bata', bisaya: 'Ah. Okay na ko.', en: "Ah. Okay, I get it." },
      { speaker: 'me',    name: 'Ikaw',    bisaya: 'Haha. Maayo. Balik ka sa sulod.', en: "Haha. Good. Go back inside." },
    ]
  },
  {
    id: 57,
    type: 'drill',
    title: 'Dapit sa Kapistahan',
    subtitle: 'talking during a local fiesta',
    lines: [
      { speaker: 'neighbor',  name: 'Si Neighbor', bisaya: 'Sulod, sulod! Naa pay pagkaon diri!', en: "Come in, come in! There is still food here!" },
      { speaker: 'me',        name: 'Ikaw',        bisaya: 'Salamat! Daghang tawo diri.', en: "Thank you! There are so many people here." },
      { speaker: 'neighbor',  name: 'Si Neighbor', bisaya: 'Oo, pista man. Kuhaa og litson.', en: "Yes, it is fiesta. Get some lechon." },
      { speaker: 'me',        name: 'Ikaw',        bisaya: 'Unsa pang naa? Ganahan ko og adobo.', en: "What else is there? I like adobo." },
      { speaker: 'neighbor',  name: 'Si Neighbor', bisaya: 'Naa sa katapusan nga lamesa. Pag-adto.', en: "It is at the last table. Go ahead." },
      { speaker: 'me',        name: 'Ikaw',        bisaya: 'Salamat, manghod. Maayo ang fiesta ninyo.', en: "Thank you. Your fiesta is really good." },
      { speaker: 'neighbor',  name: 'Si Neighbor', bisaya: 'Kanunay. Dugay kang hulaton diri.', en: "Always. We have been waiting for you." },
      { speaker: 'me',        name: 'Ikaw',        bisaya: 'Haha. Balik ko pag-kaon. Salamat kaayo.', en: "Haha. I will be back for more food. Thank you so much." },
    ]
  },
  {
    id: 58,
    type: 'drill',
    title: 'Mag-lakaw sa Bukid',
    subtitle: 'planning a nature trip with friends',
    lines: [
      { speaker: 'bes',  name: 'Si Bes', bisaya: 'Mag-lakaw ta sa bukid sa Sabado?', en: "Want to hike up the mountain on Saturday?" },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Asa nga bukid? Lisod ba ang dalan?', en: "Which mountain? Is the trail difficult?" },
      { speaker: 'bes',  name: 'Si Bes', bisaya: 'Bukid Himanglos. Dili kaayo. Tulo ka oras.', en: "Mount Himanglos. Not really. About three hours." },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Pila mo? Dili ko ganahan kung dako kaayo.', en: "How many of you? I don't like large groups." },
      { speaker: 'bes',  name: 'Si Bes', bisaya: 'Lima lang. Maluwas.', en: "Just five. Small enough." },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Sige. Unsa ang dad-on?', en: "Alright. What should we bring?" },
      { speaker: 'bes',  name: 'Si Bes', bisaya: 'Tubig, pagkaon, ug maayo nga sapatos.', en: "Water, food, and good shoes." },
      { speaker: 'me',   name: 'Ikaw',   bisaya: 'Noted. Andam ko sa Sabado.', en: "Noted. I will be ready on Saturday." },
    ]
  },
  {
    id: 59,
    type: 'drill',
    title: 'Reklamo sa Landlord',
    subtitle: 'reporting a problem with your rental',
    lines: [
      { speaker: 'me',       name: 'Ikaw',       bisaya: 'Manong, nay problema sa gripo sa kwarto ko.', en: "Manong, there is a problem with the faucet in my room." },
      { speaker: 'landlord', name: 'Si Landlord', bisaya: 'Unsa man ang nahitabo?', en: "What happened?" },
      { speaker: 'me',       name: 'Ikaw',       bisaya: 'Nagatulo. Wala na mahunong sukad kagabi.', en: "It is dripping. It has not stopped since last night." },
      { speaker: 'landlord', name: 'Si Landlord', bisaya: 'Sige, tan-awon ko ugma.', en: "Okay, I will check it tomorrow." },
      { speaker: 'me',       name: 'Ikaw',       bisaya: 'Pwede ba karon? Daghan na ang tubig na nasayang.', en: "Can it be today? A lot of water is already being wasted." },
      { speaker: 'landlord', name: 'Si Landlord', bisaya: 'Okay okay. Ania ko sa alas tres.', en: "Okay okay. I will be there at three." },
      { speaker: 'me',       name: 'Ikaw',       bisaya: 'Salamat. Naa ko diri.', en: "Thank you. I will be here." },
      { speaker: 'landlord', name: 'Si Landlord', bisaya: 'Sige. Ablihi lang ang puwerta.', en: "Alright. Just leave the door open." },
    ]
  },
  {
    id: 60,
    type: 'drill',
    title: 'Naghinulsol Ko',
    subtitle: 'admitting you were wrong',
    lines: [
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Saba ka kagabi. Nasakitan ko.', en: "You were harsh last night. It hurt me." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Nahibaw-an ko. Sayop ko. Pasensya na.', en: "I know. I was wrong. I am sorry." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Wala ka kasabot ug unsa ang imong gisulti?', en: "Did you not understand what you said?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Nasabot ko. Ginapas-an ko ra og dako kag away.', en: "I understood. I just took it out on you." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Ayaw ko og gamit nga ibubo sa imong frustrasyon.', en: "Don't use me as a dumping ground for your frustration." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Tama ka. Dili na ko magbuhat ana pag-usab.', en: "You are right. I will not do that again." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Okay. Dawaton ko. Pero ingon ana ra gyud ha.', en: "Okay. I accept it. But just that once, okay." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Salamat. Importante nimo nako.', en: "Thank you. You matter to me." },
    ]
  },
  {
    id: 61,
    type: 'drill',
    title: 'Dapit sa Restobar',
    subtitle: 'ordering at a bar or restaurant',
    lines: [
      { speaker: 'server',  name: 'Si Server', bisaya: 'Good evening! Unsa imong order?', en: "Good evening! What will you order?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Unsa imong rekomendasyon?', en: "What do you recommend?" },
      { speaker: 'server',  name: 'Si Server', bisaya: 'Ang crispy pata namo sikat. Ug ang sizzling tofu.', en: "Our crispy pata is popular. And the sizzling tofu." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Sige, crispy pata. Ug tubig lang una.', en: "Okay, crispy pata. And just water for now." },
      { speaker: 'server',  name: 'Si Server', bisaya: 'Naa mo bay drinks? Naa mi promos.', en: "Will you be having drinks? We have promos." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Unsa ang promo?', en: "What is the promo?" },
      { speaker: 'server',  name: 'Si Server', bisaya: 'Libre ang usa ka beer sa minimum na dos mil.', en: "One free beer with a minimum of two thousand." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Sige, iapil na pud ang promo. Salamat.', en: "Okay, include the promo then. Thank you." },
    ]
  },
  {
    id: 62,
    type: 'drill',
    title: 'Nahadlok Ko',
    subtitle: 'talking about being scared of something',
    lines: [
      { speaker: 'barkada',  name: 'Si Barkada', bisaya: 'Mosakay ta sa roller coaster!', en: "Let us ride the roller coaster!" },
      { speaker: 'me',       name: 'Ikaw',       bisaya: 'Dili. Nahadlok ko ana.', en: "No. I am scared of that." },
      { speaker: 'barkada',  name: 'Si Barkada', bisaya: 'Grabe ka. Kanang ba lang.', en: "Oh come on. It is just that." },
      { speaker: 'me',       name: 'Ikaw',       bisaya: 'Di ko gusto og taas. Makulba ko gyud.', en: "I do not like heights. I get really anxious." },
      { speaker: 'barkada',  name: 'Si Barkada', bisaya: 'Kanunay kang mag-ingon na pero moadto gihapon.', en: "You always say that but you still end up going." },
      { speaker: 'me',       name: 'Ikaw',       bisaya: 'Karon dili. Hulat lang ko diri.', en: "Not this time. I am just waiting here." },
      { speaker: 'barkada',  name: 'Si Barkada', bisaya: 'Sige okay. Tan-aw lang ka namo.', en: "Fine okay. Just watch us." },
      { speaker: 'me',       name: 'Ikaw',       bisaya: 'Ingna ko kung maayo. Basin mag-usab ko og hunahuna.', en: "Tell me if it is good. Maybe I will change my mind." },
    ]
  },
  {
    id: 63,
    type: 'drill',
    title: 'Bag-ong Palad',
    subtitle: 'congratulating someone on good news',
    lines: [
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Uy, nakapasar ko sa board exam!', en: "I passed the board exam!" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Grabe! Congratulations! Dugay mo trabaho!', en: "Amazing! Congratulations! You worked so hard!" },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Dili ko makatuo. Dugay ko nag-review.', en: "I cannot believe it. I reviewed for so long." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Nahibaw-an ko. Nakit-an nako kung unsa ang imong gipag-ampo.', en: "I know. I saw how much you sacrificed." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Salamat sa imong suporta. Katabang kaayo.', en: "Thank you for your support. It really helped." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Kanunay. Libre ka namo karon ha.', en: "Always. You are treating us today, okay." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Haha okay. Asa mo gusto?', en: "Haha okay. Where do you want to go?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Ikaw ang bida karon. Ikaw ang magpili.', en: "You are the star today. You choose." },
    ]
  },
  {
    id: 64,
    type: 'drill',
    title: 'Dili Maayo ang Serbisyo',
    subtitle: 'complaining about bad service',
    lines: [
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Ate, dugay na kaayo ang order namo.', en: "Ate, our order has been taking too long." },
      { speaker: 'server', name: 'Si Server', bisaya: 'Pasensya, busy kaayo karon.', en: "Sorry, it is very busy right now." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Mga trisenta minutos na. Unsa nang grabe?', en: "It has been about thirty minutes. How long is that?" },
      { speaker: 'server', name: 'Si Server', bisaya: 'Tan-awon ko sa kusina.', en: "Let me check in the kitchen." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Palihug. Gutom na kaayo mi.', en: "Please. We are already very hungry." },
      { speaker: 'server', name: 'Si Server', bisaya: 'Dalion na namo. Pasensya gyud.', en: "We will rush it. We are really sorry." },
      { speaker: 'me',     name: 'Ikaw',      bisaya: 'Sige. Pero ingon ana ra karon ha.', en: "Okay. But please, just this once." },
      { speaker: 'server', name: 'Si Server', bisaya: 'Hatagan mo og discount. Pasensya na.', en: "We will give you a discount. We are sorry." },
    ]
  },
  {
    id: 65,
    type: 'drill',
    title: 'Paghinaut',
    subtitle: 'expressing hope or wishes',
    lines: [
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Unsa imong wish karong tuig?', en: "What is your wish this year?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Unta maayo ang kahimsog sa akong pamilya.', en: "I hope for good health for my family." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Maayo na. Ug ikaw mismo?', en: "That is good. And for yourself?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Unta makatigom ko ug kwarta. Naa koy plano.', en: "I hope to save money. I have plans." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Unsa nga plano?', en: "What plans?" },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Gusto ko mag-travel. Dili pa ko nakagawas sa Mindanao.', en: "I want to travel. I have never been outside Mindanao." },
      { speaker: 'friend',  name: 'Si Friend', bisaya: 'Unta maabot. Sama-sama ta.', en: "I hope it happens. Let us go together." },
      { speaker: 'me',      name: 'Ikaw',      bisaya: 'Sige. Mag-ipon ta og para sa trip.', en: "Deal. Let us both save up for the trip." },
    ]
  },

  // ── BOSS 6 ───────────────────────────────────────────────
  {
    id: 66,
    type: 'boss',
    title: 'Boss 6',
    subtitle: 'emotional and nuanced situations',
    challenges: [
      { en: "Your friend just failed something important. Say something comforting and real.", bisaya: "Okay lang na. Di mao ang katapusan. Naa ta.", note: "Naa ta means we are here or I am with you." },
      { en: "You need to cancel plans last minute. Apologize genuinely.", bisaya: "Pasensya na gyud. Dili ko makaadto karon. Seryoso ang rason.", note: "Seryoso ang rason means the reason is serious." },
      { en: "Someone asks if you miss home. Tell them yes, especially the food.", bisaya: "Oo, labi na ang pagkaon. Walay kapantay.", note: "Walay kapantay means nothing compares to it." },
      { en: "A stranger is clearly lost. Offer to help without being asked.", bisaya: "Pangita ka ba og lugar? Maka-tabang ko.", note: "Leading with a question is less intimidating than a statement." },
      { en: "Your parent cooked for you. Express appreciation specifically about the effort.", bisaya: "Salamat, Nay. Nahibaw-an ko nga kapoy, pero lami gyud kaayo.", note: "Naming the effort before the compliment feels more sincere." },
      { en: "Someone asks if you are happy where you live. Answer honestly but warmly.", bisaya: "Okay lang diri. Naandan na ko. Naa ang tanan nako diri.", note: "Naandan na ko means I have gotten used to it." },
      { en: "A child is crying. Ask gently what is wrong.", bisaya: "Hoy, unsa man? Okay ka ba?", note: "Soft tone matters here more than the words." },
      { en: "You bumped into someone's elderly parent. Apologize respectfully.", bisaya: "Ay, pasensya Lolo. Dili ko sadya. Okay ba kamo?", note: "Dili ko sadya means it was not intentional." },
    ]
  },
];
