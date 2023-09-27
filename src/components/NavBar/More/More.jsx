import React from 'react';
import "./More.css"
import navButton from "../NavButton.jsx";
import NavButton from "../NavButton.jsx";
import favorite from "../../../assets/images/favorite.svg"
import trash from "../../../assets/images/trash.svg"
const Mores =[
    {
        name : "حذف " ,
        icon :trash
    },
    {
        name: "کاری",
        icon: favorite
    },
]
function More(props) {
    return (
        <div className={"lastNotes"}>
                <h3 className={"title"}> بیشتر</h3>
            {
                Mores.map((item)=>{
                    return(
                        <NavButton key={item.name} text={item.name} icon ={item.icon}/>
                    )
                })
            }
        </div>
    );
}

export default More;