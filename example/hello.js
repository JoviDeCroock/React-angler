import React from 'react';
import { useLifecycles, usePreviousValue } from 'react-angler';

const Hello = (props) => {
  const { id, name } = props;
  const prevProps = usePreviousValue(props);
  useLifecycles({
    didMount: () => console.log(id, ' Mounted'),
    didUnmount: () => console.log(id, ' Unmount'),
    didUpdate: () => {
      console.groupCollapsed(id);
      console.log('PREV', prevProps);
      console.log('NEXT', props);
      console.log('Update');
      console.groupEnd();
    },
  });

  return <p>Hi {name}</p>;
};

export default Hello;
