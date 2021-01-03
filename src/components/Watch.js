import React, { useState, useEffect } from 'react';
import db from '../db.json';
import './Watch.css';
import AudioPlayer from "./AudioPlayer";
import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";
import Subtitle from "./Subtitle";
import DetailsView from './DetailsView';
import useAudioPlayer from './useAudioPlayer';

const Watch = ({ id }) => {
    const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
    const [audioObj, setAudioProgress] = useState({});
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    let img;
    if(id){
        // let maxIndex = db[id].img.length-1;
        // let imageIndex = getRandom(0,maxIndex)
        img = db[id].img[0];
    }
    return (
      <>
        {id ? (
            <>
        <div id="animate-area" style={{backgroundImage:"url(/image/"+img+")"}}>
            <div style={{width:"100%", height:"100%", backgroundColor:"rgb(0, 0, 0, .7)", color:"#fff", textAlign:"center", fontSize:"14", fontWeight:"bold",}}>
                <DetailsView
                  playing={playing}
                  curTime={curTime}
                  details={db[id].details}
                />
                <Subtitle
                    curTime={curTime}
                    duration={duration}
                    text={db[id].text}
                />
                <audio id="audio">
                            <source src={"/audio/" + db[id].src} />
                            Your browser does not support the <code>audio</code> element.
                        </audio>
            </div>
          </div>
          <Bar
            curTime={curTime}
            duration={duration}
            onTimeUpdate={(time) => setClickedTime(time)}
          />
          <div>
          {playing ? 
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        }
              
            </div>
      </>
        ) : (
          <></>
        )}
      </>
    );
  }

  export default Watch;