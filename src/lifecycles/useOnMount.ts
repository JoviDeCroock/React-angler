import { useEffect } from "react";

export default function useMount(cb?: () => void): void {
  useEffect(() => {
    if(cb) { cb() }
  }, []);
}
