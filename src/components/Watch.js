import React, { useState, useEffect } from 'react';
import db from '../db.json';
import './Watch.css';

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
        <div id="animate-area">
            <div style={{width:"100%", height:"100%", backgroundColor:"rgb(0, 0, 0, .7)", color:"#fff", textAlign:"center", fontSize:"14", fontWeight:"bold",}}>
                <span style={{display:"inline-block",padding:"20px"}}>
                    <div style={{fontSize:"30px", marginTop:"30px"}}>تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</div>
                    <div  style={{fontSize:"22px", marginTop:"30px"}}>Blessed be He in Whose hands is Dominion; and He over all things hath Power.</div>
                </span>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }

  export default Watch;