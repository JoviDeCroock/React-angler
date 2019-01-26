import * as React from 'react';

const defaultOptions = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

export default function usedata(url, options) {
  const [state, setState] = React.useState(null);
  React.useEffect(function fetchEffect() {
    fetch(url, { ...defaultOptions, ...(options || {}) })
      .then(res => res.json())
      .then(setState);
  }, [options]);
  return state;
}
