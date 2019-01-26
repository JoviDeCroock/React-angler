import * as React from 'react';

export default function useScreenObserver(margin: string): [React.RefObject<any>, boolean] {
  const { 0: isIntersecting, 1: setIntersecting } = React.useState(false);
  const ref = React.useRef(null);
  React.useLayoutEffect(function observerEffect() {
    const observer = new IntersectionObserver(
      function intersectionObserver ({ 0: entry }) {
        setIntersecting(entry.isIntersecting);
      }, { rootMargin: margin });
    if (ref.current) { observer.observe(ref.current) }
    return function dispose() { observer.unobserve(ref.current) };
  }, []);

  return [ref, isIntersecting];
}
