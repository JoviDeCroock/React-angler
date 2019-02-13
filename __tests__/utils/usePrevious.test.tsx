import { cleanup, testHook } from 'react-testing-library';
import usePrevious from '../../src/utils/getPreviousValue';

describe('getPreviousValue', () => {
  afterEach(() => cleanup());

  test('returns the previous value', () => {
    let x = 1
    let previous;
    const { rerender } = testHook(() => {
      previous = usePrevious(x)
    });
    expect(previous).toBe(undefined);
    x = 2;
    expect(previous).toBe(undefined);
    rerender();
    expect(previous).toBe(1);
    rerender();
    expect(previous).toBe(2);
  });

  test('Holds onto refferential integrity', () => {
    let x: any = { jovi: 23 };
    let previous;
    const { rerender } = testHook(() => {
      previous = usePrevious(x)
    });
    expect(previous).toBe(undefined);
    let y = x;
    x = { liesse: 22 };
    rerender();
    expect(previous).toBe(y);
    rerender();
    expect(previous).toBe(x);
  });
});
