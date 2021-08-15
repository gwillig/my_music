
import {useState} from "react";
import React from "react"
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import "./styles.css";

class App extends React.Component{

    constructor() {
        super();
        this.state={
            audioList:[
                        {
                        name: 'Viva la vida',
                        singer: 'Coldplay',
                        musicSrc:'https://res.cloudinary.com/dvwayyj5d/video/upload/v1617727988/Coldplay_-_Viva_La_Vida_wethoj.mp3'
                      },
                        {
                           name: 'The Scientist',
                           singer: 'Coldplay',
                           musicSrc:'https://res.cloudinary.com/dvwayyj5d/video/upload/v1617727983/Coldplay_-_The_Scientist_jbyuef.mp3'
                         }, {
                           name: 'Hymn For The Weekend',
                           singer: 'Coldplay',
                           musicSrc:'https://res.cloudinary.com/dvwayyj5d/video/upload/v1617727974/Coldplay_-_Hymn_For_The_Weekend_Official_Video_tbwvcs.mp3'
                         } ,  {
                           name: 'A Sky Full Of Stars',
                           singer: 'Coldplay',
                           musicSrc:'https://res.cloudinary.com/dvwayyj5d/video/upload/v1617727963/Coldplay_-_A_Sky_Full_Of_Stars_szf5aw.mp3'
                         }
                     ]
        }
    }
  render(){

        const {audioList} = this.state
        return (
            <div className="App">
             <ReactJkMusicPlayer mode="full" audioLists={audioList}/>
            </div>
      )
    }
}

export default App;