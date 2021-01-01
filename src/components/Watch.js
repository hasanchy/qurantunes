import React, { useState, useEffect } from 'react';
import db from '../db.json';

function Watch({ id }) {
    let audio;
    if(id){
    audio = new Audio("/audio/"+db[id].src);
    }
    useEffect(() => {
        
        if(id){
        audio.play();
        }
        return () => {
            if(id){
            audio.pause();
            }
          }

      });


   
    
    return (
      <>
        {id ? (
          <div style={{backgroundColor:"#000", color:"#fff", height:"300px", padding:"10px"}}>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }

  export default Watch;