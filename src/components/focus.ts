import * as React from "react";
import useToggle from "../state/toggle";

export default function useFocus(): [React.RefObject<any>, boolean] {
  const { setFalse, setTrue, value } = useToggle(false);
  const ref = React.useRef(null);
  const handleMouseDown = React.useCallback(() => setTrue(), []);
  const handleMouseUp = React.useCallback(() => setFalse(), []);

  React.useLayoutEffect(function setFocusListeners() {
    if (ref && ref.current) {
      (ref.current as any).addEventListener("focusin", handleMouseDown);
      (ref.current as any).addEventListener("focusout", handleMouseUp);
    }
    return function removeListeners() {
      if (ref && ref.current) {
        (ref.current as any).removeEventListener("focusin", handleMouseDown);
        (ref.current as any).removeEventListener("focusout", handleMouseUp);
      }
    };
  }, []);
  return [ref, value];
};
