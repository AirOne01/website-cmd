"use client"

import { useCallback, useEffect, useState } from "react";

const Spinner = () => {
  type Frame = "⠋" | "⠙" | "⠹" | "⠸" | "⠼" | "⠴" | "⠦" | "⠧" | "⠇" | "⠏";

  const [frame, setFrame] = useState<Frame>("⠋");
  const [index, setIndex] = useState(0);
  
  const shuffle = useCallback(() => {
    const frames: Frame[] = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

    setFrame(frames[index] ?? "⠼");
    setIndex((index + 1) % frames.length);
  }, [index]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 100);
    return () => clearInterval(intervalID);
  }, [shuffle])

  return <span className="text-pink-400 text-2xl">{frame}</span>
};

export default Spinner;