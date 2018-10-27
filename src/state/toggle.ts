import { useState } from "react";

export default (initial: boolean = true) => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    toggle: () => setValue(!value),
    setFalse: () => setValue(false),
    setTrue: () => setValue(true)
  };
};
