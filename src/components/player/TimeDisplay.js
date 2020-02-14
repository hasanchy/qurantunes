import React, { Component } from 'react';

class TimeDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime:0,
      durationTime:0
    };
  }

  componentWillMount(){
    this.setState({
      currentTime: Math.floor( this.props.currentTime ),
      durationTime: this.secondToTime( Math.floor( this.props.duration ) )
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      currentTime: Math.floor( this.props.currentTime )
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    if( this.state.currentTime !== nextState.currentTime )
      return true;
    else
      return false;
  }

  secondToTime( time ) {
    // Hours, minutes and seconds
    var hrs = Math.floor(time / 3600);
    var mins = Math.floor((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

  render(){
    return (
      <div>
        {this.secondToTime(this.state.currentTime)} / {this.state.durationTime}
      </div>
    )
  }
}

export default TimeDisplay;
