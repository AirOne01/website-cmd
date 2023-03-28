"use client";

import { useCallback, useEffect, useState } from "react";

type Grid = (string | null)[][];

const FancyGrid = () => {
  const [state, setState] = useState<Grid>(
    Array.from({ length: 7 }).map(() =>
      Array.from({ length: 7 }).map(() => null)
    )
  );
  const [index, setIndex] = useState(0);

  const shuffle = useCallback(() => {
    setState((state) => {
      let newState = [...state];

      function ring0(state2: Grid, prop: string | null) {
        const newState2 = [...state2];
        newState2[3]![3] = prop;
        return newState2;
      }
      function ring1(state2: Grid, prop: string | null) {
        const newState2 = [...state2];
        newState[2]![3] = prop;
        newState[3]![2] = prop;
        newState[3]![4] = prop;
        newState[4]![3] = prop;
        return newState2;
      }
      function ring2(state2: Grid, prop: string | null) {
        const newState2 = [...state2];
        newState[1]![3] = prop;
        newState[3]![1] = prop;
        newState[3]![5] = prop;
        newState[5]![3] = prop;
        newState[2]![2] = prop;
        newState[2]![4] = prop;
        newState[4]![2] = prop;
        newState[4]![4] = prop;
        return newState2;
      }
      function ring3(state2: Grid, prop: string | null) {
        const newState2 = [...state2];
        newState[0]![3] = prop;
        newState[3]![0] = prop;
        newState[3]![6] = prop;
        newState[6]![3] = prop;
        newState[1]![2] = prop;
        newState[1]![4] = prop;
        newState[2]![1] = prop;
        newState[2]![5] = prop;
        newState[4]![1] = prop;
        newState[4]![5] = prop;
        newState[5]![2] = prop;
        newState[5]![4] = prop;
        return newState2;
      }
      function ring4(state2: Grid, prop: string | null) {
        const newState2 = [...state2];
        newState[1]![1] = prop;
        newState[1]![5] = prop;
        newState[5]![1] = prop;
        newState[5]![5] = prop;
        newState[2]![0] = prop;
        newState[2]![6] = prop;
        newState[4]![0] = prop;
        newState[4]![6] = prop;
        newState[0]![2] = prop;
        newState[0]![4] = prop;
        newState[6]![2] = prop;
        newState[6]![4] = prop;
        return newState2;
      }
      function ring5(state2: Grid, prop: string | null) {
        const newState2 = [...state2];
        newState[0]![1] = prop;
        newState[0]![5] = prop;
        newState[6]![1] = prop;
        newState[6]![5] = prop;
        newState[1]![0] = prop;
        newState[1]![6] = prop;
        newState[5]![0] = prop;
        newState[5]![6] = prop;
        return newState2;
      }
      function ring6(state2: Grid, prop: string | null) {
        const newState2 = [...state2];
        newState[0]![0] = prop;
        newState[0]![6] = prop;
        newState[6]![0] = prop;
        newState[6]![6] = prop;
        return newState2;
      }

      // change color starting from middle of the grid
      switch (index) {
        case 0:
          newState = ring0(newState, "border-cyan-500");
          break;
        case 1:
          newState = ring1(newState, "border-cyan-500");
          break;
        case 2:
          newState = ring2(newState, "border-cyan-500");
          newState = ring0(newState, null);
          break;
        case 3:
          newState = ring3(newState, "border-cyan-500");
          newState = ring1(newState, null);
          break;
        case 4:
          newState = ring4(newState, "border-cyan-500");
          newState = ring2(newState, null);
          break;
        case 5:
          newState = ring5(newState, "border-cyan-500");
          newState = ring3(newState, null);
          break;
        case 6:
          newState = ring6(newState, "border-cyan-500");
          newState = ring4(newState, null);
          break;
        case 7:
          newState = ring5(newState, null);
          break;
        case 8:
          newState = ring6(newState, null);
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
    <div className="absolute flex h-screen w-screen items-center justify-center">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="flex flex-col">
          {Array.from({ length: 7 }).map((_, j) => (
            <div
              key={j}
              className={`h-12 w-12 border transition-colors duration-300 ${state[i]![j] ?? "border-transparent"}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FancyGrid;
