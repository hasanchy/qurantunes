
  function Bar(props){

    const { duration, curTime, progress, onTimeUpdate } = props;

    function calcClickedTime(e) {
        const clickPositionInPage = e.pageX;
        const bar = document.querySelector(".bar__progress");
        const barStart = bar.getBoundingClientRect().left + window.scrollX;
        const barWidth = bar.offsetWidth;
        const clickPositionInBar = clickPositionInPage - barStart;
        const timePerPixel = duration / barWidth;
        return timePerPixel * clickPositionInBar;
      }

      function handleTimeDrag(e) {
        onTimeUpdate(calcClickedTime(e));
    
        // const updateTimeOnMove = eMove => {
        //   onTimeUpdate(calcClickedTime(eMove));
        // };
    
        // document.addEventListener("mousemove", updateTimeOnMove);
    
        // document.addEventListener("mouseup", () => {
        //   document.removeEventListener("mousemove", updateTimeOnMove);
        // });
      }

    return (
        <div 
            className="bar__progress" style={{backgroundColor:"#FFFFFF",height:"8px",width:"100%",position:"relative",border:"0px solid #e6ebed", backgroundColor:'#CCCCCC', cursor:'pointer'}}
            onMouseDown={e => handleTimeDrag(e)}
        >
        <div key={Math.random()} style={{position:"absolute",height:"100%",width:progress+"%",backgroundColor:'#ff5722'}}></div>
    </div>
    );
  }

  export default Bar;