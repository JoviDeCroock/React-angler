import * as React from 'react';

export default function useLockBodyScroll(): void {
  React.useLayoutEffect(function layoutScrollEffect() {
    document.body.style.overflow = 'hidden';
    return function removeListeners() {
      document.body.style.overflow = 'visible';
    }
   }, []);
}
