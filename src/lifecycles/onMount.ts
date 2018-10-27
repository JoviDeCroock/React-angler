import { useEffect } from "react";

export default (cb?: () => void) => useEffect(() => cb && cb(), []);
