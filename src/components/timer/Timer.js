import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
            time: 0,
            disabled: false,
            complete: true,
        }
    }

   updateInput = (value) => {
        this.setState({
            input: value,
            time: value
        })
   }

   checkTime = () => {
       if(this.state.time === 0) {
            this.setState({
                complete: !this.state.complete
            })
            clearInterval(this.request);
       }
   }

   returnToTimer = () => {
        this.setState({
            complete: !this.state.complete
        })
   }

   request;

   performAnimation = () => {
       this.setState({
           time: this.state.time -1,
       })
       this.checkTime();
   }
   
   start = () => {
       this.setState({
           disabled: !this.state.disabled
       })
       this.request = setInterval(this.performAnimation, 1000);
   }
   
   stop = () => {
       this.setState({
           disabled: !this.state.disabled
       })
       clearInterval(this.request);
   }
   
   reset = () => {
       this.setState({
           disabled: false,
           time: this.state.input
       })
       clearInterval(this.request);
   }

    render() {
        let seconds = Math.floor(this.state.time % 60);
        let minutes = Math.floor(this.state.time/60 % 60);
        let hours = Math.floor(this.state.time/3600);

        return(
            <div>
                <div>
                    <h1>{hours}:{minutes}:{seconds}</h1>
                    <button disabled={this.state.disabled} 
                            onClick={() => this.start()}>Start</button>
                    <button onClick={() => this.stop()}>Stop</button>
                    <button onClick={() => this.reset()}>Reset</button>
                </div>
                <input value ={this.state.input} 
                        default="enter number to countdown from" type="text" onChange={(e) => {this.updateInput(e.target.value)}}>
                </input>
                <div hidden={this.state.complete}>
                    <h1>Timer Complete!</h1>
                    <button onClick={() => this.returnToTimer()}>Create Another Timer</button>
                </div>
            </div>
        )
    }
}

export default Timer;