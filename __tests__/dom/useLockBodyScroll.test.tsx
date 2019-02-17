import { cleanup, testHook } from 'react-testing-library';
import { useBodyScrollLock } from '../../src';

describe('useBodyScrollLock', () => {
  afterEach(() => cleanup());

  it('Locks the body overflow', () => {
    document.body.style.overflow = 'visible';
    expect(document.body.style.overflow).toBe('visible');
    const { unmount } = testHook(() => {
      useBodyScrollLock()
    });
    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('visible');
  })
});
