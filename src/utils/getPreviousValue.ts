import { useEffect, useRef } from 'react';

export default function usePreviousValue<T = any>(value: T): T {
  const ref = useRef(null);
  useEffect(() => { ref.current = value; });
  return ref.current;
}
