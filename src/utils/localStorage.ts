import * as React from "react";

interface LocalStorage {
  setValue: (value: any) => void;
  value: any;
}

export default function useLocalStorage(key: string, initial: any): LocalStorage {
  const val = window.localStorage.getItem(key) || initial;
  const { 0: value, 1: setStateValue } = React.useState(val);
  // Consider adding useEffect to only write the current value when unmounting.
  const setValue = React.useCallback(function setValueCallback(newValue) {
    setStateValue(function setStateValueCB() { return newValue });
    window.localStorage.setItem(key, JSON.stringify(newValue));
  }, []);
  return { setValue, value }
}
