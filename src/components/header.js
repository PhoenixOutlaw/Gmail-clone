import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import TuneIcon from "@material-ui/icons/Tune";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AppsIcon from "@material-ui/icons/Apps";
import "./css/header.css";
import { Avatar, IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "../features/loginSlice";

export const Header = () => {
  const [hopt, sethopt] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="lefthead">
        <IconButton>
          {" "}
          <MenuIcon />{" "}
        </IconButton>
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
      </div>
      <div className="midhead">
        <div className="searchbar">
          <SearchIcon />
          <input type="text" />
          <ClearIcon />
          <TuneIcon />
        </div>
      </div>
      <div className="righthead">
        <HelpOutlineIcon />
        <SettingsIcon />
        <AppsIcon />
        <Avatar onClick={()=>sethopt(!hopt)}  id="avatar" />
  
        {hopt && 
        <div className="hopt">
            <Avatar style={{height:'70px',width:'70px'}}/>
            <h2>namemera</h2>
            <h3>blah blah @gmail.com</h3>
            <div className="lout">
            <button onClick={() => dispatch(logout())} >logout</button>
            </div>
            </div>}
      </div>
    </div>
  );
};
