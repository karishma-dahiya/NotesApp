import React from 'react';
import Note from './Note';
import Noteform from './Noteform';

function NotesContainer({ addNotes, deleteNote , notes}) {
  return (
    <div className="notes-container">
           
         
       {
       notes.map((note) => (
       <Note
            deleteNote={deleteNote}
            key={note.id}
            note={note}
       />
       ))}
        <Noteform notes={notes} addNotes={addNotes} />
   
    </div>
  )
}

export default NotesContainer