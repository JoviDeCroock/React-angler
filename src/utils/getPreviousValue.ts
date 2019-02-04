import { useEffect, useRef } from 'react';

export default function usePreviousValue(value: any): any {
  const ref = useRef({});
  useEffect(() => { ref.current = value; });
  return ref.current;
}
