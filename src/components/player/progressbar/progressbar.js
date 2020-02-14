import React, { Component } from 'react';
import StartBar from './startbar';
import CenterBar from './centerbar';
import EndBar from './endbar';

class ProgressBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startBarDrag:0,
      startTime:this.props.startTime
    };
  }

  componentWillMount(){

    var startBarWidth = ( (this.props.startTime/this.props.duration) * 100 );
    var centerBarWidth = ( ( (this.props.endTime - this.props.startTime)/this.props.duration ) * 100 );
    var endBarWidth = ( 100 - startBarWidth - centerBarWidth );

    this.setState({
      startBarWidth:startBarWidth,
      centerBarWidth:centerBarWidth,
      endBarWidth:endBarWidth
    })
    //var centerBarPercentage = (this.props.endTime - this.props.startTime)/this.props.duration;
  }

  componentWillReceiveProps( nextProps ){
    this.setState({
      startTime:nextProps.startTime
    });
  }
  handleStartTimeChange( time ){
    this.props.onStartBarDrag( time )
  }

  render() {

    //var startBarPercentage = ( (this.props.startTime/this.props.duration) * 100 ).toFixed(3);
    //var centerBarPercentage = ( ( (this.props.endTime - this.props.startTime)/this.props.duration ) * 100 ).toFixed(3);
    //var endBarPercentage = ( 100 - startBarPercentage - centerBarPercentage ).toFixed(3);


    return (
      <div style={{width:"100%"}} id="progressBar">
        <StartBar startTime={this.props.startTime} duration={this.props.duration} onStartTimeDrag={this.handleStartTimeChange.bind(this)}/>
        <CenterBar startBarDrag={this.state.startBarDrag} currentTime={this.props.currentTime} startTime={this.props.startTime} endTime={this.props.endTime} duration={this.props.duration} onSeeked={this.props.onSeeked}/>
        <EndBar endTime={this.props.endTime} duration={this.props.duration}/>
      </div>
    )
  }
}

export default ProgressBar;
