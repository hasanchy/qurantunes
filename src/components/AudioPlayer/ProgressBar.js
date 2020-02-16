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

    renderInnerBars(){
        var innerBars = [];
        for(var i in this.props.positions){
            var colorIndex = parseInt(i,10)+1;
            innerBars.push(<div key={Math.random()} style={{position:"absolute",height:"100%",left:this.props.positions[i],right:"0px",backgroundColor:this.props.color[colorIndex]}}></div>);
        }
        return innerBars;
    }

    renderDefaultBar(){
        return <div style={{position:"absolute",height:"100%",left:"0px",right:"0px",backgroundColor:this.props.color[0]}}></div>
    }

    renderBars(){
        return (
            <div style={{backgroundColor:"#FFFFFF",height:"8px",width:"100%",position:"relative",border:"0px solid #e6ebed"}}>
                {this.renderDefaultBar()}
                {this.renderInnerBars()}
            </div>
        )
    }

    render() {
        return this.renderBars();
    }
}

export default ProgressBar;
