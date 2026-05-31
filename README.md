# heh.

bisaya drill app. personal use.

## deploy

push to github, import into vercel. no build step, no dependencies. static HTML.

## structure

```
index.html   main shell
style.css    all styles
data.js      level content (edit this to add levels)
app.js       app logic
vercel.json  routing config
```

## adding levels

open `data.js` and add an object to the `LEVELS` array. two types:

**drill** - a back and forth conversation
```js
{
  id: 11,
  type: 'drill',
  title: 'Bisaya title',
  subtitle: 'short description',
  lines: [
    { speaker: 'friend', name: 'Si Friend', bisaya: 'Phrase here', en: 'Translation here' },
    { speaker: 'me',     name: 'Ikaw',      bisaya: 'My response', en: 'Translation' },
  ]
}
```

**boss** - a watch and listen challenge
```js
{
  id: 12,
  type: 'boss',
  title: 'Boss Level 3',
  subtitle: 'short description',
  tasks: [
    { num: '01', text: 'Instruction here.', link: 'https://...', linkLabel: 'link text' },
    { num: '02', text: 'Another task.' },
  ]
}
```

levels unlock in order. progress is saved to localStorage.
