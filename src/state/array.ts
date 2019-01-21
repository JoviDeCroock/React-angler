import { useState } from "react";

interface Payload {
  add: (element: any) => void;
  clear: () => void;
  remove: (func: (value: Array<any>) => Array<any>) => void;
  removeByElement: (element: any) => void;
  removeByIndex: (index: number) => void;
  setValue: (input: Array<any>) => void;
  value: Array<any>;
}

export default (initialValue: Array<any> = []): Payload => {
  const [value, setValue] = useState(initialValue);
  return {
    add: (element) => { setValue([...value, element]) },
    clear: () => { setValue([]) },
    remove: (func) => { setValue(func(value)) },
    removeByElement: (element) => setValue(value.filter((e: any) => e !== element)),
    removeByIndex: (index) => setValue(value.filter((e: any, i: number) => i !== index)),
    setValue,
    value,
  };
};
