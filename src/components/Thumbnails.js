import {
    Link
  } from "react-router-dom";

  import db from '../db.json';

  function Thumbnails(){
      let tmb = [];
    for(let id in db){
        tmb.push(
            <a  key={id} href={"/watch?q="+id}>
                <div style={{border:"1px solid #ddd", padding:"10px"}}>
                {db[id].name}
                </div>
              </a>
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