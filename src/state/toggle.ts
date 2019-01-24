import * as React from "react";

interface Toggle {
  setFalse: () => void;
  setTrue: () => void;
  setValue: (value: boolean | ((newValue: boolean) => boolean)) => void;
  toggle: () => void;
  value: boolean;
}

export default (initial?: boolean): Toggle => {
  const { 0: value, 1: setValue } = React.useState(initial || false);
  return {
    setFalse: React.useCallback(() => setValue(() => false), []),
    setTrue: React.useCallback(() => setValue(() => true), []),
    setValue,
    toggle: React.useCallback(() => setValue((val) => !val), []),
    value,
  };
};
