import React from 'react';
import { FileText, Pencil, Trash2 } from "lucide-react";

const Notes = ({ details, getDeletedNote, getUpdatedNote }) => {
  return (
    <div className="group relative w-70 min-h-55 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">

      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

      
      <div>

  
        <div className="flex items-center justify-between mb-4">

          <div className="flex items-center gap-2">

            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-blue-50 text-blue-500">
              <FileText size={18} />
            </div>

            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Note
            </span>

          </div>

          <span className="w-2 h-2 rounded-full bg-green-400"></span>

        </div>


        
        <h1 className="text-lg font-bold text-gray-800 break-words leading-6 mb-2">
          {details.title}
        </h1>


        
        <p className="text-sm leading-6 text-gray-500 break-words">
          {details.description.length > 20
            ? details.description.substring(0, 20) + "..."
            : details.description}
        </p>

      </div>


      
      <div className="flex gap-2 mt-6 pt-4 border-t border-gray-100">

    
        <button
          onClick={() =>
            getUpdatedNote(
              details._id,
              details.title,
              details.description
            )
          }
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-green-600 bg-green-50 border border-green-100 rounded-xl hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200"
        >
          <Pencil size={15} />
          Update
        </button>


      
        <button
          onClick={() => getDeletedNote(details._id)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-red-600 bg-red-50 border border-red-100 rounded-xl hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200"
        >
          <Trash2 size={15} />
          Delete
        </button>

      </div>

    </div>
  );
};

export default Notes;