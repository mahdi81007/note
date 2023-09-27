import React from 'react';
import "./LastNotes.css"
import navButton from "../NavButton.jsx";
import frame from "../../../assets/images/Frame.svg"
import NavButton from "../NavButton.jsx";
const lastNotes =[
    {
        name : "هدفم برای سال جدید"
    },
    {
        name: "کتاب‌هایی که می‌خوام بخونم"
    },
    {
        name: "خلاصه جلسه ۱۲ صدکدرز"
    }
]

function LastNotes(props) {
    return (
        <div className={"lastNotes"}>
            <h3 className={"title"}>آخرین یادداشت ها </h3>
            {
              lastNotes.map((item)=>{
                  return(
                      <NavButton key={item.name} text={item.name} icon ={frame}/>
                  )
              })
            }
        </div>
    );
}

export default LastNotes;