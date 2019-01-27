import { useEffect } from 'react';

import useToggle from '../state/toggle';

export default function useNetworkStatus(): boolean {
  const { value: status, setTrue: goOnline, setFalse: goOffline } = useToggle(navigator.onLine);
  useEffect(function setListeners() {
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return function removeListeners() {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);
  return status;
};
