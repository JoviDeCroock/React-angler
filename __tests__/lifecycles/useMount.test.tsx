import { cleanup, testHook } from 'react-testing-library';
import { useDidMount } from '../../src';

describe('useDidMount', () => {
  afterEach(() => cleanup());

  it('Should only mount once', () => {
    const x = jest.fn();
    const { rerender } = testHook(() => {
      useDidMount(x)
    });
    expect(x).toBeCalledTimes(1);
    rerender();
    expect(x).toBeCalledTimes(1);
  })
});
