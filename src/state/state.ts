import { useState } from "react";

export default (initial: Object = {}) => {
  const [value, setValue] = useState({});
  return {
    state: value,
    setState: (state, cb) => {
      const newState = { ...value, ...state };
      setValue(newState);
      cb && cb(newState);
    }
  };
};
