
  function Subtitle(props){

    const { duration, curTime, text } = props;

    let sa, en;
    for( var t in text ){
      if( t <= curTime ){
        sa = text[t].sa;
        en = text[t].en;
      }
    }


    console.log(text);
    return (
        <span style={{display:"inline-block",padding:"20px"}}>
            <div style={{fontSize:"30px", marginTop:"30px"}}>{sa}</div>
            <div  style={{fontSize:"22px", marginTop:"30px"}}>{en}</div>
        </span>
    );
  }

  export default Subtitle;