import "./noteList.css"
import React from 'react';
import AllNotes from "./AllNotes/AllNotes.jsx";

function NoteList(props) {
    return (
        <div className={"NoteList"}>
            <AllNotes></AllNotes>
        </div>
    );
}

export default NoteList;