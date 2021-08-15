
import {useState} from "react";
import React from "react"
import {Button, Container, Row,} from 'react-bootstrap';
import axios from "axios";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import "./styles.css";
import {GET_DATA} from "./BACKEND_URLS"

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


const playListFocus = [
  {
    name: 'Focus_1',
    singer: 'Jay Chou',
    cover:
      '',
    musicSrc:
      'https://res.cloudinary.com/gwillig/video/upload/v1629028166/music/focus1.mp3',
  },
  {
    name: 'Focus_2',
    singer: 'Jay Chou',
    cover:
      '',
    musicSrc:
      'https://res.cloudinary.com/gwillig/video/upload/v1629028145/music/focus2.mp3',
  },
  {
    name: 'Focus_4',
    singer: 'Jay Chou',
    cover:
      '',
    musicSrc:
      'https://res.cloudinary.com/gwillig/video/upload/v1629028137/music/focus_4.mp3',
  },
]

const playListSleep= [
  {
    name: 'Sleep1',
    singer: 'Jay Chou',
    cover:
      '',
    musicSrc:
      'https://res.cloudinary.com/gwillig/video/upload/v1629028146/music/sleep1.mp3',
  },
  {
    name: 'Sleep2',
    singer: 'Jay Chou',
    cover:
      '',
    musicSrc:
      'https://res.cloudinary.com/gwillig/video/upload/v1629028151/music/sleep2.mp3',
  },
  {
    name: 'Sleep3',
    singer: 'Jay Chou',
    cover:
      '',
    musicSrc:
      'https://res.cloudinary.com/gwillig/video/upload/v1629028160/music/sleep3.mp3',
  },
  {
    name: 'Sleep4',
    singer: 'Jay Chou',
    cover:
      '',
    musicSrc:
      'https://res.cloudinary.com/gwillig/video/upload/v1629028137/music/focus_4.mp3',
  },
]

const playListRelax = [
  {
    name: 'Focus_1',
    singer: 'Jay Chou',
    cover:
      '',
    musicSrc:
      'https://res.cloudinary.com/gwillig/video/upload/v1629029134/music/relax.mp3',
  },
]


class App extends React.Component{

    constructor() {
        super();
        this.onChangePlayList = this.onChangePlayList.bind(this)
        this.handleFetch = this.handleFetch.bind(this)
        this.state={
            audioList: playListFocus,
            MusicRecord:{}
        }
    }
      onChangePlayList = (playListName) => {
        debugger
            this.setState({audioList:playListName})
      }
      handleFetch = ( ) => {

          	axios
                .get(GET_DATA)
                .then(res => {
                    this.setState({MusicRecord:res.data})
                });

      }
      componentDidMount() {
        this.handleFetch()

      }

    render(){
        const {audioList, MusicRecord} = this.state
        return (
            <div className="App">
             <Container  className="align-middle " >
                 <Row className="justify-content-center pt-3">
                     <h1 className="display-3" style={{color:"white"}}>My Music</h1>
                 </Row>
                 {
                     Object.keys(MusicRecord).map(el=>{
                    return(
                     <Row className="justify-content-center pt-3">
                         <Button key={el} type="button" onClick={()=>this.onChangePlayList(MusicRecord[el])}>
                            Playlist: {el}
                      </Button>
                     </Row>
                    )
                 })}
             </Container>


             <ReactJkMusicPlayer
                 clearPriorAudioLists={true}
                 quietUpdate={false}
                 autoPlay={false}
                 mode="mini"
                 audioLists={audioList}/>
            </div>
      )
    }
}

export default App;