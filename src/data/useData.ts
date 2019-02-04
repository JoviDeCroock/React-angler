import * as React from 'react';

const defaultOptions = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

function handleError(res) {
  switch(res.status) {
    case 200: break;
    case 400: throw new Error('Invalid request');
    case 401: throw new Error('Unauthorized');
    case 404: throw new Error('Not found');
    default: break;
  }
}

export default function usedata(url, options) {
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    setState(() => ({ loading: true }))
    fetch(url, { ...defaultOptions, ...(options || {}) })
      .then(res => {
        handleError(res);
        return res.json();
      })
      .then(data => setState(() => ({ data, loading: false })));
  }, [url, options]);
  return state;
}
