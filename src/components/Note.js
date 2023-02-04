import React,{useState} from 'react';
import {MdDeleteForever} from 'react-icons/md';
import '../Notes.css';
import { BrowserRouter as Router, Routes, Route, Navigate,Link } from 'react-router-dom';
import NoteEdit from './NoteEdit';
import Edit from './Route/Edit';

function Note({ note,deleteNote}) {
    const[isClicked,setClick] = useState(true);
    
    const handleDelete = () => {
        deleteNote(note.id);
    }

   const handleEdit = () => {
}
if(!isClicked){
 return(
     <div>
         <Router>
             <Link to="/edit"></Link>
             <Routes>
                  
                 <Route path="" element={<Edit/>} />
             </Routes>
         </Router>
     </div>
 )
} setClick(false);



  return (
    <div className="note">
        <div className="note-title">{note.title}</div>
        <div className="note-content">{note.content}</div>
        <div className="note-footer">
            <button onClick={handleEdit}></button>
           <button className="delBtn" onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
    
}

export default Note;