import { useState } from "react";

interface CounterOptions {
  step?: number
}

export default (initial: number = 0, { step = 1 }: CounterOptions = {}) => {
  const [value, setValue] = useState(initial);
  return {
    decrease: () => setValue(value - step),
    increase: () => setValue(value + step),
    setValue,
    value,
  };
};
