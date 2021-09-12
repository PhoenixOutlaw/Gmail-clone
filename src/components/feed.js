import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ReplayIcon from "@material-ui/icons/Replay";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./css/feed.css";
import { ArrowDropDown, Inbox, Person } from "@material-ui/icons";
import { Checkbox, IconButton } from "@material-ui/core";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { Feedicon } from "./feedicon";
import { Email } from "./Email";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Mail } from "./Mail";
import { db } from "./fireb";

let n = 11,
  o = "12,393";

export const Feed = () => {

  
  const [email, setemail] = useState([]);

  useEffect(() => {
    db.collection("sent")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) =>
        setemail(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const [choice, setchoice] = useState([true, false, false]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="feed">
            <div className="feedheader">
              <div className="feedheaderleft">
                <Checkbox label="chkbx " />

                <IconButton className="ibt">
                  <ArrowDropDown className="bt" />
                </IconButton>
                <IconButton>
                  <ReplayIcon className="bt" />
                </IconButton>
                <IconButton>
                  <MoreVertIcon className="bt" />
                </IconButton>
              </div>

              <div className="feedheaderright">
                <p>
                  {n}-50 of {o}
                </p>
                <ArrowBackIosIcon />
                <ArrowForwardIosIcon />
              </div>
            </div>

            <div className="emails">
              <div className="email-list">
                <div className="feedmid">
                  <Feedicon
                    Icon={Inbox}
                    title="Primary"
                    color="#d93025"
                    click={() => setchoice([true, false, false])}
                    on={choice[0]}
                  />
                  <Feedicon
                    Icon={Person}
                    title="Social"
                    color="#1a73e8"
                    click={() => setchoice([false, true, false])}
                    on={choice[1]}
                  />
                  <Feedicon
                    Icon={LocalOfferIcon}
                    title="Promotion"
                    color="#188038"
                    click={() => setchoice([false, false, true])}
                    on={choice[2]}
                  />
                  
                </div>
                {email.map(({id , data:{to , subject , message ,timestamp}}) =>(  
                  <Email id={id} subject={subject} to={to} sub={subject} message={message} time={new Date(timestamp?.seconds * 1000).toUTCString()}/>
                  )) }
                 
              </div>
            </div>
          </div>
        </Route>

        <Route path="/m">
          <Mail />
        </Route>
      </Switch>
    </Router>
  );
};
