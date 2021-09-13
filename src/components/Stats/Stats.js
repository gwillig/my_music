import React from "react"
import {TIME_RECORD_STATS, TIME_RECORD_TODAY} from "../BACKEND_URLS"
import {Table} from "react-bootstrap"
import axios from "axios";
import "./Stats.css"
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


class Stats extends React.Component{
    constructor(props) {
        super(props);
        this.state = {stats:[]}
    }

    componentDidMount() {
      //1.Step: Get the time records for today
      axios.get(TIME_RECORD_STATS).then(response => response.data).then(
          data => {

              this.setState({stats: data.result})


          }
      )
    }
    render(){
        const {stats} = this.state
        if(Object.keys(stats).length>0){

        }

        return(
                <Table striped bordered hover style={{color:"white"}}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Focus</th>
                      <th>Sleep</th>
                      <th>Break</th>
                      <th>Wasted Time</th>
                    </tr>
                  </thead>
                  <tbody>
                  { stats.map(el=>{
                      debugger
                      return(
                             <tr>
                              <td>{el["Date"]}</td>
                              <td>{el["Focus"]}</td>
                              <td>{el["Sleep"]}</td>
                              <td>{el["Break"]}</td>
                             <td>{el["Waste time"]}</td>
                            </tr>
                      )
                  })}
                  </tbody>
                </Table>
        )
    }
}


export default Stats;