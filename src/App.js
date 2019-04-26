import React from 'react';
import './App.css';

import Stopwatch from './components/timer/Stopwatch';
import Timer from './components/timer/Timer';

function App() {
  return (
    <div className="App">
      <h1>StopWatch</h1>
      <Stopwatch />
      <h1>Timer</h1>
      <Timer/>
    </div>
  );
}

export default App;
