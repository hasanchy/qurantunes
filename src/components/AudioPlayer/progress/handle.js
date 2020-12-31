import React, { Component } from 'react';

class ProgressHandle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position:0,
            positionMin:0,
            positionMax:this.props.sliderLength,
            sliderLength:this.props.sliderLength,
            drag:false,
            pageX:0,
        };
    }
    
    componentDidMount(){
        let that = this;
        document.getElementById( 'handle' ).addEventListener('mousedown', function(e) {
            e.preventDefault();
            that.handleDragStart(e);
        }, false);

        document.addEventListener('mousemove', function(e) {
            e.preventDefault();
            that.handleDragMove(e);
        }, false);

        document.addEventListener('mouseup', function(e) {
            e.preventDefault();
            that.handleDragEnd(e);
        }, false);


        document.getElementById( 'handle' ).addEventListener('touchstart', function(e) {
            e.preventDefault();
            that.handleDragStart(e);
        }, false);

        document.getElementById( 'handle' ).addEventListener('touchmove', function(e) {
            e.preventDefault();
            that.handleDragMove(e);
        }, false);

        document.getElementById( 'handle' ).addEventListener('touchend', function(e) {
            e.preventDefault();
            that.handleDragEnd(e);
        }, false);

        //this.props.onLoad(this.props.index, this.state.value, this.state.position)
    }
    
    shouldComponentUpdate( nextProps, nextState ){
		let shallComponentUpdate = ( JSON.stringify(this.state) !== JSON.stringify(nextState) || JSON.stringify(this.props) !== JSON.stringify(nextProps) ) ? true : false;
        if(this.props.sliderLength !== nextProps.sliderLength){
            this.setState({
                sliderLength:nextProps.sliderLength
            })
        }
        
        return shallComponentUpdate;
    }
    
    
    handleDragStart(e){
        var pageX = this.getPageX(e);
        
        this.setState({
            drag:true,
            pageX:pageX
        });
        this.props.onDragStart(pageX);
        // this.props.onDragStart(this.props.index, this.state.value, this.state.position)
    }
    
    handleDragMove(e){
        if(this.state.drag){
            var pageX = this.getPageX(e);
            var newPosition = this.state.position + (pageX - this.state.pageX);

            if( newPosition <= this.state.positionMin ){
                pageX = pageX + (this.state.positionMin - newPosition);
                newPosition = this.state.positionMin;
            }else if( newPosition >= this.state.positionMax ){
                pageX = pageX - (newPosition - this.state.positionMax);
                newPosition = this.state.positionMax;
            }
            //var newValue = this.getValue(newPosition);

            this.setState({
                pageX:pageX,
                position: newPosition,
                positionMax:this.props.sliderLength
            });
            this.props.onDragMove(newPosition)

            // this.props.onDragMove(this.props.index, this.state.value, newPosition)
        }
    }

    handleDragEnd(e){
        if(this.state.drag){
            var position = this.getPosition(this.state.value);
            this.setState({
                drag:false,
                position:position
            });
            this.props.onDragEnd();
            // this.props.onDragEnd(this.props.index, this.state.value, this.state.position);
        }
    }
    
    getPageX( e ){
        var pageX;

        if(e.touches){
            pageX = e.touches[0].clientX;
        }else{
            pageX = e.pageX || e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        }

        return pageX;
    }
    
    getPosition(value){
        var min = 0;
        var max = 100;
        var sliderLength = parseInt(this.props.sliderLength, 10);
        return ( (value-min) / (max-min) ) * sliderLength;
    }
    
    renderCircle(){
        return <div id="handle" style={{cursor:"pointer",width:"20px",height:"20px",backgroundColor:"#ff5722",borderRadius:"50%",position:"absolute",top:"-15px",marginLeft:"-11px",opacity:"1",transform:"scale(1)",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            {/* <div style={{borderRadius:"50%",backgroundColor:"#ff5722",width:"14px",height:"14px",top:"7px",left:"7px",position:"absolute"}}></div> */}
        </div>
    }
    
    renderHandles(){
        let left=(this.state.drag)?this.state.position:this.props.progress+'%';
        return (
            <div style={{position:"absolute",left:left,zIndex:"100"}}>
                {this.renderCircle()}
            </div>
        )
    }
    
    render() {
        return this.renderHandles();
    }
}

export default ProgressHandle;
