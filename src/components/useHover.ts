import * as React from 'react';
import useToggle from '../state/useToggle';

export default function useHover(): [React.RefObject<any>, boolean] {
  const { setFalse, setTrue, value } = useToggle(false);
  const ref = React.useRef(null);
  const handleMouseOver = React.useCallback(() => setTrue(), []);
  const handleMouseOut = React.useCallback(() => setFalse(), []);

  React.useLayoutEffect(() => {
    if (ref && ref.current) {
      (ref.current as any).addEventListener('mouseover', handleMouseOver);
      (ref.current as any).addEventListener('mouseout', handleMouseOut);
    }
    return () => {
      if (ref && ref.current) {
        (ref.current as any).removeEventListener('mouseover', handleMouseOver);
        (ref.current as any).removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);
  return [ref, value];
}
