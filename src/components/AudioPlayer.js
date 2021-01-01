import React, { useState, useEffect } from 'react';

  const AudioPlayer=(props) =>{
    const [currentTime, setCurrentTime] = useState("");
    let audio,  interval;
    audio = new Audio("/audio/"+props.src);
    useEffect(() => {
        audio.play();
        interval = setInterval(() => {
            let currentTime = audio.currentTime;
            let progress = (audio.currentTime / audio.duration) * 100;
            props.onListen({currentTime, progress});
            // setCurrentTime(currentTime);
          }, 10);
        return () => {
            audio.pause();
            clearInterval(interval);
          }
      });  

    return (
      <></>
    );
  }

  export default AudioPlayer;