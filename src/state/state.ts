import { useState } from "react";

export default (initial: object = {}) => {
  const [value, setValue] = useState(initial);
  return {
    setState: (state?: object, cb?: (newState: object) => void) => {
      let newState = {};
      setValue((val) => {
        newState = { ...val, ...state }
        return newState
      });
      if (cb) {
        cb(newState);
      }
    },
    state: value,
  };
};
