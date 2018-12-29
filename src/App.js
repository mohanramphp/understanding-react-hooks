import React from 'react';
import './App.css';

import { Counter } from './Counter';
import { DateTime } from './DateTime';

const App = () => (
  <div className="App">
    <h4>Counter Example</h4>
    <hr />
    <Counter initialCount="5"></Counter>
    <h4>DateTime Example</h4>
    <hr />
    <DateTime />
  </div>
);

export default App;
