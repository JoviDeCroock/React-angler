import { cleanup, testHook } from 'react-testing-library';
import useTitle from '../../src/dom/useTitle';

describe('useDocumentTitle', () => {
  afterEach(() => cleanup());

  it('Sets the title', () => {
    document.title = 'Hello'
    expect(document.title).toBe('Hello')
    testHook(() => {
      useTitle('Bye')
    })
    expect(document.title).toBe('Bye')
  })
});
