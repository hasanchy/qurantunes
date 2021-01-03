import {
    Link
  } from "react-router-dom";

  import db from '../db.json';

  function Thumbnails(){
      let tmb = [];
    for(let id in db){
        tmb.push(
          <div style={{float:'left', marginRight:'20px'}}>
            <a  key={id} href={"/watch?q="+id}>
                <div style={{border:"1px solid #ddd", padding:"10px"}}>
                <img src={"/image/thumbnails/"+id+".png"} height="150px"/>
                </div>
              </a>
          </div>
        )
        }

    return (
      <div>
        <div>
            
              {tmb}
        </div>
      </div>
    );
  }

  export default Thumbnails;