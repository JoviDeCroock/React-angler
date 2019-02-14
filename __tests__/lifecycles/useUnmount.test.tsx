import { cleanup, testHook } from 'react-testing-library';
import useWillUnMount from '../../src/lifecycles/onUnmount';

describe('useWillUnMount', () => {
  afterEach(() => cleanup());

  it('Should only unmount once', () => {
    const x = jest.fn();
    const { unmount } = testHook(() => {
      useWillUnMount(x)
    });
    expect(x).toBeCalledTimes(0);
    unmount();
    expect(x).toBeCalledTimes(1);
  })
});
