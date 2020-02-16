import React, { Component } from 'react';
import './ReactAudioPlayer.css';
import './fa/font-awesome.min.css';
import ReactAudio from './ReactAudio';
import ProgressBar from './components/player/progressbar/progressbar';
import PlayButton from './components/player/PlayButton';
import ReplayButton from './components/player/ReplayButton';
import MuteButton from './components/player/MuteButton';
import VolumeRange from './components/player/VolumeRange';
import TimeDisplay from './components/player/TimeDisplay';
import DisplayWindow from './components/player/DisplayWindow';

class ReactAudioPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
    };
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

  pauseAudio(){
    this.setState({
      play:false
    })
  }

  enableReplay(){
    this.setState({
      replay:true
    })
  }

  disableReplay(){
    this.setState({
      replay:false
    })
  }

  muteAudio(){
    this.setState({
      mute:true
    })
  }

  onSeeked( time ){
    this.setState({
      seekedTime:time,
      currentTime:time
    })
  }

  handleStartBarDrag( time ){
    this.setState({
      startTime:time,
      seekedTime:time,
      currentTime:time
    })
  }

  volumeOff(volume){
    this.setState({
      volume:volume,
      mute:true
    })
  }

  unmuteAudio(){
    this.setState({
      mute:false
    })
  }

  changeVolume( volume ){
    this.setState({
      volume:volume,
      mute:false
    })
  }

  onCanPlayThrough(e){
    console.log( "onCanPlayThrough" );
  }

  render() {
    return (
      <div style={{ border: "1px solid #009be3"}}>
        <div>
          <DisplayWindow
            currentTime={this.state.currentTime}
            subTitle={this.state.subTitle}
            />
        </div>
        <div>
          <ProgressBar
            duration={this.state.duration}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            currentTime={this.state.currentTime}
            onSeeked={this.onSeeked.bind(this)}
            onStartBarDrag={this.handleStartBarDrag.bind(this)}
            />
        </div>
        <div style={{width: "100%",backgroundColor:"#eee",clear: "both"}}>
          <div style={{width:"50px", float:"left"}}>
            <PlayButton
              play={this.state.play}
              onPlay={this.playAudio.bind(this)}
              onPause={this.pauseAudio.bind(this)}/>
          </div>
          <div style={{width:"50px", float:"left"}}>
            <ReplayButton
              replay={this.state.replay}
              onEnable={this.enableReplay.bind(this)}
              onDisable={this.disableReplay.bind(this)}/>
          </div>
          <div style={{width:"50px", float:"left"}}>
            <MuteButton
              mute={this.state.mute}
              volume={this.state.volume}
              onMute={this.muteAudio.bind(this)}
              onUnmute={this.unmuteAudio.bind(this)}/>
          </div>
          <div style={{width:"100px", float:"left"}}>
            <VolumeRange
              volume={this.state.volume}
              mute={this.state.mute}
              onVolumeOff={this.volumeOff.bind(this)}
              onChange={this.changeVolume.bind(this)}/>
          </div>
          <div style={{width:"100px", float:"right"}}>
            <TimeDisplay
              duration={this.state.duration}
              currentTime={this.state.currentTime}/>
          </div>
        </div>
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
    );
  }
}

ReactAudioPlayer.defaultProps = {
};

export default ReactAudioPlayer;
