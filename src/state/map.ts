import * as React from "react";

interface Map {
  get: (key: string) => any;
  getMultiple: (keys: Array<string>) => Array<any>;
  set: (key: string, value: any) => void;
}

export default (initial: { [key: string]: any }): Map => {
  const { 0: map, 1: setValue } = React.useState(initial);
  return {
    get: React.useCallback((key: string) => () => map[key], [map]),
    getMultiple: React.useCallback((keys) => keys.reduce((acc: Array<any>, key: string) => [...acc, map[key]], []), [map]),
    set: React.useCallback((key, value) => setValue((val) => ({ ...val, [key]: value })), [setValue])
  }
}
