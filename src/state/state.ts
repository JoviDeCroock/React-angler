import * as React from "react";

interface State {
  setState: (state?: object, cb?: (newState: object) => void) => void;
  state: object;
}

export default (initial?: object): State => {
  const { 0: value, 1: setValue } = React.useState(initial || {});
  return {
    setState: React.useCallback((state) => {
      setValue((val) => ({ ...val, ...state }))
    }, []),
    state: value,
  };
};
