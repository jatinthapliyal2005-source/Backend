import React from 'react';

const Notes = ({details,deleteNotes}) => {
  return (
    <div className="w-70 flex flex-col gap-2 border border-black p-4">
      <h1>{details.title}</h1>
      <p>{details.description.length>20 ? details.description.substring(0,20):details.description}</p>
      <div className="flex justify-between">
        <button className="bg-green-500 p-2 rounded">Update</button>
        <button onClick={()=>deleteNotes(details._id)} className="bg-red-500 p-2 rounded">Delete</button>
      </div>
    </div>
  );
}

export default Notes;
