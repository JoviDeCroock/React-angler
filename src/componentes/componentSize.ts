import { useState, useLayoutEffect } from 'react';

const getSize = (el) => {
  return {
    height: el.offsetHeight,
    width: el.offsetWidth,
  }
}

const reactToResize = (ref, setSize) => {
  if (ref && ref.current) {
    setSize(getSize(ref));
  }
}

export default (ref) => {
  const [size, setSize] = useState(ref.current);
  // Everytime the DOM is done rendering this is triggered.
  useLayoutEffect(() => {
    reactToResize(ref, setSize);
    const boundReactToResize = reactToResize.bind(this, ref, setSize);
    // Hook up the listener
    window.addEventListener('resize', boundReactToResize);
    // Return a disposer.
    return () => {
      window.removeEventListener('resize', boundReactToResize)
    }
  }, []);
  return size;
}
