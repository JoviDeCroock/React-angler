import * as React from "react";

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
  const { 0: value, 1: setValue } = React.useState(initial);
  return {
    decrease: React.useCallback(() => setValue((val) => val - step), [setValue]),
    increase: React.useCallback(() => setValue((val) => val + step), [setValue]),
    setValue,
    value,
  };
};
