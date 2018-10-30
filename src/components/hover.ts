import { useEffect, useRef } from 'react';
import useToggle from '../state/toggle';


export default () => {
  const { setFalse, setTrue, value } = useToggle(false);

  const ref = useRef(null);

  const handleMouseOver = () => setTrue();
  const handleMouseOut = () => setFalse();

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener('mouseover', handleMouseOver);
      ref.current.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (ref && ref.current) {
        ref.current.removeEventListener('mouseover', handleMouseOver);
        ref.current.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);

  return [ref, value];
}
