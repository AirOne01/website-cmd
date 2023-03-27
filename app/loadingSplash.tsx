const splashes = [
  "So long, and thanks for all the fish.",
  "Tuturu~",
  "Imagine having a loading screen on yout blog.",
];

const getSplash = () => (
  <>{splashes[Math.floor(Math.random() * splashes.length)]}</>
);

export default getSplash;
