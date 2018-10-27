import { useEffect } from "react";

export default (cb?: () => void) =>
  useEffect(() => {
    return () => cb && cb();
  }, []);
