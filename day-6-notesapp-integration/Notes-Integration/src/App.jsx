import React from 'react';
import { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';
import Notes from './components/Notes';

const App = () => {

  let[formData,setFormData]=useState({
    title:"",
    description:"",
  });
  let[getAllNotes,setGetAllNotes]=useState([])
  console.log(getAllNotes)

  const handleChange=(e)=>{
    setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(formData)
    let res = await axios.post("http://localhost:3000/notes/create",formData)
    console.log(res);
    setFormData({
      title:"",
      description:"",
    })
    allNotes()
  }

  const allNotes=async()=>{
    try{
      let res = await axios.get("http://localhost:3000/notes/allNotes")
      console.log(res)
      setGetAllNotes(res.data.data)

    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    allNotes()
  },[])

  const deleteNotes = async(id)=>{
    try{
      let res = await axios.delete(`http://localhost:3000/notes/${id}`)
      console.log(res);
      allNotes()
       
     
    }catch(error){
      console.log(error)
    }
  }

  

  return (
    <div className="p-5 flex flex-col gap-4  h-screen">
      <h1 className="text-3xl font-semibold">Notes App</h1>
      <form onSubmit={handleSubmit} className="w-70 border border-black p-4 rounded-xl flex flex-col gap-4">
        <input onChange={handleChange} name="title" value={formData.title} className="p-2 outline-none text-xl rounded border border-black" type="text" placeholder="Enter Title"/>
        <input onChange={handleChange} minLength={20} required name="description" value={formData.description} className="p-2 outline-none text-xl rounded border border-black" type="text" placeholder="Enter Description"/>
        <button className="bg-red-500 rounded">Add Task</button>
      </form>

      <div className="grid grid-cols-4 gap-3">
        {
          getAllNotes.map((val)=>{
            return <Notes key={val.id} details={val} deleteNotes={deleteNotes}/>
          })
        }
      </div>
      
    </div>
  );
}

export default App;
