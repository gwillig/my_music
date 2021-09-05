import React from 'react'
import {Dropdown} from 'react-bootstrap'
import Stopwatch from "./Stopwatch";


class Focus extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <>
               <Stopwatch></Stopwatch>
            </>
        )
    }
}

export default Focus;