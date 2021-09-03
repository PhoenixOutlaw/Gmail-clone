import React, { useState } from "react";
import { Leftbar } from "./Leftbar";
import "./css/leftbar.css";
import { Feed } from "./feed";
import { Compose } from "./compose";
export const Main = () => {

  const [compose, setcompose] = useState(false);
  
  return (
    <div className="main">
        <Leftbar onclick={()=>setcompose(true)}/>
        {compose && <Compose close={()=>setcompose(false)}/>}
        <Feed/>
      {/* 
            <Rightbar/> */}
    </div>
  );
};
