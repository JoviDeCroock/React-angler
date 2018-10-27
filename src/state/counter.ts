import { useState } from "react";

interface CounterOptions {
  step?: Number
}

export default (initial: Number = 0, { step: Number = 1 }: CounterOptions = {}) => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    increate: () => setValue(value + step),
    decrease: () => setValue(value - step)
  };
};
