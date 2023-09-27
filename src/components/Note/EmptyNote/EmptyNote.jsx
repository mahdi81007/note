import React from 'react';
import noteIcon from "../../../assets/images/note.svg"
import "./EmptyNote.css"
function EmptyNote(props) {
    return (
        <div className={"emptyNote-section"}>
        <img src={noteIcon}/>
            <h3 className={"title"}>یک یادداشت را برای نمایش انتخاب کنید</h3>
            <p className={"content"}>از لیست سمت راست یک يادداشت را انتخاب کنید، یا یک یادداشت جدید ایجاد کنید.</p>
        </div>
    );
}

export default EmptyNote;