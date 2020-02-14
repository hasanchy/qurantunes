import React, { Component } from 'react';

class DisplayWindow extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount(){
  }

  componentWillReceiveProps(nextProps){
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  render(){

    for( var key in this.props.subTitle ){
      if( key <= this.props.currentTime ){
        var text = this.props.subTitle[key];
      }
    }

    return (
      <header className="App-header">
        <h1 className="App-title">{text}</h1>
      </header>
    )
  }
}

export default DisplayWindow;
