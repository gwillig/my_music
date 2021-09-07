
import {useState} from "react";
import React from "react"
import {Button, Container, Row,Tabs,Tab} from 'react-bootstrap';

import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import "./components/styles.css";
import Focus from './components/Focus/Focus'
import Player from "./components/Player"
import Stats from "./components/Stats/Stats"
import {GET_DATA} from "./BACKEND_URLS"
import axios from "axios";
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'



class App extends React.Component{
    constructor(props) {
        super(props);
        this.state= {

        }
    }

    render(){
        return(
            <Container>
             <Tabs defaultActiveKey="Player" id="uncontrolled-tab-example" className="pt-5">
                  <Tab eventKey="Player" title="Player">
                    <Player/>
                  </Tab>
                  <Tab eventKey="Focus" title="Focus">
                      <Focus></Focus>
                  </Tab>
                  <Tab eventKey="Stats" title="Stats">
                        <Stats></Stats>
                  </Tab>
            </Tabs>
            </Container>

        )
    }
}

export default App;
