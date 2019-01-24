import * as React from 'react';

interface Dimensions {
  height: number,
  width: number,
}

const getSize = (el: any) => {
  return {
    height: el.offsetHeight,
    width: el.offsetWidth,
  }
}

const reactToResize = (ref: any, setSize: (dimensions: Dimensions) => void) => {
  if (ref && ref.current) {
    setSize(getSize(ref));
  }
}

const initialDimensions: Dimensions = {
  height: 0,
  width: 0,
}

export default (): [React.RefObject<any>, Dimensions] => {
  const ref = React.useRef(null);
  const { 0: size, 1: setSize } = React.useState(initialDimensions);
  // Everytime the DOM is done rendering this is triggered.
  React.useLayoutEffect(() => {
    reactToResize(ref, setSize);
    const boundReactToResize = reactToResize.bind(null, ref, setSize);
    // Hook up the listener
    window.addEventListener('resize', boundReactToResize);
    // Return a disposer.
    return () => {
      window.removeEventListener('resize', boundReactToResize)
    }
  }, []);
  return [ref, size];
}
