
import {useState} from "react";
import React from "react"
import {Button, Container, Row} from 'react-bootstrap';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import "./styles.css";


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
      'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  },
]


class App extends React.Component{

    constructor() {
        super();
        this.onChangePlayList = this.onChangePlayList.bind(this)
        this.state={
            audioList: playListFocus
        }
    }
      onChangePlayList = (playListName) => {
            this.setState({audioList:playListName})
      }
  render(){

        const {audioList} = this.state
        return (
            <div className="App">
             <Container fluid className="align-middle " >
                 <Row className="justify-content-md-center">
                     <Button type="button" onClick={()=>this.onChangePlayList(playListFocus)}>
                        Playlist: Focus
                  </Button>
                 </Row>
                  <Row className="justify-content-md-center p-3">
                     <Button type="button" onClick={()=>this.onChangePlayList(playListSleep)}>
                        Playlist: Sleep
                  </Button>
                 </Row>
                  <Row className="justify-content-md-center" p-3>
                     <Button type="button" onClick={()=>this.onChangePlayList(playListRelax)}>
                        Playlist: Relax
                  </Button>
                 </Row>
             </Container>


             <ReactJkMusicPlayer
                 clearPriorAudioLists={true}
                 quietUpdate="false"
                 autoPlay="false"
                 mode="full"
                 audioLists={audioList}/>
            </div>
      )
    }
}

export default App;