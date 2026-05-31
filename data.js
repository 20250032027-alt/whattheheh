const LEVELS = [
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
    subtitle: 'asking about someone\'s day',
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
      { speaker: 'me',       name: 'Ikaw',        bisaya: 'Wala eh. Bayad ko og bente.', en: "I don't have any. I'll pay with twenty." },
    ]
  },
  {
    id: 5,
    type: 'boss',
    title: 'Boss Level 1',
    subtitle: 'watch a scene, catch what you can',
    movie: 'Ang Probinsyano',
    tasks: [
      {
        num: '01',
        text: "Watch one full scene from a Bisaya show or movie. Start with Ang Probinsyano on YouTube if you do not have anything else in mind. Just search for a scene, not a full episode.",
        link: 'https://www.youtube.com/results?search_query=ang+probinsyano+bisaya+scene',
        linkLabel: 'search on youtube'
      },
      {
        num: '02',
        text: "Pick out three phrases you heard clearly. Say each one out loud after the character. Do not worry if you missed words, just match what you caught."
      },
      {
        num: '03',
        text: "Notice how fast native speakers move between words. That gap between what you hear and what you can say yourself is exactly what the drills are closing."
      }
    ]
  },
  {
    id: 6,
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
    id: 7,
    type: 'drill',
    title: 'Sakit Ba?',
    subtitle: 'checking in when someone is not feeling well',
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
    id: 8,
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
    id: 9,
    type: 'boss',
    title: 'Boss Level 2',
    subtitle: 'find a real conversation, join in',
    movie: 'Street interviews',
    tasks: [
      {
        num: '01',
        text: "Find a Bisaya street interview or vlog on YouTube. Look for something casual, not news, not a formal show. Real people talking to each other is harder and also more useful.",
        link: 'https://www.youtube.com/results?search_query=bisaya+vlog+CDO',
        linkLabel: 'search bisaya vlogs'
      },
      {
        num: '02',
        text: "Pick one exchange that lasts under thirty seconds. Watch it three times. On the third watch, pause after each line and repeat it out loud."
      },
      {
        num: '03',
        text: "Write down two words you did not understand. Look them up. Then use each word in a sentence you say aloud. You do not have to write the sentence down."
      }
    ]
  },
  {
    id: 10,
    type: 'drill',
    title: 'Pasensya Na',
    subtitle: 'apologizing and making up for it',
    lines: [
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Asa ka? Naghulat ko nimo.', en: "Where were you? I was waiting for you." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Pasensya na. Na-late ko.', en: "Sorry. I got held up." },
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Dugay na kaayo ko diri. Oras na.', en: "I've been here for an hour already." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Akong sala. Grabe ang traffic.', en: "It's my fault. The traffic was terrible." },
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Susama ra kana nga rason pirmi.', en: "That's always your excuse." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Tinuod gyud karon. Wala gyud ko naghunahuna.', en: "It's genuinely true this time. I really wasn't thinking." },
      { speaker: 'friend',  name: 'Si Friend',  bisaya: 'Okay na. Sulod na lang ta.', en: "Fine. Let's just go inside." },
      { speaker: 'me',      name: 'Ikaw',       bisaya: 'Akong bayad ang kape. Pasaylo ra ko.', en: "Coffee is on me. Just forgive me." },
    ]
  },
];
