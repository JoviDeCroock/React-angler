import { useState } from "react";

export default (initial: object = {}) => {
  const [value, setValue] = useState(initial);
  return {
    setState: (state?: object, cb?: (newState: object) => void) => {
      const newState = { ...value, ...state };
      setValue(newState);
      if (cb) {
        cb(newState);
      }
    },
    state: value,
  };
};
