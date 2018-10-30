import { useState } from "react";

interface CounterOptions {
  step?: number
}

interface Counter {
  decrease: () => void;
  increase: () => void;
  setValue: (value: number | ((val: number) => number)) => void;
  value: number;
}

export default (initial: number = 0, { step = 1 }: CounterOptions = {}): Counter => {
  const [value, setValue] = useState(initial);
  return {
    decrease: () => setValue((val) => val - step),
    increase: () => setValue((val) => val + step),
    setValue,
    value,
  };
};
