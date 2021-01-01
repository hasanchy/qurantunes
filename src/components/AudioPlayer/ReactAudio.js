import React, { Component } from 'react';

class ReactAudio extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.begin( this.props.play )

    if( this.props.mute === true ){
      this.mute()
    }
  }

  componentWillReceiveProps(nextProps){
    if( nextProps.play === true ){
      if( this.audioElement.ended === true || this.audioElement.currentTime >= this.props.endTime ){
        this.begin( true );
      }else {
        this.play();
      }

    }

    if( nextProps.mute === true ){
      this.mute();
    }else {
      this.unmute();
    }

    if( this.props.volume !== nextProps.volume ){
      this.setVolume( nextProps.volume );
    }

    if( this.props.seekedTime !== nextProps.seekedTime ){
      this.setCurrentTime(nextProps.seekedTime)
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    return false;
  }


  play(){
    this.audioElement.play();
    this.setListenTrack();
  }

  begin( play ){
    this.setCurrentTime( this.props.startTime );
    this.setVolume( this.props.volume )
    if( play === true){
        this.play();
    }
  }

  pause(){
    this.audioElement.pause();
    this.clearListenTrack();
    this.props.onPause();
  }

  mute(){
    this.audioElement.muted=true;
  }

  unmute(){
    this.audioElement.muted=false;
  }

  setVolume( volume ){
    this.audioElement.volume= (volume/100);
  }

  setCurrentTime( time ){
    this.audioElement.currentTime=time;
  }

  onListen(){

    if( this.props.play === false ){
      this.pause();
    }
    if( this.audioElement.ended === true || this.audioElement.currentTime >= this.props.endTime ){
      if( this.props.replay === true ){
        this.begin();
      }else{
        this.pause();
      }
    }

    this.props.onListen( this.audioElement.currentTime );

  }

  setListenTrack() {
    if (!this.listenTracker) {
      this.listenTracker = setInterval(() => {
        this.onListen();
      }, 10);
    }
  }


  clearListenTrack() {
    if (this.listenTracker) {
      clearInterval(this.listenTracker);
      this.listenTracker = null;
    }
  }

  render() {
    return (
      <audio
        ref={(audioElement) => { this.audioElement = audioElement; }}
        src={this.props.src}
      >
      </audio>
    );
  }
}

export default ReactAudio;
