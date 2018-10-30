import { useState } from "react";

export default (initial: boolean = true) => {
  const [value, setValue] = useState(initial);
  return {
    setFalse: () => setValue(false),
    setTrue: () => setValue(true),
    setValue,
    toggle: () => setValue((val) => !val),
    value,
  };
};
