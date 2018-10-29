import React, { memo, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useCounter, useInput, useTitle, useToggle } from 'react-angler';

import Hello from './hello';

const App = memo(() => {
  const { value: rerenders, increase } = useCounter(0);
  const { value: mounted, toggle: toggleMount } = useToggle(false);
  const { value: name, onChange } = useInput('Jovi');
  const BatchComponent1 = useMemo(() => <Hello id="batch-1" name={name} />, [rerenders]);
  const BatchComponent2 = useMemo(() => <Hello id="batch-2" name={name} />, [rerenders]);
  const normalComponent1 = useMemo(() => <Hello id="normal-1" name={name} />, [name]);
  useTitle('Jovi Test');

  return (
    <div className="App">
      <h1>Jovi Experiment</h1>
      <p>Type in input to change the name</p>
      <input onChange={onChange} value={name} />
      <div>
        <h3>normal rerender:</h3>
        {normalComponent1}
      </div>
      <div>
        <h3>Batch rerender:</h3>
        {BatchComponent1}
        {mounted && BatchComponent2}
      </div>
      <button type="button" onClick={increase}>
        rerender
      </button>
      <button type="button" onClick={toggleMount}>
        Unmount one.
      </button>
      <p>rerenders: {rerenders}</p>
    </div>
  );
});

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};

// Initial render
document.body.innerHTML += '<div id="root"></div>';
render();
