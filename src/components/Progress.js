
  function Progress(){

    return (
        <div style={{backgroundColor:"#FFFFFF",height:"8px",width:"100%",position:"relative",border:"0px solid #e6ebed", backgroundColor:'#CCCCCC'}}>
        <div key={Math.random()} style={{position:"absolute",height:"100%",width:"50%",backgroundColor:'#ff5722'}}></div>
    </div>
    );
  }

  export default Progress;