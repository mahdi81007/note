import React, {useEffect, useState} from 'react';
import NavButton from "../NavButton.jsx";
import frame from "../../../assets/images/Frame.svg";
import folderIcon from "../../../assets/images/folder.svg"
import openFolderIcon from "../../../assets/images/folderActive.svg"
import "./Folders.css"
import Button from "../../UI/Button/Index.jsx"
const initialFolders =[
    // {
    //     name : "همه یادداشت ها ",
    //     id:1
    // },
    {
        name:   "کاری",
        id :1,
    },
    {
        name: "مسافرت",
        id:2
    },
    {
        name: "مسافرت",
        id:3
    },
    {
        name: "مسافرت",
        id:4
    }
]

function Folders(props) {
    const [selected,setSelected] = useState(null)
    const [isShowFolder , setShowFolder] = useState(false)
    const [folderValue , setFolderValue] = useState()
    const [folders,setFolders] =useState(initialFolders)
    const handelclick=()=>{
        setShowFolder (true)
    }
    const handelCancel =()=>{
        setShowFolder (false)
    }
    const handelValue=(e)=>{
         const value = e.target.value
    }

    const handelChangeInput =(e)=>{
        setFolderValue (e.target.value)
    }
    const handelOk =()=>{
        setFolders([{ name:folderValue , id:folders.length+1},...folders])
        setShowFolder (false)
        setFolderValue(null)
    }
    useEffect(()=>{
        const handelClick=(event)=> {
            const isClickInForm = event.target.closest(".lastNotes")
                if (!isClickInForm) {
                    setShowFolder(false)
                }
        }
        if (setShowFolder){
            document.body.addEventListener("click",handelClick)
        }
        return()=>{
            document.body.removeEventListener("click",handelClick)
        }
    },[])
    const condition = true
    return (
        <div className={"lastNotes"}>
           <div className={"title-section"}>
               <h3 className={"title"}> پوشه ها</h3>
                    <button className={"addFolder"} onClick={handelclick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g opacity="0.4">
                                <path d="M3.33341 16.6667H16.6667C17.1088 16.6667 17.5327 16.4911 17.8453 16.1785C18.1578 15.866 18.3334 15.442 18.3334 15V6.66667C18.3334 6.22464 18.1578 5.80072 17.8453 5.48816C17.5327 5.17559 17.1088 5 16.6667 5H10.0584C9.7839 4.99858 9.51399 4.92937 9.27266 4.79853C9.03133 4.66769 8.82606 4.47927 8.67508 4.25L7.99175 3.25C7.84077 3.02073 7.63549 2.83231 7.39417 2.70147C7.15284 2.57063 6.88293 2.50142 6.60841 2.5H3.33341C2.89139 2.5 2.46746 2.67559 2.1549 2.98816C1.84234 3.30072 1.66675 3.72464 1.66675 4.16667V15C1.66675 15.9167 2.41675 16.6667 3.33341 16.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 8.33333V13.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.5 10.8333H12.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </button>
           </div>
        <div>
                {
                    isShowFolder&&(
                        <form className={"folderInput"} onSubmit={handelOk}>
                        <div className={"addNewFolder"}>
                            <img src={folderIcon}/>
                            <input className={"input"}
                                   autoFocus
                            type={"text"}
                            placeholder={"نام پوشه"}
                            onChange={handelChangeInput}/>
                            <Button type={"submit"}  varient={"green"}>ok</Button>
                            <Button onClick={handelCancel} varient={"red"}>cancel</Button>
                        </div>
                        </form>
                    )
                }
                <NavButton  icon={folderIcon} text={"همه یادداشت ها "} id={5===selected}>
                    {/*selected={id === selected}*/}
                    {/*isSelected = {id===selected}*/}
                    {/*icon={id===selected?openFolderIcon:folderIcon}*/}
                </NavButton>
            {
                folders.map((item)=>{
                    return(
                        <NavButton key={item.id} text={item.name}
                                   selected={item.id === selected}
                                   onClick={()=>setSelected(item.id)}
                                   isSelected = {item.id===selected}
                                   icon={item.id===selected?openFolderIcon:folderIcon}
                        />

                    )
                })
            }
            </div>
        </div>
    );
}

export default Folders;