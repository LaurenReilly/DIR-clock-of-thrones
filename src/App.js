import React, {Component} from 'react';
import './App.css';

import Stopwatch from './components/timer/Stopwatch';
import Timer from './components/timer/Timer';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    timers: []
  }
}

addTimer = () => {
  this.setState({timers: this.state.timers.concat(<Timer/>)})
}

render() {
  return (
    <div className="App">
      <h1>StopWatch</h1>
      <Stopwatch />
      <h1>Timers</h1>
      <button onClick={this.addTimer}>Add a Timer</button>
      {this.state.timers.map(timer => timer)}
    </div>
  );
}
  
}

export default App;
