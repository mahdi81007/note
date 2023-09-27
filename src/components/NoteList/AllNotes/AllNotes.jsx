import React, {useState} from 'react';
import NoteListItem from "../NoteListItem/NoteListItem.jsx";
import "./AllNotes.css"
const notes =[
    {
        title :"خلاصه جلسه ۱۲ صد کدرز",
        text : "دیزاین یه ماشین حساب رو  دیزاین یه ماشین حساب رو دیزاین یه ماشین حساب رو" ,
        time : "۱۸ شهریور ۱۴۰۲",
        color: "#4C86A8",
        id :1
    },
    {
        title :"کتاب‌هایی که می‌خوام بخونم",
        text : "برادران کارامازوف برادران کارامازوف برادران کارامازوف" ,
        time : "۱ شهریور ۱۴۰۲",
        color: "#38A3A5",
        id :2

    },
    {
        title :"هدف من برای سال جدید",
        text : "اولین هدفم اینه که بتونم اولین هدفم اینه که بتونم اولین هدفم اینه که بتونم" ,
        time :  "۲ فروردین ۱۴۰۲",
        color : "#8377D1",
        id :3
    },
]
function AllNotes(props) {
    const [selected,setSelected]=useState(null)

    return (
        <div className={"allNotes"}>
            <h2>همه یادداشت‌ها</h2>
            {
                notes.map((item)=>{
                    return(
                        <NoteListItem key={item.title}
                            {...item}
                            selected = {item.id=== selected}
                             onClick ={()=>setSelected(item.id)}
                            ></NoteListItem>
                    )
                })
            }
        </div>
    );
}

export default AllNotes;