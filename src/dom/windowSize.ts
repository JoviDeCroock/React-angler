import { useLayoutEffect, useState } from 'react';

interface Dimensions {
  height: number,
  width: number,
}

const getSize = () => {
  return {
    height: window.innerHeight,
    width: window.innerWidth,
  }
}

const reactToResize = (setSize: (dimensions: Dimensions) => void) => {
  setSize(getSize());
}

export default () => {
  const [size, setSize] = useState();
  // Everytime the DOM is done rendering this is triggered.
  useLayoutEffect(() => {
    reactToResize(setSize);
    const boundReactToResize = reactToResize.bind(null, setSize);
    // Hook up the listener
    window.addEventListener('resize', boundReactToResize);
    // Return a disposer.
    return () => {
      window.removeEventListener('resize', boundReactToResize)
    }
  }, []);
  return size;
}
