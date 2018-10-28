import { useState } from "react";

interface CounterOptions {
  step?: number
}

export default (initial: number = 0, { step = 1 }: CounterOptions = {}) => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    increase: () => setValue(value + step),
    decrease: () => setValue(value - step)
  };
};
