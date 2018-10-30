import { useState } from "react";

interface LocalStorage {
  setValue: (value: any) => void;
  value: any;
}

export default (key: string, initial: any): LocalStorage => {
  const val = window.localStorage.getItem(key) || initial;
  const [value, setStateValue] = useState(val);

  // Would prefer doing this when this gets cleaned up but this is not possible as far as i can see.
  const setValue = newValue => {
    setStateValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return {
    setValue,
    value,
  }
}
