import React from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";
import axios from 'axios'
import {TIME_RECORD_TODAY, POST_TIME_RECORD} from "../BACKEND_URLS";

class StopwatchHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
      mode:"focus",
      note:""
    };
    this.setMode = this.setMode.bind(this)
    this.saveTime = this.saveTime.bind(this)
    this.setNote = this.setNote.bind(this)

 }

  componentDidMount() {
        //1.Step: Get the time records for today
        axios.get(TIME_RECORD_TODAY).then(response=>response.data).then(
            data =>{
                const response = data.map(el=>`${el.title} - ${el.date} - ${el.duration} - ${el.note}`)
                this.setState({history:response})

            }
        )
  }


  setNote = (e)  => {
     /*
    * @description:
        Set the text of the input to state
    * */
    //1.Step: Get text of clicked btn
    const text =  e.target.value
    //2.Step: Set to state
    this.setState({note:text})
    debugger

  }
  setMode = (e) =>{
    /*
    * @description:
        Set the text of clicked button to the component state
    * */
    //1.Step: Get text of clicked btn
    const text =  e.target.innerHTML
    //2.Step: Set to state
    this.setState({mode:text})
    debugger

  }

  saveTime = () => {
    //1.Step: Define variables
    const {mode, note} = this.state
    const date = new Date()
    //2.Step: Create time object to post to backend
    const timeRecord = {}
    timeRecord.title = mode
    timeRecord.note = note
    timeRecord.duration = this.props.currentDuration
    timeRecord.date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${
                         date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    axios.post(POST_TIME_RECORD,timeRecord)
    const timeStr = `${timeRecord.title} - ${timeRecord.date} - ${timeRecord.duration} - ${timeRecord.note}`
    //3.Step: Add to state
    this.setState(prevState => ({
      history: [timeStr,...prevState.history]
    }))

  };


  render() {
    return (
      <div className={'stopwatch__history'}>
          <label htmlFor="note">Note</label>
          <input  style={{backgroundColor: "#00a3ff96"}} className="stopUhrBtn" list="noteList" id="note"
                  onChange={this.setNote} value={this.state.note}
          />
          <datalist id="noteList">
            <option value="Music"></option>
            <option value="Candy"></option>
            <option value="Sleep"></option>
          </datalist>
          <DropdownButton variant="success" id="dropdown-basic" title={this.state.mode}>
            <Dropdown.Item onClick={this.setMode}>Focus</Dropdown.Item>
            <Dropdown.Item onClick={this.setMode}>Break</Dropdown.Item>
            <Dropdown.Item onClick={this.setMode}>Waste time</Dropdown.Item>
            <Dropdown.Item onClick={this.setMode}>Leisure</Dropdown.Item>
          </DropdownButton>
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
