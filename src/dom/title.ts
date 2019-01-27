import { useEffect } from 'react';

export default function useTitle(title: string) {
  useEffect(function setDocumentTitleEffect() { document.title = title }, [title])
}
