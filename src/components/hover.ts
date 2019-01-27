import * as React from 'react';
import useToggle from '../state/toggle';

export default function useHover(): [React.RefObject<any>, boolean] {
  const { setFalse, setTrue, value } = useToggle(false);
  const ref = React.useRef(null);
  const handleMouseOver = React.useCallback(() => setTrue(), []);
  const handleMouseOut = React.useCallback(() => setFalse(), []);

  React.useEffect(function setHoverListeners() {
    if (ref && ref.current) {
      (ref.current as any).addEventListener('mouseover', handleMouseOver);
      (ref.current as any).addEventListener('mouseout', handleMouseOut);
    }
    return function removeListeners() {
      if (ref && ref.current) {
        (ref.current as any).removeEventListener('mouseover', handleMouseOver);
        (ref.current as any).removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);
  return [ref, value];
}
