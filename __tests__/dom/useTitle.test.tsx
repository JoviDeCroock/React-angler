import { cleanup, testHook } from 'react-testing-library';
import useTitle from '../../src/dom/title';

describe('useDocumentTitle', () => {
  afterEach(() => cleanup());

  test('sets the title', () => {
    document.title = 'Hello'
    expect(document.title).toBe('Hello')
    testHook(() => {
      useTitle('Bye')
    })
    expect(document.title).toBe('Bye')
  })
});
