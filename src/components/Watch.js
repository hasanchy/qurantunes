import React, { useState, useEffect } from 'react';
import db from '../db.json';
import './Watch.css';
import AudioPlayer from "./AudioPlayer";
import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";
import useAudioPlayer from './useAudioPlayer';

const Watch = ({ id }) => {
    const { curTime, duration, progress, playing, setPlaying, setClickedTime } = useAudioPlayer();
    const [audioObj, setAudioProgress] = useState({});

    // useEffect(() => {
    //     setPlaying(true);
    //     return () => {
    //         setPlaying(false);
    //       }

    //   });
    
    return (
      <>
        {id ? (
            <>
        <div id="animate-area" style={{backgroundImage:"url(http://localhost:3000/image/"+db[id].img+")"}}>
            <div style={{width:"100%", height:"100%", backgroundColor:"rgb(0, 0, 0, .7)", color:"#fff", textAlign:"center", fontSize:"14", fontWeight:"bold",}}>
                <span style={{display:"inline-block",padding:"20px"}}>
                    <div style={{fontSize:"30px", marginTop:"30px"}}>الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا وَهُوَ الْعَزِيزُ الْغَفُورُ</div>
                    <div  style={{fontSize:"22px", marginTop:"30px"}}>He Who created Death and Life, that He may try which of you is best in deed: and He is the Exalted in Might, Oft-Forgiving.</div>
                    <div>
                    <audio id="audio">
                        <source src={"/audio/" + db[id].src} />
                        Your browser does not support the <code>audio</code> element.
                    </audio>
                    </div>
                </span>
            </div>
          </div>
          <Bar
            curTime={curTime}
            duration={duration}
            progress={progress}
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