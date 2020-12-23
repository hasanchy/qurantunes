import React, { Component } from 'react';
import './AudioPlayer.css';
import ProgressBar from './ProgressBar';
import SliderHandles from './SliderHandles';
import ReactAudio from './ReactAudio';
import PlayButton from './PlayButton';

class AudioPlayer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            sliderLength:0,
            barPosition:0,
            source: "audio/001.mp3",
            duration: 51.9,
            startTime: 0,
            endTime: 51.9,
            currentTime: 0,
            seekedTime: 0,
            play: false,
            replay: true,
            mute: false,
            volume: 50,
            subTitle: {
                0:"আমি বিতাড়িত শয়তান থেকে আল্লাহর নিকট আশ্রয় প্রার্থনা করছি।",
                6:"শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।",
                12:"১. যাবতীয় প্রশংসা আল্লাহ তাআলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।",
                18:"২. যিনি নিতান্ত মেহেরবান ও দয়ালু।",
                22:"৩. যিনি বিচার দিনের মালিক।",
                27:"৪. আমরা একমাত্র তোমারই ইবাদত করি এবং শুধুমাত্র তোমারই সাহায্য প্রার্থনা করি।",
                33:"৫. আমাদেরকে সরল পথ দেখাও,",
                39:"৬. সে সমস্ত লোকের পথ, যাদেরকে তুমি নেয়ামত দান করেছ। তাদের পথ নয়, যাদের প্রতি তোমার গজব নাযিল হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।"
            }
        }
    }
    
    componentDidMount(){
        let element = document.getElementById("player-progressbar-container");
        let sliderLength = element.clientWidth;

        this.setSliderLength(sliderLength);
        let that = this;
        window.addEventListener('resize', function(e) {
            let element = document.getElementById("player-progressbar-container");
            let sliderLength = element.clientWidth;
            that.setSliderLength(sliderLength);
        }, false);
    }
    
    setSliderLength(sliderLength){
        this.setState({
            sliderLength:sliderLength
        });
    }
    
    handleOnLoad(index, value, position){
        
    }
    
    handleDragStart( index, value, position ){
        // console.log(position);
    }

    handleDragMove( index, value, position ){
        this.setState({
            barPosition:position
        });
        console.log(value);
    }

    handleDragEnd(index, value, position){
        // console.log(position);
    }

    pauseAudio(){
        this.setState({
          play:false
        })
      }

      onListen( currentTime ){
        this.setState({
          currentTime:currentTime
        });
      }

      playAudio(){
        this.setState({
          play:true
        })
      }
    
    render(){
        let barPositions = [this.state.barPosition];
        let colors = ['#ff5722', '#CCCCCC'];
        let sliderLength = 500;
        let i = 0;
        let zIndex = 100;
        let value = 50;
        let valueMin = 0;
        let valueMax = 100;
        let rangeMin = 0;
        let rangeMax = 100;
        return(
            <div className="player-container">
                <div className="player-content-container">
                    Hello world
                </div>
                <div className="player-progressbar-container" id="player-progressbar-container">
                    <ProgressBar 
                        positions={barPositions} 
                        color={colors} 
                    />
                    <SliderHandles 
                        type="default"
                        sliderLength={this.state.sliderLength} 
                        index={i} 
                        zIndex={zIndex} 
                        value={value} 
                        valueMin={valueMin}
                        valueMax={valueMax} 
                        rangeMin={rangeMin} 
                        rangeMax={rangeMax} 
                        onLoad={this.handleOnLoad.bind(this)} 
                        onDragStart={this.handleDragStart.bind(this)} 
                        onDragMove={this.handleDragMove.bind(this)} 
                        onDragEnd={this.handleDragEnd.bind(this)}/>
                    <ReactAudio
                        src={this.state.source}
                        startTime={this.state.startTime}
                        endTime={this.state.endTime}
                        seekedTime={this.state.seekedTime}
                        play={this.state.play}
                        replay={this.state.replay}
                        volume={this.state.volume}
                        mute={this.state.mute}
                        onPause={this.pauseAudio.bind(this)}
                        onListen={this.onListen.bind(this)}
                    />
                </div>
                <div className="player-buttons-container">
                <PlayButton
              play={this.state.play}
              onPlay={this.playAudio.bind(this)}
              onPause={this.pauseAudio.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default AudioPlayer;