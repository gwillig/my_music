import React from 'react';

class StopwatchDisplay extends React.Component {
  render() {
    return (
      <div className={'stopwatch__display'}>
        <span>
          {this.props.currentDuration}

        </span>
      </div>
    );
  }
}

export default StopwatchDisplay;
