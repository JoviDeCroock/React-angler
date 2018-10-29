import { useState } from "react";

export default (initialValue: Array<any> = []) => {
  const [value, setValue] = useState(initialValue);
  return {
    add: (element: any) => setValue([...value, element]),
    clear: () => setValue([]),
    remove: (func: (value: Array<any>) => Array<any>) => setValue(func(value)),
    removeByElement: (element: any) => setValue(value.filter((e: any) => e !== element)),
    removeByIndex: (index: number) => setValue(value.filter((e: any, i: number) => i !== index)),
    setValue,
    value,
  };
};
