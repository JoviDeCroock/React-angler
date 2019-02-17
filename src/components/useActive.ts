import * as React from 'react';
import useToggle from '../state/useToggle';

export default function useActive(): [React.RefObject<any>, boolean] {
  const { setFalse, setTrue, value } = useToggle(false);
  const ref = React.useRef(null);
  const handleMouseDown = React.useCallback(() => setTrue(), []);
  const handleMouseUp = React.useCallback(() => setFalse(), []);

  React.useLayoutEffect(() => {
    if (ref && ref.current) {
      (ref.current as any).addEventListener('mousedown', handleMouseDown);
      (ref.current as any).addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      if (ref && ref.current) {
        (ref.current as any).removeEventListener('mousedown', handleMouseDown);
        (ref.current as any).removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, []);
  return [ref, value];
}
