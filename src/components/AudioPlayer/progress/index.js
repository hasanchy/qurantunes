import React, { Component } from 'react';
import ProgressBar from './bar';
import ProgressHandle from './handle';

class Progress extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status:true
        };
    }


    shouldComponentUpdate( nextProps, nextState ){
        return (this.state.status)?true:false;
	}

    renderInnerBars(){
        var innerBars = [];
        for(var i in this.props.positions){
            var colorIndex = parseInt(i,10)+1;
            innerBars.push(<div key={Math.random()} style={{position:"absolute",height:"100%",left:this.props.progress+"%",right:"0px",backgroundColor:this.props.color[colorIndex]}}></div>);
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

    handleDragStart = () =>{
        this.setState({
            status:false
        });
    }

    handleDragMove = (position) =>{
        console.log(position);
    }

    handleDragEnd = () =>{
        this.setState({
            status:true
        });
    }

    render() {
        console.log(this.props.sliderLength);
        return( <div>
            <ProgressBar
                progress={this.props.progress}
            />
            <ProgressHandle
                sliderLength={this.props.sliderLength}
                progress={this.props.progress}
                onDragStart={this.handleDragStart}
                onDragMove={this.handleDragMove}
                onDragEnd={this.handleDragEnd}
            />
        </div>)
    }
}

export default Progress;
