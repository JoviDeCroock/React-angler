import { cleanup, testHook } from 'react-testing-library';
import { useToggle } from '../../src';

const { act } = require('react-dom/test-utils'); /* tslint:disable-line */

describe('useToggle', () => {
  afterEach(() => cleanup());

  it('Correctly toggles', () => {
    let toggle: () => void;
    let value: boolean = true;
    const { rerender, unmount } = testHook(() => {
      ({ toggle, value } = useToggle());
    });
    expect(value).toBe(false);
    act(() => {
      toggle();
    });
    rerender();
    expect(value).toBe(true);
    act(() => {
      toggle();
    });
    rerender();
    expect(value).toBe(false);
  });

  it('Correctly sets false', () => {
    let setFalse: () => void;
    let value: boolean = false;
    const { rerender, unmount } = testHook(() => {
      ({ setFalse, value } = useToggle(true));
    });
    expect(value).toBe(true);
    act(() => {
      setFalse()
    });
    rerender();
    expect(value).toBe(false);
  });

  it('Correctly sets true', () => {
    let setTrue: () => void;
    let value: boolean = true;
    const { rerender, unmount } = testHook(() => {
      ({ setTrue, value } = useToggle(false));
    });
    expect(value).toBe(false);
    act(() => {
      setTrue()
    });
    rerender();
    expect(value).toBe(true);
  });

  it('Correctly sets value', () => {
    let setValue: (x: boolean) => void;
    let value: boolean = true;
    const { rerender, unmount } = testHook(() => {
      ({ setValue, value } = useToggle(false));
    });
    expect(value).toBe(false);
    act(() => {
      setValue(true)
    });
    rerender();
    expect(value).toBe(true);
  });
});
