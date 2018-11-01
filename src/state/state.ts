import { useState } from "react";

interface State {
  setState: (state?: object, cb?: (newState: object) => void) => void;
  state: object;
}

export default (initial: object = {}): State => {
  const { 0: value, 1: setValue } = useState(initial);
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
