"use client";

import { useCallback, useEffect, useState } from "react";

type Grid = string[][];

const FancyGrid = () => {
  const [state, setState] = useState<Grid>(
    Array.from({ length: 7 }).map(() =>
      Array.from({ length: 7 }).map(() => "")
    )
  );
  const [index, setIndex] = useState(0);

  const shuffle = useCallback(() => {
    setState((state) => {
      let newState = [...state];

      function ring(place: number, prop: string) {
        if (
          newState[0] != null &&
          newState[1] != null &&
          newState[2] != null &&
          newState[3] != null &&
          newState[4] != null &&
          newState[5] != null &&
          newState[6] != null
        )
          switch (place) {
            case 0:
              newState[2][3] = prop;
              break;
            case 1:
              newState[2][3] = prop;
              newState[3][2] = prop;
              newState[3][4] = prop;
              newState[4][3] = prop;
              break;
            case 2:
              newState[1][3] = prop;
              newState[3][1] = prop;
              newState[3][5] = prop;
              newState[5][3] = prop;
              newState[2][2] = prop;
              newState[2][4] = prop;
              newState[4][2] = prop;
              newState[4][4] = prop;
              break;
            case 3:
              newState[0][3] = prop;
              newState[3][0] = prop;
              newState[3][6] = prop;
              newState[6][3] = prop;
              newState[1][2] = prop;
              newState[1][4] = prop;
              newState[2][1] = prop;
              newState[2][5] = prop;
              newState[4][1] = prop;
              newState[4][5] = prop;
              newState[5][2] = prop;
              newState[5][4] = prop;
              break;
            case 4:
              newState[1][1] = prop;
              newState[1][5] = prop;
              newState[5][1] = prop;
              newState[5][5] = prop;
              newState[2][0] = prop;
              newState[2][6] = prop;
              newState[4][0] = prop;
              newState[4][6] = prop;
              newState[0][2] = prop;
              newState[0][4] = prop;
              newState[6][2] = prop;
              newState[6][4] = prop;
              break;
            case 5:
              newState[0][1] = prop;
              newState[0][5] = prop;
              newState[6][1] = prop;
              newState[6][5] = prop;
              newState[1][0] = prop;
              newState[1][6] = prop;
              newState[5][0] = prop;
              newState[5][6] = prop;
              break;
            case 6:
              newState[0][0] = prop;
              newState[0][6] = prop;
              newState[6][0] = prop;
              newState[6][6] = prop;
              break;
          }
        return newState;
      }

      // change color starting from middle of the grid
      switch (index) {
        case 0:
          newState = ring(0, "border-cyan-500");
          break;
        case 1:
          newState = ring(1, "border-cyan-500");
          break;
        case 2:
          newState = ring(2, "border-cyan-500");
          newState = ring(0, "");
          break;
        case 3:
          newState = ring(3, "border-cyan-500");
          newState = ring(1, "");
          break;
        case 4:
          newState = ring(4, "border-cyan-500");
          newState = ring(2, "");
          break;
        case 5:
          newState = ring(5, "border-cyan-500");
          newState = ring(3, "");
          break;
        case 6:
          newState = ring(6, "border-cyan-500");
          newState = ring(4, "");
          break;
        case 7:
          newState = ring(5, "");
          break;
        case 8:
          newState = ring(6, "");
          break;
      }

      return newState;
    });
    setIndex(index + 1);
  }, [index]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 100);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="flex flex-col">
          {Array.from({ length: 7 }).map((_, j) => {
            if (state[i] === undefined) return <></>;
            return (
              <div
                key={j}
                className={`h-12 w-12 border ospacity-50 transition-colors duration-300 ${
                  (state[i] ?? [])[j] ?? "border-transparent"
                }`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FancyGrid;
