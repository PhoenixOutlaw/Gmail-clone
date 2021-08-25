import React from "react";
import { Leftbar } from "./Leftbar";
import "./css/main.css";
export const Main = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <Leftbar />
      </div>
      {/* <Feed/>
            <Rightbar/> */}
    </div>
  );
};
