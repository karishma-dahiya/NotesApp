import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function Noteform({addNotes,notes}) {
    const [newNote,setNote] = useState({
        title:"",
        content:"",
      });
       
     
    const handleSave = (e) => {
        e.preventDefault();

        
        if((newNote.title)===(notes.title)){
            alert("Choose a different title");
        }
        else if(((newNote.title) && (newNote.content)).trim().length>0) {

        addNotes(newNote.title,newNote.content);
        }
        
    }
  return (
    <div class="note-form">
        
        <form>
            <div>
                <input 
                type="text" 
                id="title"
                name="title" 
                placeholder="Title"
                onChange={(e) => setNote({...newNote,title:e.target.value})}
                />
            </div>
            <textarea 
                rows="6"
                cols="12" 
                name="description" 
                id="content"
                placeholder="Write your note here.."
                onChange={(e) => setNote({...newNote,content:e.target.value})}
             ></textarea>
            <button onClick={handleSave}>Save</button>
        </form>
    </div>
  )
}

export default Noteform