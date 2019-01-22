import * as React from "react";

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
  const { 0: value, 1: setValue  } = React.useState(initialValue);
  return {
    add: React.useCallback((element) => setValue((val) => [...val, element]), [setValue]),
    clear: React.useCallback(() => setValue(() => []), [setValue]),
    remove: React.useCallback((func) => setValue((val) => func(val)), [setValue]),
    removeByElement: React.useCallback((element) => setValue((val) => val.filter((e) => e !== element)), [setValue]),
    removeByIndex: React.useCallback((index) => setValue((val) => val.filter((e, i) => i !== index)), [setValue]),
    setValue,
    value,
  };
};
