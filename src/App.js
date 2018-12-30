import React from 'react';
import './App.css';

import { Counter } from './Counter';
import { DateTime } from './DateTime';
import { Watch } from './watch/Watch';
import { DateFace, DayFace, AnalogFace, SecondsFace } from './watch/WatchFaceComponents';
import { Todos } from './todos/Todos';
import { SimpleCalculator } from './SimpleCalculator';

const todos = [
  {
    id: '2380f912-a619-403c-8cf1-510efc54cefe',
    text: 'todo 1',
    completed: false
  },
  {
    id: 'f44a2399-0c6f-4fd6-bc0f-fe453ccdc58a',
    text: 'todo 2',
    completed: true
  },
  {
    id: 'e22367c3-7350-43bd-a4d5-e2797680531d',
    text: 'todo 3',
    completed: false
  }
]
const App = () => (
  <div className="App">
    <h4>Counter Example</h4>
    <hr />
    <Counter initialCount="5"></Counter>
    <h4>DateTime Example</h4>
    <hr />
    <DateTime />
    <h4>Watch Example</h4>
    <hr />
    <div className="Watch">
      <Watch />
      <Watch face={date => <DayFace date={date} />} />
      <Watch face={date => <AnalogFace date={date} />} />
      <Watch face={date => <DateFace date={date} />} />
      <Watch face={date => <SecondsFace date={date} />} />
    </div>
    <h4>Simple Calculator</h4>
    <hr />
    <SimpleCalculator />
    <h4>Todo Example</h4>
    <hr />
    <Todos todos={todos} />

  </div>
);

export default App;
