import React from 'react'
import "./css/sideicons.css"
export const Sideicons = ({Icon,title,no,show}) => {
    return (
        <div className="icon">
            
            <Icon/>
            <p >{title}</p>
            <h4> {no}</h4>
        </div>
    )
}
