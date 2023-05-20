import React from 'react';
import { createObservable , useObservable } from './useObservables';


const globalState = createObservable({
  count: 0
})

function CounterButton() {
  const counter = useObservable(globalState);
  return (
    <div>
      <button onClick={() => (counter.count += 1)}>Add One</button>
    </div>
  );
}

function App() {
  const counter = useObservable(globalState);

  return (
    <div className="App">
      <CounterButton/>
      <div>Count = {counter.count}</div>
    </div>
  );
}

export default App;
