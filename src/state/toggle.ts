import { useState } from "react";

interface Toggle {
  setFalse: () => void;
  setTrue: () => void;
  setValue: (value: boolean | ((newValue: boolean) => boolean)) => void;
  toggle: () => void;
  value: boolean;
}

export default (initial: boolean = true): Toggle => {
  const { 0: value, 1: setValue } = useState(initial);
  return {
    setFalse: () => setValue(false),
    setTrue: () => setValue(true),
    setValue,
    toggle: () => setValue((val) => !val),
    value,
  };
};
