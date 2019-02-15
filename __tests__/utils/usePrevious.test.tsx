import { cleanup, testHook } from 'react-testing-library';
import usePrevious from '../../src/utils/getPreviousValue';

describe('usePreviousValue', () => {
  afterEach(() => cleanup());

  it('Returns the previous value', () => {
    let x = 1
    let previous;
    const { rerender } = testHook(() => {
      previous = usePrevious(x)
    });
    expect(previous).toBeFalsy();
    x = 2;
    expect(previous).toBeFalsy();
    rerender();
    expect(previous).toBe(1);
    rerender();
    expect(previous).toBe(2);
  });

  it('Holds onto refferential integrity', () => {
    let x: any = { jovi: 23 };
    let previous;
    const { rerender } = testHook(() => {
      previous = usePrevious(x)
    });
    expect(previous).toBeFalsy();
    const y = x;
    x = { liesse: 22 };
    rerender();
    expect(previous).toBe(y);
    rerender();
    expect(previous).toBe(x);
  });
});
