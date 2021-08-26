import React from 'react'
import "./css/sideicons.css"
export const Sideicons = ({Icon,title,no,show}) => {
    return (
        <div className={`container ${show && "selected"}`}>
                <div className="icon">
            <Icon/>
            <p >{title}</p>
            </div>
            
            {show &&<p className="no"> {no}</p>}

        </div>
        
        
    )
}
