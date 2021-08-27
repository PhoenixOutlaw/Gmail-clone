import React from "react";
import "./css/feedicon.css";

export const Feedicon = ({ Icon, title, color ,click,on}) => {
  
    { on ? (color = color) :(color = "gray") }


  return (
    <div className={`feedicon ${on===false && "feedinactive"}`} style={{ color: color }} onClick={click}>
      <div>
      {Icon && <Icon style={{ Color: color }} />}
      {title && <p>{title}</p>}
      </div>
    </div>

  );
};
