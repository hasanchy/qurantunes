import React, { Component } from 'react';

class EndBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){}

  render() {

    var width = Math.floor( (( this.props.duration - this.props.endTime )/this.props.duration) * 100 );

    return (
      <div id="endBar" style={{width:width+"%",height:"10px",float:"right",backgroundColor:"#ddd"}}>
        <i className="fa fa-long-arrow-up fa-lg" style={{cursor:"col-resize", color: "red", float: "left", marginLeft: "-4px", marginTop:"-11px"}}></i>
      </div>
    )
  }
}

export default EndBar;
