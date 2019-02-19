import { cleanup, testHook } from 'react-testing-library';
import { useCounter } from '../../src';

const { act } = require('react-dom/test-utils'); /* tslint:disable-line */

describe('useCounter', () => {
  afterEach(() => cleanup());

  it('Correctly decreases and sets initial value', () => {
    let decrease: () => void;
    let value: number = 10;
    const { rerender } = testHook(() => {
      ({ decrease, value } = useCounter(10));
    });
    expect(value).toBe(10);
    act(() => {
      decrease();
    });
    rerender();
    expect(value).toBe(9);
    act(() => {
      decrease();
    });
    rerender();
    expect(value).toBe(8);
  });

  it('Correctly increases and sets initial value', () => {
    let decrease: () => void;
    let value: number = 10;
    const { rerender } = testHook(() => {
      ({ decrease, value } = useCounter(10));
    });
    expect(value).toBe(10);
    act(() => {
      decrease();
    });
    rerender();
    expect(value).toBe(9);
    act(() => {
      decrease();
    });
    rerender();
    expect(value).toBe(8);
  });

  it('Correctly setsValue', () => {
    let setValue: (x: number) => void;
    let value: number = 10;
    const { rerender } = testHook(() => {
      ({ setValue, value } = useCounter());
    });
    expect(value).toBe(0);
    act(() => {
      setValue(10);
    });
    rerender();
    expect(value).toBe(10);
    act(() => {
      setValue(20);
    });
    rerender();
    expect(value).toBe(20);
  });
});
