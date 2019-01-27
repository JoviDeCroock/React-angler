import { useEffect } from "react";

export default function useDidUpdate(cb?: () => void, watchables?: Array<any>) {
  useEffect(function updateEffect() {
    if(cb) { cb() }
  }, watchables);
};
