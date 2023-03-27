const errorSplashes = [
  "I'm sorry, Dave. I'm afraid I can't do that.",
  "16 / 16 / 16 / 16 / 16",
  "No Love for Robots",
];

const loadingSplashes = [
  "So long, and thanks for all the fish.",
  "Tuturu~",
  "Imagine having a loading screen on yout blog.",
];

const getSplash = (splashes: string[]) => (
  <>{splashes[Math.floor(Math.random() * splashes.length)]}</>
);
const getLoadingSplash = () => getSplash(loadingSplashes);
const getErrorSplash = () => getSplash(errorSplashes);

export { getLoadingSplash, getErrorSplash };
