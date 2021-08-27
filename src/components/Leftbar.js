import React, { useState } from "react";
import { Avatar, Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import "./css/leftbar.css";
import { Sideicons } from "./sideicons";
import { ArrowDropDown, MessageOutlined } from "@material-ui/icons";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ChatIcon from '@material-ui/icons/Chat';
import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';
import SettingsIcon from '@material-ui/icons/Settings';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import PersonIcon from '@material-ui/icons/Person';


export const Leftbar = () => {
    const [more, setmore] = useState(false)
  return (
    <div className="side">
      <div className="top">
        <Button startIcon={<AddIcon />} className="new">
          compose
        </Button>
        <div className="standard">
          <Sideicons Icon={InboxIcon} title="Inbox" no="2,374" show={true} />
          <Sideicons Icon={StarIcon} title="Starred" no="2,374" />
          <Sideicons Icon={AccessTimeIcon} title="Snoozed" no="2,374" />
          <Sideicons Icon={SendIcon} title="Sent" no="2,374" />
          <Sideicons Icon={InsertDriveFileIcon} title="Drafts" no="2,374" />
          
          { (more ===false) && 
          <Sideicons Icon={ArrowDropDown} title="More" clicked={()=>setmore(true)} />
          }
          {more &&
           (
             <>
            <Sideicons Icon={LabelImportantIcon} title="Important"/>
            <Sideicons Icon={ChatIcon} title="Chats"/>
            <Sideicons Icon={CancelScheduleSendIcon} title="Schedualed"/>
            <Sideicons Icon={EmailIcon} title="All mails"/>
            <Sideicons Icon={InfoIcon} title="Spam"/>
            <Sideicons Icon={DeleteIcon} title="Trash"/>
            <Sideicons Icon={LabelIcon} title="categories"/>
            <Sideicons Icon={SettingsIcon} title="Manage labels"/>
            <Sideicons Icon={AddIcon} title="Create new label"/>
            <Sideicons Icon={ArrowDropUpIcon} title="Less" clicked={()=>setmore(false)}  />
             </>
           )
           }          
         
        </div>
      </div>

      <div className="mid">
        <h4>Meet</h4>
        <Sideicons Icon={VideocamIcon} title="New meeting"/>
        <Sideicons Icon={KeyboardIcon} title="Join a meeting"/>
      </div>
      <div className="submid">
      <h4>Hangouts</h4>
         <div className="meet">
         <div>
         <Avatar id="av"/>
         <p>harsh</p>
         </div>
         <IconButton id="bu"><AddIcon/> </IconButton>
         </div>

      </div>
      
      <div className="bottom">
        <img src="https://i.pinimg.com/736x/d1/35/7b/d1357b23fba8c39b5856243e31f9d670.jpg" alt="" />
        <p>No recent chats</p>
        <a href="">Start a new one</a>
      </div>
      <div className="footer">
       <div>
       <Button startIcon={<PersonIcon/>}></Button>
       <Button startIcon={<MessageOutlined/>}></Button>
       </div>
        
      </div>
    </div>
  );
};
