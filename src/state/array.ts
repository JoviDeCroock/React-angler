import { useState } from "react";

interface UseArray {
  add: (element: any) => void;
  clear: () => void;
  remove: (func: (value: Array<any>) => Array<any>) => void;
  removeByElement: (element: any) => void;
  removeByIndex: (index: number) => void;
  setValue: (value: Array<any> | ((value: Array<any>) => Array<any>)) => void,
  value: Array<any>;
}

export default (initialValue: Array<any> = []): UseArray => {
  // TODO: optimize all like this:
  const { 0: value, 1: setValue  } = useState(initialValue);
  return {
    add: (element) => setValue((val) => [...val, element]),
    clear: () => setValue([]),
    remove: (func) => setValue((val) => func(val)),
    removeByElement: (element) => setValue((val) => val.filter((e) => e !== element)),
    removeByIndex: (index) => setValue((val) => val.filter((e, i) => i !== index)),
    setValue,
    value,
  };
};
