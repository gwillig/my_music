import React from 'react';
import {Dropdown} from "react-bootstrap";
import axios from 'axios'
import {TIME_RECORD_TODAY, POST_TIME_RECORD} from "../BACKEND_URLS";

class StopwatchHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
      mode:"focus"
    };
    this.setMode = this.setMode.bind(this)
    this.saveTime = this.saveTime.bind(this)
 }

  componentDidMount() {
        //1.Step: Get the time records for today
        axios.get(TIME_RECORD_TODAY).then(response=>response.data).then(
            data =>{

                const response = data.map(el=>`${el.title} - ${el.date} - ${el.duration}`)
                this.setState({history:response})
            debugger
            }
        )
  }

  setMode = (e) =>{
    /*
    * @description:
        Set the text of clicked button to the component sate
    * */

    //1.Step: Get text of clicked btn
    const text =  e.target.innerHTML
    //2.Step: Set to state
    this.setState({mode:text})
    debugger

  }

  saveTime = () => {


    //1.Step: Define variables
    const {mode} = this.state
    const date = new Date()
    //2.Step: Create time object to post to backend
    const timeRecord = {}
    timeRecord.title = this.state.mode
    timeRecord.duration = `${this.props.formatTime(this.props.currentTimeHour)}:${
                             this.props.formatTime(this.props.currentTimeMin)}:${
                              this.props.formatTime(this.props.currentTimeSec)}`
    timeRecord.date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${
                         date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    axios.post(POST_TIME_RECORD,timeRecord)
    const timeStr = `${timeRecord.title} - ${timeRecord.date} - ${timeRecord.duration}`
    //3.Step: Add to state
    this.setState(prevState => ({
      history: [timeStr,...prevState.history]
    }))
  };


  render() {
    return (
      <div className={'stopwatch__history'}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Mode
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={this.setMode}>Focus</Dropdown.Item>
            <Dropdown.Item onClick={this.setMode}>Break</Dropdown.Item>
            <Dropdown.Item onClick={this.setMode}>Waste time</Dropdown.Item>
            <Dropdown.Item onClick={this.setMode}>Leisure</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button className="stopUhrBtn" onClick={this.saveTime}>SAVE TIME</button>
        <h3>History</h3>
        <ul>
          {this.state.history.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default StopwatchHistory;
