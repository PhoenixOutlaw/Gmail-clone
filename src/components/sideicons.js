import React from 'react'
import "./css/sideicons.css"
export const Sideicons = ({Icon,title,no,show,clicked}) => {
    return (
        <div className={`container ${show && "selected"}`} onClick={()=>clicked}>
                <div className="icon">
           {Icon&& <Icon/>}
            {title &&<p >{title}</p>}
            </div>
            
            {show &&<p className="no"> {no}</p>}

        </div>
        
        
    )
}
