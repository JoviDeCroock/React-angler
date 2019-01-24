import * as React from 'react';
import useToggle from '../state/toggle';

export default (): [React.RefObject<any>, boolean] => {
  const { setFalse, setTrue, value } = useToggle(false);
  const ref = React.useRef(null);
  const handleMouseDown = React.useCallback(() => setTrue(), []);
  const handleMouseUp = React.useCallback(() => setFalse(), []);

  React.useEffect(() => {
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
