import { useState } from "react";

export default (initialValue: Array<any> = []) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    add: (element: any) => setValue([...value, element]),
    clear: () => setValue([]),
    remove: (element: any) => setValue(value.filter((e: any) => e !== element))
  };
};
