import React, {useState} from 'react'

function Notes() {

  const [note,setNote] = useState({
    title:"",
    des:""
  });
   
  const handleChange= (e) => {
   const name = e.target.name;
   const value = e.target.value;
   console.log(name,value);

   setNote({ ...note ,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  

  return (
    <div className="form">
        <form>
            <div>
              <input name="title" type="text" value={note.title} placeholder="Title"  onChange={handleChange} ></input>
            </div>
            <div>
              <textarea name="description" value={note.des} onChange={handleChange}></textarea>
            </div>  
            <button type="submit" onClick={handleSubmit}>Save</button>
        </form>
    </div>
  )
}

export default Notes