import React from "react";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { Checkbox } from "@material-ui/core";
import { StarBorderOutlined } from "@material-ui/icons";
import "./css/email.css";
let sub="A New Scooter Everyday!";
let desc="Laboris sint pariatur proident in Lorem do laborum esse in ullamco commodo officia ex elit. Nisi Lorem et ex commodo esse magna nostrud. Reprehenderit minim ullamco occaecat aliquip aliqua mollit laboris incididunt mollit fugiat.";
export const Email = () => {
  return (
    <div className="mail">
      <div className="left">
        <DragIndicatorIcon style={{ color: "gray", opacity: "20%" }} />
        <Checkbox />
        <StarBorderOutlined />
        <p>senderr</p>
      </div>
      <div className="di">
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
