import React, {useContext} from 'react';
import "./Header.css"
import logo from "../../../assets/images/logo.svg"
import search from "../../../assets/images/search.svg"
import {noteContext} from "../../../providers/NoteProvide.jsx";
function Header() {
    const value = useContext(noteContext)
    const handelNewNote =()=>{
        value.toggleNewNoteMode()
    }
    return (
        <header>
            <div className={"logo"}>
                <img src={logo} alt={"logo"}/>
                <img src={search} alt={search}/>
            </div>
            <div>
                <button className={"btn"} onClick={handelNewNote}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4.16666V15.8333" stroke="#FFFBFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.16675 10H15.8334" stroke="#FFFBFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    یادداشت جدید
                </button>
            </div>
        </header>
    );
}

export default Header;