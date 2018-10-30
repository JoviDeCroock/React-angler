import { useState } from "react";

interface CounterOptions {
  step?: number
}

export default (initial: number = 0, { step = 1 }: CounterOptions = {}) => {
  const [value, setValue] = useState(initial);
  return {
    decrease: () => setValue((val) => val - step),
    increase: () => setValue((val) => val + step),
    setValue,
    value,
  };
};
