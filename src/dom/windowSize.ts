import { useLayoutEffect, useState } from 'react';

interface Dimensions {
  height: number,
  width: number,
}

function getSize(): Dimensions {
  return {
    height: window.innerHeight,
    width: window.innerWidth,
  }
}

function reactToResize(setSize: (currentDimensions: Dimensions) => void): void {
  setSize(getSize());
}

const initialDimensions: Dimensions = {
  height: 0,
  width: 0,
}

export default function useWindowSize(): Dimensions {
  const { 0: size, 1: setSize } = useState(initialDimensions);
  // Everytime the DOM is done rendering this is triggered.
  useLayoutEffect(function setWindowSizeListeners() {
    reactToResize(setSize);
    const boundReactToResize = reactToResize.bind(null, setSize);
    // Hook up the listener
    window.addEventListener('resize', boundReactToResize);
    // Return a disposer.
    return function removeListeners() {
      window.removeEventListener('resize', boundReactToResize)
    }
  }, []);
  return size;
}
