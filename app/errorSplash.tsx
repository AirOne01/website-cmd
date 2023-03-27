const splashes = [
  "I'm sorry, Dave. I'm afraid I can't do that.",
  "16 / 16 / 16 / 16 / 16",
  "No Love for Robots",
];

const getSplash = () => (
  <>{splashes[Math.floor(Math.random() * splashes.length)]}</>
);

export default getSplash;
