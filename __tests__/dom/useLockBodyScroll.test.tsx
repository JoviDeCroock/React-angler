import { cleanup, testHook } from 'react-testing-library';
import useLockBodyScroll from '../../src/dom/lockBodyScroll';

describe('useLockBodyScroll', () => {
  afterEach(() => cleanup());

  it('Locks the body overflow', () => {
    document.body.style.overflow = 'visible';
    expect(document.body.style.overflow).toBe('visible');
    const { unmount } = testHook(() => {
      useLockBodyScroll()
    });
    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('visible');
  })
});
