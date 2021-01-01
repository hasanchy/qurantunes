import React, { useState, useEffect } from 'react';
import db from '../db.json';
import './Watch.css';
import AudioPlayer from "./AudioPlayer";
import Progress from "./Progress";

const Watch = ({ id }) => {
    const [audioObj, setAudioProgress] = useState({});
    let audio,  interval;
    if(id){
    audio = new Audio("/audio/"+db[id].src);
    
    }
    useEffect(() => {
        if(id){
        // audio.play();
        interval = setInterval(() => {
            let currentTime = audio.currentTime;
            let progress = (audio.currentTime / audio.duration) * 100;
            // setCurrentTime(currentTime);
          }, 10);
        }
        return () => {
            if(id){
            // audio.pause();
            clearInterval(interval);
            }
          }

      });   

      const handleListen = (obj) =>{
        //   console.log(obj);
        // setAudioProgress(obj);
      }
    
      

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
                    
                        <AudioPlayer src={db[id].src}
                            onListen={handleListen}
                        />
                    
                    </div>
                </span>
            </div>
          </div>
          <Progress/>
      </>
        ) : (
          <></>
        )}
      </>
    );
  }

  export default Watch;