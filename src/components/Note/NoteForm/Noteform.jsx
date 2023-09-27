import React from 'react';
import "./noteForm.css"
import moreIcon from "../../../assets/images/more.svg"
import folderIcon from "../../../assets/images/folder.svg"
function Noteform(props) {
    return (
        <div className={"noteForm"}>
            <div className={"title"}>
                <h4>خلاصه جلسه ۱۲ صد کدرز</h4>
                <img src={moreIcon}/>
            </div>
            <div className={"detail"}>
                <div className={"right-section"}>
                    <img src={folderIcon}/>
                        <span>پوشه</span>
                        <span>شخصی</span>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Noteform;