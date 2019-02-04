import * as React from 'react';

export default function useScreenObserver(margin: string): [React.RefObject<any>, boolean] {
  const { 0: isIntersecting, 1: setIntersecting } = React.useState(false);
  const ref = React.useRef(null);
  React.useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ({ 0: entry }) => {
        setIntersecting(() => entry.isIntersecting);
      }, { rootMargin: margin || '0px' });
    if (ref.current) { observer.observe((ref as any).current) }
    return () => { observer.unobserve((ref as any).current) };
  }, []);

  return [ref, isIntersecting];
}
