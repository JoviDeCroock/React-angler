import { useEffect } from "react";

export default (cb?: () => void, watchables?: Array<any>) => {
  return useEffect(() => {
    if(cb) { cb() }
  }, watchables);
};
