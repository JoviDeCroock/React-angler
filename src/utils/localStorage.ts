import * as React from "react";

interface LocalStorage {
  setValue: (value: any) => void;
  value: any;
}

export default (key: string, initial: any): LocalStorage => {
  const val = window.localStorage.getItem(key) || initial;
  const { 0: value, 1: setStateValue } = React.useState(val);
  // Consider adding useEffect to only write the current value when unmounting.
  const setValue = React.useCallback(newValue => {
    setStateValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  }, []);
  return { setValue, value }
}
