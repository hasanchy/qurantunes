import React, { Component } from 'react';

class ReplayButton extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState){
    if( nextProps.replay !== this.props.replay )
      return true;
    else
      return false;
  }

  renderReplayActiveButton(){
    return (
      <button style={{cursor:"pointer"}} onClick={this.props.onDisable}>
        <i className="fa fa-refresh" style={{color: "#009be3"}}></i>
      </button>
    )
  }

  renderReplayInActiveButton(){
    return (
      <button style={{cursor:"pointer"}} onClick={this.props.onEnable}>
        <i className="fa fa-refresh" style={{color: "#ccc"}}></i>
      </button>
    )
  }

  render() {
    var button = ( this.props.replay === true ) ? this.renderReplayActiveButton() : this.renderReplayInActiveButton();
    return (
      button
    )
  }
}

export default ReplayButton;
