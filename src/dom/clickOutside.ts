import * as React from 'react';

export default function useOnClickOutside(handler: (e: any) => any): React.RefObject<any> {
  const ref = React.useRef(null);
  React.useLayoutEffect(() => {
    const listener = function clickListener(event: any) {
      if (!ref.current || ((ref.current as any).contains(event.target))) { return; }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function disposeListener() {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, []);
  return ref;
}
