import React, { Component } from 'react';
import './AudioPlayer.css';
import ProgressBar from './ProgressBar';
import SliderHandles from './SliderHandles';

class AudioPlayer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            sliderLength:0
        }
    }
    
    componentDidMount(){
        let element = document.getElementById("player-progressbar-container");
        let sliderLength = element.clientWidth;

        this.setSliderLength(sliderLength);
        let that = this;
        window.addEventListener('resize', function(e) {
            let element = document.getElementById("player-progressbar-container");
            let sliderLength = element.clientWidth;
            that.setSliderLength(sliderLength);
        }, false);
    }
    
    setSliderLength(sliderLength){
        this.setState({
            sliderLength:sliderLength
        });
    }
    
    handleOnLoad(index, value, position){
        
    }
    
    handleDragStart( index, value, position ){
        
    }

    handleDrag( index, value, position ){
        
    }

    handleDragEnd(index, value, position){
        
    }
    
    render(){
        let barPositions = [300];
        let colors = ['#20907D', '#CCCCCC'];
        let sliderLength = 500;
        let i = 0;
        let zIndex = 100;
        let value = 50;
        let valueMin = 0;
        let valueMax = 100;
        let rangeMin = 0;
        let rangeMax = 100;
        return(
            <div className="player-container">
                <div className="player-content-container">
                </div>
                <div className="player-progressbar-container" id="player-progressbar-container">
                    <ProgressBar 
                        positions={barPositions} 
                        color={colors} 
                    />
                    <SliderHandles 
                        type="default"
                        sliderLength={this.state.sliderLength} 
                        index={i} 
                        zIndex={zIndex} 
                        value={value} 
                        valueMin={valueMin}
                        valueMax={valueMax} 
                        rangeMin={rangeMin} 
                        rangeMax={rangeMax} 
                        onLoad={this.handleOnLoad.bind(this)} 
                        onDragStart={this.handleDragStart.bind(this)} 
                        onDrag={this.handleDrag.bind(this)} 
                        onDragEnd={this.handleDragEnd.bind(this)}/>
                </div>
                <div className="player-buttons-container">
                </div>
            </div>
        );
    }
}

export default AudioPlayer;