import React from 'react';
import "./NoteListItem.css"

function NoteListItem(props) {
    const style={background:props.selected?"#fff":"#fcf1e3",
        borderColor:props.color
    }
    return (
        <div className={"noteListItem"}  style ={style} onClick={props.onClick}>
            <h3 className={"title"}>{props.title}</h3>
            <div className={"text-section"}>
                <p className={"text"}>{props.text}</p>
                <span className={"time"}>{props.time}</span>
            </div>
        </div>
    );
}

export default NoteListItem;