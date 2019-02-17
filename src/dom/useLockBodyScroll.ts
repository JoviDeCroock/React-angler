import * as React from 'react';

export default function useLockBodyScroll(): void {
  React.useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'visible'; }
   }, []);
}
