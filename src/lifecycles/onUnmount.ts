import { useEffect } from "react";

export default function useUnmount(cb?: () => void) {
  useEffect(function setUnmount() {
    return function unMount() {
      if(cb) { cb() }
    }
  }, []);
}
