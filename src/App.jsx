
import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import Note from "./components/Note/Note.jsx";
import NoteList from "./components/NoteList/noteList.jsx";
import {NoteProvider} from "./providers/NoteProvide.jsx";

function App() {

    return (

        <NoteProvider>
            <NavBar ></NavBar>
            <NoteList></NoteList>
            <Note />
        </NoteProvider>


  )
}

export default App
