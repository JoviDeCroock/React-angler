import { cleanup, testHook } from 'react-testing-library';
import { useLocalStorage } from '../../src';

const { act } = require('react-dom/test-utils'); /* tslint:disable-line */

describe('useLocalStorage', () => {
  afterEach(() => cleanup());

  it('Correctly handles changes', () => {
    let setValue: any;
    let value: any;
    const { rerender, unmount } = testHook(() => {
      ({ setValue, value } = useLocalStorage('token', null));
    });
    expect(value).toBe(null);
    act(() => {
      (setValue as any)('secret')
    });
    rerender();
    const storageValue = JSON.parse((window.localStorage.getItem('token') as any));
    expect(value).toBe('secret');
    expect(storageValue).toBe('secret');
  })
});
