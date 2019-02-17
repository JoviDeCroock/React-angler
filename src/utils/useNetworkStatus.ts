import { useEffect } from 'react';

import useToggle from '../state/useToggle';

export default function useNetworkStatus(): boolean {
  const { value: status, setTrue: goOnline, setFalse: goOffline } = useToggle(navigator.onLine);
  useEffect(() => {
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);
  return status;
};
