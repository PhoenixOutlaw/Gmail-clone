import React from "react";
import { Leftbar } from "./Leftbar";
import "./css/leftbar.css";
import { Feed } from "./feed";
export const Main = () => {
  return (
    <div className="main">
        <Leftbar />
      {/* 
         <Feed/>
            <Rightbar/> */}
    </div>
  );
};
