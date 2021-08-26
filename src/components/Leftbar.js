import React from "react";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import "./css/leftbar.css";
import { Sideicons } from "./sideicons";
import { ArrowDropDown } from "@material-ui/icons";

export const Leftbar = () => {
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
          <div className="more">
            <ArrowDropDown />
          </div>
        </div>
      </div>
      <div className="mid"></div>
      <div className="submid"></div>
      <div className="bottom"></div>
    </div>
  );
};
