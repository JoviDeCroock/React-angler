import { useState } from "react";

export default (initial: string = "") => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    clear: () => setValue(""),
    onChange: e => setValue(e.currentTarget.value)
  };
};
