import * as React from 'react';

// Temp file to extend the react typings
declare module 'react' {
  function memo<Props>(component: React.StatelessComponent<Props>): React.StatelessComponent<Props>;

  function lazy<P, Component extends React.ComponentType<P>>(
    importFn: () => Promise<Component>,
  ): Component;

  function useState<State>(
    initialState?: State | (() => State),
  ): [State, StateUpdateFunction<State>];

  function useEffect(f: () => void | (() => void), keys?: any[]): void;
  function useMutationEffect(f: () => void | (() => void), keys?: any[]): void;
  function useLayoutEffect(f: () => void | (() => void), keys?: any[]): void;

  function useContext<Context>(context: React.Context<Context>): Context;

  function useReducer<State, Action>(
    reducer: Reducer<State, Action>,
    initialState: State,
    initialAction?: Action,
  ): [State, (action: Action) => void];

  function useCallback<Callback extends Function, R>(f: Callback, keys?: any[]): Callback;
  function useMemo<Value>(f: () => Value, keys?: any[]): Value;

  function useRef<T>(): {current: T | null};
  function useRef<T>(initial: T): {current: T};

  function useImperativeMethods<Ref, ImperativeMethods>(
    ref: React.Ref<Ref> | undefined,
    f: () => ImperativeMethods,
    keys?: any[],
  ): void;
}

