import { useState } from "react";

interface Map {
  get: (key: string) => any;
  getMultiple: (keys: Array<string>) => Array<any>;
  set: (key: string, value: any) => void;
}

export default (initial: { [key: string]: any }): Map => {
  const { 0: map, 1: setValue } = useState(initial);
  return {
    get: (key: string) => map[key],
    getMultiple: (keys) => keys.reduce((acc: Array<any>, key: string) => [...acc, map[key]], []),
    set: (key, value) => setValue((val) => ({ ...val, [key]: value }))
  }
}
