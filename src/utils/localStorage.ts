import * as React from "react";

interface LocalStorage {
  setValue: (value: any) => void;
  value: any;
}

export default (key: string, initial: any): LocalStorage => {
  const val = window.localStorage.getItem(key) || initial;
  const { 0: value, 1: setStateValue } = React.useState(val);

  const setValue = React.useCallback(newValue => {
    if (newValue === val) { return }
    setStateValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  }, [setStateValue]);
  return { setValue, value }
}
