import { cleanup, testHook } from 'react-testing-library';
import { useDidUpdate } from '../../src';

describe('useDidUpdate', () => {
  afterEach(() => cleanup());

  it('Should call the function when updating/mounting', () => {
    const x = jest.fn();
    let name = 'Jovi';
    const { rerender } = testHook(() => {
      useDidUpdate(x, [name])
    });
    expect(x).toBeCalledTimes(1);
    rerender();
    expect(x).toBeCalledTimes(1);
    name = 'Liesse';
    rerender();
    expect(x).toBeCalledTimes(2);
  })
});
