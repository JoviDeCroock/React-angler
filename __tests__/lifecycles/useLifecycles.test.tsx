import { cleanup, testHook } from 'react-testing-library';
import useLifecycles from '../../src/lifecycles/initLifecycles';

describe('useDidUpdate', () => {
  afterEach(() => cleanup());

  it('Should call the function when updating/mounting', () => {
    const didUpdate = jest.fn();
    const didMount = jest.fn();
    const willUnmount = jest.fn();

    let name = 'Jovi';
    const { rerender, unmount } = testHook(() => {
      useLifecycles({
        didMount,
        didUnmount: willUnmount,
        didUpdate,
        watchables: [name],
      })
    });
    expect(didMount).toBeCalledTimes(1);
    expect(didUpdate).toBeCalledTimes(1);
    expect(willUnmount).toBeCalledTimes(0);
    rerender();
    expect(didMount).toBeCalledTimes(1);
    expect(didUpdate).toBeCalledTimes(1);
    expect(willUnmount).toBeCalledTimes(0);
    name = 'Liesse';
    rerender();
    expect(didMount).toBeCalledTimes(1);
    expect(didUpdate).toBeCalledTimes(2);
    expect(willUnmount).toBeCalledTimes(0);
    unmount();
    expect(didMount).toBeCalledTimes(1);
    expect(didUpdate).toBeCalledTimes(2);
    expect(willUnmount).toBeCalledTimes(1);
  });

  it('should not fail with undefined functions', () => {
    const { rerender, unmount } = testHook(() => {
      useLifecycles()
    });

    rerender();
    unmount();
  })
});
