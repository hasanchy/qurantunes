import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

// React Router does not have any opinions about
// how you should parse URL query strings.
//
// If you use simple key=value query strings and
// you do not need to support IE 11, you can use
// the browser's built-in URLSearchParams API.
//
// If your query strings contain array or object
// syntax, you'll probably need to bring your own
// query parsing function.

export default function QueryParamsExample() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
  let query = useQuery();

  return (
    <div  style={{padding:"30px"}}>
      <Watch q={query.get("q")} />
      <Thumbnails/>
    </div>
  );
}

function Watch({ q }) {
  let audio = new Audio("/audio/067.mp3");
  if(q){
    audio.play();
  }
  
  return (
    <>
      {q ? (
        <div style={{backgroundColor:"#000", color:"#fff", height:"300px", padding:"10px"}}>
        <h3>
          The <code>name</code> in the query string is &quot;{q}
          &quot;
        </h3>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

function Thumbnails() {
  return (
    <div>
      <div>
            <Link to="/watch?q=65h4pdw6Bkc">
              <div style={{border:"1px solid #ddd", padding:"10px"}}>
              021 - Surah Anbiya
              </div>
            </Link>
          
          
            <Link to="/watch?q=4AQR4a9ZZ0I">
            <div style={{border:"1px solid #ddd", padding:"10px"}}>
              067 - Surah Mulk
              </div>
              </Link>
          
          
            <Link to="/watch?q=EBec5wKMu58">
            <div style={{border:"1px solid #ddd", padding:"10px"}}>
              072 - Surah Jinn
              </div>
              </Link>
          
          
            <Link to="/watch?q=4pfbNgkfPtM">
            <div style={{border:"1px solid #ddd", padding:"10px"}}>
              002 - Surah Baqarah
              </div>
              </Link>
      </div>
    </div>
  );
}