const loadingSplashes = [
  "So long, and thanks for all the fish.",
  "Tuturu~",
];

const errorSplashes = [
  "I'm sorry, Dave. I'm afraid I can't do that.",
  "16 / 16 / 16 / 16 / 16",
];

const getSplash = () => loadingSplashes[Math.floor(Math.random() * loadingSplashes.length)];

export default getSplash;
