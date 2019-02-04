import { useEffect } from "react";

export default function useUnmount(cb?: () => void) {
  useEffect(() => {
    return () => {
      if(cb) { cb() }
    }
  }, []);
}
