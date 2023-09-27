import "./NavBar.css"
import Header from "./Header/Header.jsx";
import React from 'react';
import LastNotes from "./LastNotes/LastNotes.jsx";
import Folders from "./folders/Folders.jsx";
import More from "./More/More.jsx";
function NavBar() {

    return (
        <div id={"nav-bar"}>
            <Header></Header>
            <LastNotes></LastNotes>
            <Folders></Folders>
            <More></More>
        </div>
    );
}
export default NavBar;