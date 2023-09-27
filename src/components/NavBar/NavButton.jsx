import React from "react";
import "./NavButton.css"

function NavButton(props){
    const style={background:props.selected?"#fff":"#fcf1e3"}
    return(
        <div className={props.isSelected|| props.id
            ? "nav-bar-item nav-bar-item--selected"
            : "nav-bar-item"}
             style={style} onClick={props.onClick}
        >
            <img src={props.icon}/>
            <p>{props.text}</p>
        </div>
    )
}
export default NavButton