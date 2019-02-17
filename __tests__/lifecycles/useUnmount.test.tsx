import { cleanup, testHook } from 'react-testing-library';
import { useDidUnmount } from '../../src/';

describe('useWillUnMount', () => {
  afterEach(() => cleanup());

  it('Should only unmount once', () => {
    const x = jest.fn();
    const { unmount } = testHook(() => {
      useDidUnmount(x)
    });
    expect(x).toBeCalledTimes(0);
    unmount();
    expect(x).toBeCalledTimes(1);
  })
});
