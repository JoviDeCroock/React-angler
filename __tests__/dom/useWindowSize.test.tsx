import { cleanup, fireEvent, testHook } from 'react-testing-library';
import useWindowSize from '../../src/dom/useWindowSize';

describe('useWindowSize', () => {
  afterEach(() => cleanup());

  it('Locks the body overflow', () => {
    (window.innerHeight as any) = 1080;
    (window.innerWidth as any) = 1920;
    let dimensions;
    const { rerender } = testHook(() => {
      dimensions = useWindowSize()
    });
    expect((dimensions as any).width).toBe(1920);
    expect((dimensions as any).height).toBe(1080);
    (window.innerHeight as any) = 900;
    (window.innerWidth as any) = 1440;
    fireEvent(window, new Event('resize'));
    rerender();
    expect((dimensions as any).width).toBe(1440);
    expect((dimensions as any).height).toBe(900);
  })
});
