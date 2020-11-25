# Youtube-GIFFIFY

Convert youtube videos to gifs on the fly

[![NPM](https://nodei.co/npm/youtube-giffify.png?compact=true)](https://npmjs.org/package/youtube-giffify)

---

### Usage

```js
const { generateGif } = require("youtube-giffify");

generateGif(
  "https://www.youtube.com/watch?v=7JgdzmrqTXU", // Youtube video url
  "./example.gif", // Output file path
  {
    // Options
    fps: 24,
  }
).then((filename) => console.log(filename));

// In async function
const res = await generateGif(
  "https://www.youtube.com/watch?v=7JgdzmrqTXU", // Youtube video url
  "./example.gif", // Output file path
  {
    // Options
    fps: 24,
  }
);
```

---

### Options

- **startInSeconds** (number): GIF will start from here [Default = 0]
- **width** (number): width of GIF [Default = 320]
- **duration** (number) [Default = 3]
- **fps** (number) [Default = 18]

---
