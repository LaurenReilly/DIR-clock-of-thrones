import React, {Component} from 'react';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            disabled: false
        }
    }

request;

performAnimation = () => {
    this.setState({
        time: this.state.time +1,
    })
  this.request = requestAnimationFrame(this.performAnimation);
}

start = () => {
    this.setState({
        disabled: !this.state.disabled
    })
    requestAnimationFrame(this.performAnimation);
}

stop = () => {
    this.setState({
        disabled: !this.state.disabled
    })
    cancelAnimationFrame(this.request);
}

reset = () => {
    this.setState({
        disabled: false,
        time: 0
    })
    cancelAnimationFrame(this.request);
}

    render() {
        let seconds = Math.floor(this.state.time/60 % 60)
        let minutes = Math.floor(this.state.time/3600 % 60)
        let hours = Math.floor(this.state.time/216000)
        return (
            <div>
                <h1>{hours}:{minutes}:{seconds}</h1>
                <div>
                    <button disabled={this.state.disabled} 
                            onClick={() => this.start()}>Start</button>
                    <button onClick={() => this.stop()}>Stop</button>
                    <button onClick={() => this.reset()}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Stopwatch;