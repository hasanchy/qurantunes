import React, { Component } from 'react';

class PlayButton extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState){
    if( nextProps.play !== this.props.play)
      return true;
    else
      return false;
  }

  renderPlayButton(){
    return (
      <button style={{cursor:"pointer"}} onClick={this.props.onPlay}>
        <i className="fa fa-play" style={{color: "#009be3"}}></i>
      </button>
    )
  }

  renderPauseButton(){
    return (
      <button style={{cursor:"pointer"}} onClick={this.props.onPause}>
        <i className="fa fa-pause" style={{color: "#009be3"}}></i>
      </button>
    )
  }

  render() {
    var button = ( this.props.play === true ) ? this.renderPauseButton() : this.renderPlayButton();
    return (
      button
    )
  }
}

export default PlayButton;
