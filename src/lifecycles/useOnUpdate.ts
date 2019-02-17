import { useEffect } from "react";

export default function useDidUpdate(cb?: () => void, watchables?: Array<any>) {
  useEffect(() => {
    if(cb) { cb() }
  }, watchables || []);
};
