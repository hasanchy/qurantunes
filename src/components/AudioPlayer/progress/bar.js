import React, { Component } from 'react';
//import SliderBar from './SliderBar';

class ProgressBar extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    shouldComponentUpdate( nextProps, nextState ){
        return true;
		//return ( JSON.stringify(this.props) !== JSON.stringify(nextProps) ) ? true : false;
	}

    render() {
        return (
            <div style={{backgroundColor:"#FFFFFF",height:"8px",width:"100%",position:"relative",border:"0px solid #e6ebed", backgroundColor:'#CCCCCC'}}>
                <div key={Math.random()} style={{position:"absolute",height:"100%",width:this.props.progress+"%",backgroundColor:'#ff5722'}}></div>
            </div>
        )
    }
}

export default ProgressBar;
