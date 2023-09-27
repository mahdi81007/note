import {createContext, useState} from "react";

const noteContext =createContext();
const NoteProvider =({children})=>{
    const [isNewNoteMode,setIsNewNoteMode]=useState(false)
    const toggleNewNoteMode =()=>{
        setIsNewNoteMode(!isNewNoteMode)
    }
    const value ={
        isNewNoteMode : isNewNoteMode,
        toggleNewNoteMode : toggleNewNoteMode,
    }
    return<noteContext.Provider value ={value}>{children}</noteContext.Provider>
}
export {NoteProvider, noteContext}