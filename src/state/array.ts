import { useState } from "react";

export default (initialValue: Array<any> = []) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    add: element => setValue([...value, element]),
    clear: () => setValue([]),
    remove: element => setValue(value.filter(e => e !== element))
  };
};
