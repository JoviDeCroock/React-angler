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

export default function useCounter(initial?: number, options?: CounterOptions): Counter {
  const { 0: value, 1: setValue } = React.useState(initial || 0);
  if (!options) { options = { step: 1 } };
  return {
    decrease: React.useCallback(() => setValue((val) => val - ((options as any).step || 1)), []),
    increase: React.useCallback(() => setValue((val) => val + ((options as any).step || 1)), []),
    setValue,
    value,
  };
};
