import { cleanup, testHook } from 'react-testing-library';
import useWindowSize from '../../src/dom/windowSize';

describe('useWindowSize', () => {
  afterEach(() => cleanup());

  it('Locks the body overflow', () => {
    (window.innerHeight as any) = 1080;
    (window.innerWidth as any) = 1920;
    let dimensions;
    testHook(() => {
      dimensions = useWindowSize()
    });
    expect((dimensions as any).width).toBe(1920);
    expect((dimensions as any).height).toBe(1080);
  })
});
