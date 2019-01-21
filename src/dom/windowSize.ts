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

const reactToResize = (setSize: (currentDimensions: Dimensions) => void) => {
  setSize(getSize());
}

const initialDimensions: Dimensions = {
  height: 0,
  width: 0,
}

export default (): Dimensions => {
  const { 0: size, 1: setSize } = useState(initialDimensions);
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
