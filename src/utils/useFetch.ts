import * as React from 'react';

interface Payload {
  data?: object | string;
  error?: object;
  isLoading: boolean;
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Mode = 'no-cors' | 'cors' | 'same-origin';
type Cache = 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached';
type Credentials = 'same-origin' | 'include' | 'omit';
type Redirect = 'manual' | 'follow' | 'error';
type Referrer = 'no-referrer' | 'client';

interface Options {
  method?: Method;
  mode?: Mode;
  cache?: Cache;
  credentials?: Credentials;
  headers?: Headers | Array<Array<string>> | Record<string, string> | undefined;
  redirect?: Redirect;
  referrer?: Referrer;
  signal?: any;
  body?: any;
}

const initial: Payload = {
  data: undefined,
  error: undefined,
  isLoading: false,
}

const defaultOptions: Options = {
  headers: {
    "Content-Type": "application/json",
  },
  method: 'GET',
}

const useFetch = ({ options, url }: { options?: Options, url: string }) => {
  const [payload, setPayload] = React.useState(initial)
  React.useEffect(() => {
    const abortController = new AbortController();
    try {
      setPayload((d) => ({ ...d, isLoading: true }));
      fetch(url, {
        signal: abortController.signal,
        ...defaultOptions,
        ...options,
      }).then((response: any) => {
        if (response.status >= 300) {
          setPayload(() => ({ ...initial, error: { status }}));
          throw new Error(response.statusText);
        }
        response.json();
      }).then((json: any) => {
        const data = JSON.stringify(json);
        setPayload(() => ({ isLoading: false, data, error: undefined }))
      });

    } catch (e) {
      if (e.name !== "AbortError") {
        setPayload((d) => ({ ...d, error: { ...d.error, message: e.message } }));
      }
    }
    return () => abortController.abort();
  }, [url, options]);
  return payload;
}

export default useFetch;
