
import {useState} from "react";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import "./styles.css";

export default function App() {
  const [audioList,setAudioList] = useState([
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
 ]);

 const updateAudioList = ()=>{
      const newAudioList = [...audioList];
      newAudioList.splice(2,0,{name:'Paradise',singer:'Coldplay',musicSrc:'https://res.cloudinary.com/dvwayyj5d/video/upload/v1617727909/Coldplay_-_Paradise_Official_Video_px5u9e.mp3'})
      setAudioList(newAudioList); 
    }

  return (
    <div className="App">
      <h2>Click on the add song button to add new song in between the 2 and 3 song </h2>
      <button onClick={updateAudioList}>add song</button>
      <h3>Songs in audioList</h3> 
      <ol> 
        {audioList.map(el=><li>{el.name}</li>)}
      </ol>
     <ReactJkMusicPlayer audioLists={audioList}/>
    </div>
  );
}
