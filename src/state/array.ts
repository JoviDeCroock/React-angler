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
    add: (element: any) => setValue((val: any) => [...val, element]),
    clear: () => setValue([]),
    remove: (func: (value: Array<any>) => Array<any>) => setValue((val: any) => func(val)),
    removeByElement: (element: any) => setValue((val: any) => val.filter((e: any) => e !== element)),
    removeByIndex: (index: number) => setValue((val: any) => val.filter((e: any, i: number) => i !== index)),
    setValue,
    value,
  };
};
