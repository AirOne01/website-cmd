"use client";

import { useCallback, useEffect, useState } from "react";

const gridRows = 100;
const gridSize = gridRows * gridRows;

const FancyGrid = () => {
  type Grid = (string | null)[];

  const [grid, setGrid] = useState<Grid>(
    Array.from({ length: gridSize }).map(() => null)
  );
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(2);

  const shuffle = useCallback(() => {
    const paintPx = (i: number, prop: string) => {
      setGrid((grid) => {
        grid[i] = prop;
        return grid;
      });
    };

    switch (step) {
      case 0: {
        setIndex(Math.floor(Math.random() * gridSize));
        paintPx(index, "bg-orange-800");
      }
      case 1: {
        paintPx(index, "bg-orange-500");
      }
      case 2: {
        paintPx(index, "bg-yellow-300");
      }
      case 3: {
        paintPx(index, "bg-blue-500");
      }
    }
    console.log(step);
    setStep((step) => (step + 1) % 4);
  }, [index, step]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 200);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div className="absolute flex h-screen w-screen items-center justify-center">
      <div className="h-0 w-0 bg-orange-800" />
      <div className="h-0 w-0 bg-orange-500" />
      <div className="h-0 w-0 bg-yellow-300" />
      <div className="grid h-fit w-fit grid-cols-7" style={{gridTemplateColumns: `repeat(${gridRows},minmax(0,1fr))`}}>
        {Array.from({ length: gridSize }).map((_, i) => (
          <div
            className={`h-2 w-2 flex-1 bg-black ${grid[i] ?? ""}`}
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FancyGrid;
