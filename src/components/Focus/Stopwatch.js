import React from 'react';
import ReactDOM from 'react-dom';
import StopwatchDisplay from './StopwatchDisplay';
import StopwatchHistory from './StopwatchHistory';
import "./Stopwatch.css"


export const timeDistance = (date1, date2) => {

  let distance = Math.abs(date1 - date2);
  const hours = Math.floor(distance / 3600000);
  distance -= hours * 3600000;
  const minutes = Math.floor(distance / 60000);
  distance -= minutes * 60000;
  const seconds = Math.floor(distance / 1000);
  debugger
  return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
};


class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime:undefined,
      endTime:"",
      running: false,
      currentDuration:"00:00:00",
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
      currentTimeHour: 0,
    };
  }

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = '0' + value;
    }
    if (rest[0] === 'ms' && value.length < 3) {
      value = '0' + value;
    }
    return value;
  };

  start = () => {
     if (!this.state.running) {
      //Sets only a new startTime
      if (this.state.startTime){

        const {endTime} = this.state
        const previousDuration = endTime - this.state.startTime
        const newStartTime = new Date()-previousDuration
        this.setState({ running: true, startTime:newStartTime})
      }
      else{
        this.setState({ running: true, startTime:new Date() });
      }

      this.watch = setInterval(() => this.pace(), 100);
    }
  };

  stop = () => {
    this.setState({ running: false});

    clearInterval(this.watch);
  };

  pace = () => {
    const {startTime} = this.state
    const endTime = new Date()
    debugger
    this.setState({
      currentDuration:timeDistance(endTime,startTime),
      endTime:endTime
    })

    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
    if (this.state.currentTimeMs >= 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
    if (this.state.currentTimeMin >= 60) {
      this.setState({ currentTimeHour: this.state.currentTimeHour + 1 });
      this.setState({ currentTimeMin: 0 });
    }
  };

  reset = () => {
    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
      currentTimeHour:0,
      startTime: new Date(),
      currentDuration:"00:00:00"

    });
  };

  render() {
    return (
      <div className={'stopwatch'}>
        {this.state.running === false && (
          <button className="stopUhrBtn" onClick={this.start}>START</button>
        )}
        {this.state.running === true && (
          <button className="stopUhrBtn" onClick={this.stop}>STOP</button>
        )}
        <button className="stopUhrBtn" onClick={this.reset}>RESET</button>
        <StopwatchDisplay
          ref="display"
          {...this.state}
          formatTime={this.formatTime}
        />
        <StopwatchHistory {...this.state} formatTime={this.formatTime} />
      </div>
    );
  }
}

export default Stopwatch;
