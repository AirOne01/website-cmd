const splashes = [
  "So long, and thanks for all the fish.",
  "I'm sorry, Dave. I'm afraid I can't do that.",
  "16 / 16 / 16 / 16 / 16",
  "Tuturu~",
];

const getSplash = () => splashes[Math.floor(Math.random() * splashes.length)];

export default getSplash;
