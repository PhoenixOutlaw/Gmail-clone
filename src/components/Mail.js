import React, { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./css/feed.css";
import {  Avatar, Button, IconButton, Menu } from "@material-ui/core";
//
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import InfoIcon from "@material-ui/icons/Info";
import DeleteIcon from "@material-ui/icons/Delete";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AlarmAddIcon from "@material-ui/icons/AlarmAdd";
import FolderIcon from "@material-ui/icons/Folder";
import LabelIcon from "@material-ui/icons/Label";
import { useHistory } from "react-router-dom";
import PrintIcon from '@material-ui/icons/Print';
import LaunchIcon from '@material-ui/icons/Launch';
import { ArrowDropDown, ArrowDropUp, Forward, Star } from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import ReplyIcon from '@material-ui/icons/Reply';


let n = 11,
  o = "12,393";
export const Mail = () => {
    const [detail, setdetail] = useState(false)
    const history=useHistory();
    
    return (
       
        <div className="feed" >
        <div className="feedheader">
          <div className="feedheaderleft">
            <IconButton onClick={ () => history.push("/")}>
              <ArrowBackIcon className="bt" />
              
            </IconButton>
            <div className="mr1">
              <IconButton>
                <ArchiveIcon className="bt" />
              </IconButton>
              <IconButton>
                <InfoIcon className="bt" />
              </IconButton>
              <IconButton>
                <DeleteIcon className="bt" />
              </IconButton>
            </div>
            <div className="mr2">
              <IconButton>
                <MailOutlineIcon className="bt" />
              </IconButton>
              <IconButton>
                <QueryBuilderIcon className="bt" />
              </IconButton>
              <IconButton>
                <AlarmAddIcon className="bt" />
              </IconButton>
            </div>
            <div className="mr3">
            <IconButton>
              <FolderIcon className="bt" />
            </IconButton>
            <IconButton>
              <LabelIcon className="bt" />
            </IconButton>
            <IconButton>
              <MoreVertIcon className="bt" />
            </IconButton>
            </div>

          </div>

          <div className="feedheaderright">
            <p>
              {n}-50 of {o}
            </p>
            <ArrowBackIosIcon />
            <ArrowForwardIosIcon />
          </div>
        </div >
        <div className="ml">
            <div className="mlhead">
                <div id="sub">
                    <h4>Your Amazon.in order #171-9840650-1818769 of 1 item has been dispatched</h4>
                </div>
                <div id="mopt">
                    <PrintIcon className="bt"/>
                    <LaunchIcon className="bt"/>
                </div>

            </div>
            <div className="mailsender">
                <div className="mleft">
                <Avatar/>
                <div className="sinfo">
                <h5>Address</h5>
                <p>to me {detail===false&&<span><ArrowDropDown onClick={()=>setdetail(!detail)}/></span>}{detail===true &&<span><ArrowDropUp onClick={()=>setdetail(!detail)}/></span>} </p>
                </div>
                </div>
                <div className="mright">
                    <p>tym</p>
                    <Star className="bt"/>
                    <ReplyIcon className="bt"/>
                    <MoreVert className="bt"/>
                </div>

                
            </div>
            <div className={`hidedetails ${detail&&"showdetails"}`} >
                    <p>info : <span>blah blah</span></p>
                    <p>info : <span>blah blah</span></p>
                    <p>info : <span>blah blah</span></p>
                    <p>info : <span>blah blah</span></p>
                
                </div>
            <div className="mailcontent">
                <p>contentDolore Qui non commodo voluptate mollit officia Lorem Lorem. Anim exercitation Lorem occaecat minim laboris eu. Aliquip elit dolor consequat consequat exercitation tempor consectetur consectetur ex.ullamco sunt sint sit consectetur qui amet id consectetur occaecat deserunt adipisicing. Dolor in commodo sint exercitation consectetur dolore veniam est proident eu exercitation veniam irure. Aliqua ullamco ut deserunt elit proident laboris minim laborum. Culpa cillum laboris pariatur adipisicing esse eiusmod voluptate. Cillum consequat occaecat minim velit velit ut ullamco. Voluptate aliquip aute occaecat nisi excepteur eiusmod. Et ullamco reprehenderit dolore tempor esse velit ea consequat dolor anim aute.contentDolore Qui non commodo voluptate mollit officia Lorem Lorem. Anim exercitation Lorem occaecat minim laboris eu. Aliquip elit dolor consequat consequat exercitation tempor consectetur consectetur ex.ullamco sunt sint sit consectetur qui amet id consectetur occaecat deserunt adipisicing. Dolor in commodo sint exercitation consectetur dolore veniam est proident eu exercitation veniam irure. Aliqua ullamco ut deserunt elit proident laboris minim laborum. Culpa cillum laboris pariatur adipisicing esse eiusmod voluptate. Cillum consequat occaecat minim velit velit ut ullamco. Voluptate aliquip aute occaecat nisi excepteur eiusmod. Et ullamco reprehenderit dolore tempor esse velit ea consequat dolor anim aute.contentDolore Qui non commodo voluptate mollit officia Lorem Lorem. Anim exercitation Lorem occaecat minim laboris eu. Aliquip elit dolor consequat consequat exercitation tempor consectetur consectetur ex.ullamco sunt sint sit consectetur qui amet id consectetur occaecat deserunt adipisicing. Dolor in commodo sint exercitation consectetur dolore veniam est proident eu exercitation veniam irure. Aliqua ullamco ut deserunt elit proident laboris minim laborum. Culpa cillum laboris pariatur adipisicing esse eiusmod voluptate. Cillum consequat occaecat minim velit velit ut ullamco. Voluptate aliquip aute occaecat nisi excepteur eiusmod. Et ullamco reprehenderit dolore tempor esse velit ea consequat dolor anim aute.contentDolore Qui non commodo voluptate mollit officia Lorem Lorem. Anim exercitation Lorem occaecat minim laboris eu. Aliquip elit dolor consequat consequat exercitation tempor consectetur consectetur ex.ullamco sunt sint sit consectetur qui amet id consectetur occaecat deserunt adipisicing. Dolor in commodo sint exercitation consectetur dolore veniam est proident eu exercitation veniam irure. Aliqua ullamco ut deserunt elit proident laboris minim laborum. Culpa cillum laboris pariatur adipisicing esse eiusmod voluptate. Cillum consequat occaecat minim velit velit ut ullamco. Voluptate aliquip aute occaecat nisi excepteur eiusmod. Et ullamco reprehenderit dolore tempor esse velit ea consequat dolor anim aute.contentDolore Qui non commodo voluptate mollit officia Lorem Lorem. Anim exercitation Lorem occaecat minim laboris eu. Aliquip elit dolor consequat consequat exercitation tempor consectetur consectetur ex.ullamco sunt sint sit consectetur qui amet id consectetur occaecat deserunt adipisicing. Dolor in commodo sint exercitation consectetur dolore veniam est proident eu exercitation veniam irure. Aliqua ullamco ut deserunt elit proident laboris minim laborum. Culpa cillum laboris pariatur adipisicing esse eiusmod voluptate. Cillum consequat occaecat minim velit velit ut ullamco. Voluptate aliquip aute occaecat nisi excepteur eiusmod. Et ullamco reprehenderit dolore tempor esse velit ea consequat dolor anim aute.</p>
            </div>
            <div className="mailfooter">
                <Button startIcon={<ReplyIcon/>} className="mf">Reply</Button>
                <Button startIcon={<Forward/>} className="mf">Forward</Button>
            </div>
        </div>
      </div>
    )
}
