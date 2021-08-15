
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
      'https://res.cloudinary.com/gwillig/video/upload/v1629020742/music/focus_4_1.mp3',
  },
]

const playListSleep= [
  {
    name: 'Focus_1',
    singer: 'Jay Chou',
    cover:
      '',
    musicSrc:
      'https://res.cloudinary.com/gwillig/video/upload/v1629020742/music/focus_4_1.mp3',
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