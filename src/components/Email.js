import React, { useEffect, useState } from "react";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { Checkbox } from "@material-ui/core";
import { StarBorderOutlined } from "@material-ui/icons";
import "./css/email.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedmail } from "../features/mailSlice";


export const Email = ({to , sub , message ,time}) => {

  const dispatch = useDispatch();
   const [mover, setmover] = useState(false)
   const history = useHistory(); 
 
   
   const selected =()=>{
     
     dispatch(selectedmail({
       to,sub,message,time,
      }));
      history.push("/m");
    }
    
    
  return (
    <div className="mail" onMouseEnter={()=>setmover(true)}onMouseLeave={()=>setmover(false)} >
      <div className="left">
        {mover && 
        <DragIndicatorIcon style={{ marginLeft:"-10px", position:"absolute", color: "gray", opacity: "20%" }} />
        }
        <Checkbox />
        <StarBorderOutlined />
        <p onClick={selected} >{to}</p>
      </div>
      <div className="di" onClick={selected}>
        <div >
        <p> {`${sub}  - `}</p> 
        <p id="desc">{` ${message}`}</p>
        </div>
      </div>

      <div className='tym'>
        <p>{time}</p>
      </div>
    </div>
  );
};
