import React, { useState } from "react";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { Checkbox } from "@material-ui/core";
import { StarBorderOutlined } from "@material-ui/icons";
import "./css/email.css";
import { useHistory } from "react-router-dom";
let sub="A New Scooter Everyday!";
let desc="Laboris sint pariatur proident in Lorem do laborum esse in ullamco commodo officia ex elit. Nisi Lorem et ex commodo esse magna nostrud. Reprehenderit minim ullamco occaecat aliquip aliqua mollit laboris incididunt mollit fugiat.";


export const Email = () => {
   const [mover, setmover] = useState(false)
  
     const history = useHistory(); 
  
  return (
    <div className="mail" onMouseEnter={()=>setmover(true)}onMouseLeave={()=>setmover(false)} >
      <div className="left">
        {mover && 
        <DragIndicatorIcon style={{ marginLeft:"-10px", position:"absolute", color: "gray", opacity: "20%" }} />
        }
        <Checkbox />
        <StarBorderOutlined />
        <p>senderr</p>
      </div>
      <div className="di" onClick={ ()=>history.push("/m")}>
        <div >
        <p> {`${sub}  - `}</p> 
        <p id="desc">{` ${desc}`}</p>
        </div>
      </div>

      <div className='tym'>
        <p>Aug 12</p>
      </div>
    </div>
  );
};
