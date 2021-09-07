

import React from "react"
import {Button, Container, Row,} from 'react-bootstrap';
import axios from "axios";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import "./styles.css";
import {GET_DATA} from "./BACKEND_URLS"

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'



class Player extends React.Component{

    constructor() {
        super();
        this.onChangePlayList = this.onChangePlayList.bind(this)
        this.handleFetch = this.handleFetch.bind(this)
        this.state={
            audioList: [{}],
            MusicRecord:{}
        }
    }
      onChangePlayList = (playListName) => {

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
            <div className="App" style={{marginTop:"20px"}}>

             <Container className="align-middle " >
                 <Row className="justify-content-center pt-3">
                     <h1 className="display-3" style={{color:"white"}}>My Music</h1>
                 </Row>
                 {
                     Object.keys(MusicRecord).map(el=>{
                    return(
                     <Row className="justify-content-center pt-3">
                         <Button className="btnGenre" key={el} type="button" onClick={()=>this.onChangePlayList(MusicRecord[el])}>
                            Playlist: {el}
                      </Button>
                     </Row>
                    )
                 })}
             </Container>

             <ReactJkMusicPlayer
                 clearPriorAudioLists={true}
                 defaultPosition={{bottom:250,left:120}}
                 quietUpdate={false}
                 autoPlay={true}
                 mode="omitted"
                 audioLists={audioList}

                 showMediaSession={true}
                 preload={true}
             />


            </div>
      )
    }
}

export default Player;