import React, { Component } from 'react';

class VolumeRange extends Component {

  constructor(props) {
    super(props);
    this.state = {
      volume:this.props.volume
    };
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
    /*if( nextProps.volume !== this.props.volume)
      return true;
    else
      return false;*/
  }

  changeVolume( e ){
    var volume = e.target.value;
    if( volume === "0" ){
      this.props.onVolumeOff( this.state.volume )
    }else {
      this.props.onChange( volume )
    }

  }

  handleMouseDown(){
    this.setState({
      volume:this.props.volume
    });
  }

  render() {
    var value = ( this.props.mute === true ) ? 0 : this.props.volume;
    return (
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={this.changeVolume.bind(this)}
        onMouseDown={this.handleMouseDown.bind(this)}
      />
    )
  }
}

export default VolumeRange;
