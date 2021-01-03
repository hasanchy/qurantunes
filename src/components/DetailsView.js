
  function DetailsView(props){

    const { playing, curTime, details } = props;


    if(curTime === 0 && !playing){
      return (
          <span style={{display:"inline-block",padding:"20px"}}>
              <div style={{fontSize:"30px", marginTop:"30px"}}>{details.title}</div>
              <div style={{fontSize:"20px", marginTop:"30px"}}>{details.description}</div>
              <div style={{fontSize:"14px", marginTop:"70px"}}>Reciter: {details.reciter}</div>
              {/* <div style={{fontSize:"12px", marginTop:"8px"}}>Translator: {details.translator}</div> */}
          </span>
      );
    }else{
      return(
        <></>
      )
    }
  }

  export default DetailsView;