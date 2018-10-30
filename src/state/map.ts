import { useState } from "react";

interface Map {
  get: (key: string) => any;
  getMultiple: (keys: Array<string>) => Array<any>;
  set: (key: string, value: any) => void;
}

export default (initial: object): Map => {
  const [map, setValue] = useState(initial);
  return {
    get: (key) => map[key],
    getMultiple: (keys) => keys.reduce((acc, key) => [...acc, map[key]], []),
    set: (key, value) => setValue((val) => ({ ...val, [key]: value }))
  }
}
