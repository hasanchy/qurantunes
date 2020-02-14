import React, { Component } from 'react';

class MuteButton extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState){
    if( nextProps.mute !== this.props.mute )
      return true;
    else
      return false;
  }

  renderMuteButton(){
    return (
      <button style={{cursor:"pointer"}} onClick={this.props.onUnmute}>
        <i className="fa fa-volume-off" style={{color: "#009be3"}}></i>
      </button>
    )
  }

  renderUnmuteButton(){
    return (
      <button style={{cursor:"pointer"}} onClick={this.props.onMute}>
        <i className="fa fa-volume-up" style={{color: "#009be3"}}></i>
      </button>
    )
  }

  render() {
    var button = ( this.props.mute === true ) ? this.renderMuteButton() : this.renderUnmuteButton();
    return (
      button
    )
  }
}

export default MuteButton;
