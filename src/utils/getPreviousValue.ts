import { useEffect, useRef } from 'react';

export default (value: any): any => {
  const ref = useRef({});
  useEffect(() => { ref.current = value; });
  return ref.current;
}
