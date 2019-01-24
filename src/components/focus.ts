import * as React from "react";
import useToggle from "../state/toggle";

export default (): [React.RefObject<any>, boolean] => {
  const { setFalse, setTrue, value } = useToggle(false);
  const ref = React.useRef(null);
  const handleMouseDown = React.useCallback(() => setTrue(), []);
  const handleMouseUp = React.useCallback(() => setFalse(), []);

  React.useLayoutEffect(() => {
    if (ref && ref.current) {
      (ref.current as any).addEventListener("focusin", handleMouseDown);
      (ref.current as any).addEventListener("focusout", handleMouseUp);
    }
    return () => {
      if (ref && ref.current) {
        (ref.current as any).removeEventListener("focusin", handleMouseDown);
        (ref.current as any).removeEventListener("focusout", handleMouseUp);
      }
    };
  }, []);
  return [ref, value];
};
