import React, { Component } from 'react';

class CenterBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){}

  onProgressBarClick( e ){
    var barWidth = this.myProgress.offsetWidth;
    var seekedWidth = e.pageX - this.myProgress.offsetLeft;

    var seekedTime = this.props.startTime + ( ( this.props.endTime - this.props.startTime) * ( seekedWidth/barWidth ) );
    this.props.onSeeked( seekedTime );
  }

  render() {

    var playDuration = this.props.endTime - this.props.startTime;
    var width1 = Math.round( (playDuration/this.props.duration) * 100 )

    var width2 = ( ( this.props.currentTime - this.props.startTime) / playDuration ) * 100;

    return (
      <div id="centerBar" ref={(myProgress) => { this.myProgress = myProgress; }} style={{width:width1+"%",backgroundColor:"#999", cursor:"pointer", float:"left"}} onClick={this.onProgressBarClick.bind(this)}>
        <div style={{width:width2+"%", height:"10px", backgroundColor:"#009be3"}}></div>
      </div>
    )
  }
}

export default CenterBar;
