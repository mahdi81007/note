import "./Note.css"
import React, {useContext} from 'react';
import EmptyNote from "./EmptyNote/EmptyNote.jsx";
import Noteform from "./NoteForm/Noteform.jsx";
import {noteContext} from "../../providers/NoteProvide.jsx";

function Note() {
    const value = useContext(noteContext)
    return value.isNewNoteMode ? <EmptyNote /> : <Noteform/>
}
export default Note;