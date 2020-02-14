import React, { Component } from 'react';

class StartBar extends Component {

  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.state = {
      isDragReady:false,
      startTime: this.props.startTime
    };
  }

  componentDidMount(){
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    document.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  shouldComponentUpdate(nextProps, nextState){
    if( nextProps.startTime !== this.props.startTime )
      return true;
    else
      return false;
  }

  handleMouseDown( e ){
    var pageX = e.pageX || e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    //console.log( "mouse down = " + pageX )
    this.setState({
      isDragReady:true,
      pageX: pageX,
      startBaroffsetWidth:this.startbarElement.offsetWidth,
      centerBarOffsetWidth:document.getElementById('centerBar').offsetWidth
    })
  }

  handleMouseUp(e){

    if( this.state.isDragReady === true ){
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);


      var pageX = e.pageX || e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
      var diff = pageX - this.state.pageX;
      var width1 = this.state.startBaroffsetWidth + diff;

      var newTime = this.state.startTime * (width1/this.state.startBaroffsetWidth);
      this.props.onStartTimeDrag( newTime )


      this.setState({isDragReady:false})
    }
  }

  handleMouseMove( e ){
    if( this.state.isDragReady === true ){
      var pageX = e.pageX || e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);

      //var startTime = ( pageX * this.state.startTime ) / this.state.pageX;

      var diff = pageX - this.state.pageX;
      var width1 = this.state.startBaroffsetWidth + diff;
      var width2 = this.state.centerBarOffsetWidth - diff;
      var width3 = document.getElementById('progressBar').offsetWidth - width1 - width2;

      //var newTime = this.state.startTime * (width1/this.state.startBaroffsetWidth);
      //this.props.onStartTimeDrag( newTime )
      this.startbarElement.style.width = width1 + "px";
      document.getElementById('centerBar').style.width = width2 + "px";
      document.getElementById('endBar').style.width = width3 + "px";
      //console.log( this.startbarElement.offsetWidth )
    }
  }

  render() {
    //console.log( "rendering start bar = " + this.props.startTime );
    var width = Math.round( (this.props.startTime/this.props.duration) * 100 );

    return (
      <div ref={(startbarElement) => { this.startbarElement = startbarElement; }} style={{width:width+"%",height:"10px",float:"left",backgroundColor:"#ddd"}}>
        <i onMouseDown={this.handleMouseDown} className="fa fa-long-arrow-up fa-lg" style={{cursor:"col-resize", color: "red", float: "right", marginRight: "-4px", marginTop:"-11px"}}></i>
      </div>
    )
  }
}

export default StartBar;
