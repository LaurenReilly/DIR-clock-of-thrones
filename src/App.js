import React, {Component} from 'react';
import './App.css';

import Stopwatch from './components/timer/Stopwatch';
import Timer from './components/timer/Timer';
import AllCharacters from './components/got/AllCharacters';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    timers: [],
    showThrones: true
  }
}

addTimer = () => {
  this.setState({timers: this.state.timers.concat(<Timer/>)})
}

toggleShowThrones = () => {
  this.setState({
    showThrones: !this.state.showThrones
  })
}

render() {
  return (
    <div className="App">
    <button onClick={this.toggleShowThrones}>{this.state.showThrones? "Change to Timers" : "Change to Game of Thrones"}</button>
    {this.state.showThrones ? <AllCharacters/> : 
      (<><h1>StopWatch</h1>
        <Stopwatch />
        <h1>Timers</h1>
        <button onClick={this.addTimer}>Add a Timer</button>
        {this.state.timers.map(timer => timer)} </>) 
      }
      
    </div>
  );
}
  
}

export default App;
