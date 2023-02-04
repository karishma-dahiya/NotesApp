
import {useState} from 'react';
import Notes from './components/Notes';
import NotesContainer from './components/NotesContainer';
import Noteform from './components/Noteform';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Routes, Route, Navigate,Link } from 'react-router-dom';
import Edit from './components/Edit';
function App() {
   const[notes,setNotes] = useState([
   
   ]);

  const[isClicked,setClick] = useState(true);
 

  
  const addNotes = (title,content) => {
    const newNote ={
      id: uuidv4(),
      title: title,
      content: content,
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
     const newNotes= notes.filter((note)=> note.id != id);
     setNotes(newNotes);
  }

  const handleEdit = () => {
    setNotes(false);
  }

  if(!isClicked){
    return(
        <div>
            <Router>
                <Link to="/edit"></Link>
                <Routes>
                     
                    <Route path="/edit" element={<Edit/>} />
                </Routes>
            </Router>
        </div>
    )
   }

  return (
    <div className="App">
   
     <div className="notes-container"></div>
      
     <Noteform notes={notes} addNotes={addNotes} />

     { notes.map((note) => (
      <div className="note">
        <div className="note-title">{note.title}</div>
        <div className="note-content">{note.content}</div>
        <div className="note-footer">
            <button onClick={handleEdit}></button>
           <button className="delBtn" onClick={() =>deleteNote(note.id)}>Delete</button>
        </div>
    </div>
       )) }

    </div>
  );
}

export default App;
