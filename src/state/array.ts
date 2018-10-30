import { useState } from "react";

export default (initialValue: Array<any> = []) => {
  const [value, setValue] = useState(initialValue);
  return {
    add: (element: any) => setValue((val) => [...val, element]),
    clear: () => setValue([]),
    remove: (func: (value: Array<any>) => Array<any>) => setValue((val) => func(val)),
    removeByElement: (element: any) => setValue((val) => val.filter((e: any) => e !== element)),
    removeByIndex: (index: number) => setValue((val) => val.filter((e: any, i: number) => i !== index)),
    setValue,
    value,
  };
};
