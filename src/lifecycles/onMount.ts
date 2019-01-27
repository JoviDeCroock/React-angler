import { useEffect } from "react";

export default function useMount(cb?: () => void): void {
  useEffect(function mountEffect() {
    if(cb) { cb() }
  }, []);
}
