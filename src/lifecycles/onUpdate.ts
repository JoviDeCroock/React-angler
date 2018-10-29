import { useEffect } from "react";

export default (cb?: () => void) => {
  return useEffect(() => {
    if(cb) {
      cb();
    }
  });
};
