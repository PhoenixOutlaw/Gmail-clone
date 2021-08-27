import React, { useState } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReplayIcon from '@material-ui/icons/Replay';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./css/feed.css"
import { ArrowDropDown, Inbox,Person} from '@material-ui/icons';
import {Checkbox, IconButton } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { Feedicon } from './feedicon';

let n =11,o="12,393";
export const Feed = () => {
    const [choice, setchoice] = useState([true,false,false])
   
    return (
        <div className="feed">
            <div className="feedheader">
                <div className="feedheaderleft" > 
                <Checkbox label="chkbx "/>
               
                <IconButton className="ibt">
                <ArrowDropDown className="bt"/>
                </IconButton>
                <IconButton>
                <ReplayIcon className="bt"/>
                </IconButton>
                <IconButton>
                <MoreVertIcon className="bt"/>
                </IconButton>

                </div>

                <div className="feedheaderright">
                <p>{n}-50 of {o}</p> 
                <ArrowBackIosIcon />
                <ArrowForwardIosIcon />
                </div>
            </div>
      <div className="emails">

        <div className="feedmid">
            
                <Feedicon Icon={Inbox}title='Primary' color="#d93025" click={()=>setchoice([true,false,false])} on={choice[0]}/>
                <Feedicon Icon={Person}title='Social' color="#1a73e8"  click={()=>setchoice([false,true,false])} on={choice[1]}/>
                <Feedicon Icon={LocalOfferIcon}title='Promotion' color="#188038"  click={()=>setchoice([false,false,true,])} on={choice[2]}/>
                        
        </div>

      </div>
        </div>
    )
}
