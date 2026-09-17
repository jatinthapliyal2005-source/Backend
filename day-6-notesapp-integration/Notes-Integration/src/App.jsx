import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
  FileText,
  Type,
  AlignLeft,
  Plus,
  Save
} from "lucide-react";
import Notes from './components/Notes';

const App = () => {

  let [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  let [allNotes, setAllNotes] = useState([]);
  let [isEdit, setIsEdit] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const allNotesGetting = async (e) => {
    let res = await axios.get(
      "http://localhost:3000/notes/allNotes"
    );

    setAllNotes(res.data.data);
  };

  useEffect(() => {
    allNotesGetting();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    if (isEdit) {

      let res = await axios.put(
        `http://localhost:3000/notes/${isEdit}`,
        formData
      );

      setIsEdit(null);

    } else {

      let res = await axios.post(
        "http://localhost:3000/notes/create",
        formData
      );

      console.log(res);
    }

    setFormData({
      title: "",
      description: ""
    });

    allNotesGetting();
  };

  const getDeletedNote = async (id) => {

    let res = await axios.delete(
      `http://localhost:3000/notes/${id}`
    );

    allNotesGetting();
  };

  const getUpdatedNote = async (id, title, description) => {

    setIsEdit(id);

    setFormData({
      title: title,
      description: description
    });

    console.log("update vala logic hai lodo", formData);
  };


  return (
    <div className="min-h-screen bg-gray-50 p-6">

      
      <div className="max-w-7xl mx-auto mb-8">

        <div className="flex items-center gap-4">

          
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
            <FileText size={24} />
          </div>

          <div>

        
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Notes-App
            </h1>

            
            <p className="text-sm text-gray-500 mt-1">
              Capture your ideas, organize your thoughts.
            </p>

          </div>

        </div>

      
        <div className="mt-5 h-px bg-gradient-to-r from-blue-200 via-gray-200 to-transparent"></div>

      </div>


      <div className="max-w-7xl mx-auto">

      
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-5 shadow-md mb-8"
        >

          
          <div className="flex items-center gap-3 mb-5">

            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FileText size={21} />
            </div>

            <div>

              <h2 className="text-lg font-bold text-gray-800">
                {isEdit ? "Update Note" : "New Note"}
              </h2>

              <p className="text-xs text-gray-400">
                {isEdit
                  ? "Edit your note"
                  : "Add something to remember"}
              </p>

            </div>

          </div>


      
          <div className="mb-4">

            <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 mb-2">
              <Type size={14} />
              Title
            </label>

            <input
              onChange={handleChange}
              name="title"
              value={formData.title}
              type="text"
              placeholder="Enter title..."
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 outline-none placeholder-gray-400 transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>


      
          <div className="mb-4">

            <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 mb-2">
              <AlignLeft size={14} />
              Description
            </label>

            <textarea
              onChange={handleChange}
              minLength={20}
              required
              name="description"
              value={formData.description}
              rows="3"
              placeholder="Write your note..."
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 outline-none resize-none placeholder-gray-400 transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <p className="text-[11px] text-gray-400 mt-1">
              Minimum 20 characters
            </p>

          </div>


          
          <button
            type="submit"
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 active:scale-[0.98] ${
              isEdit
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >

            {isEdit ? (
              <>
                <Save size={16} />
                Update Note
              </>
            ) : (
              <>
                <Plus size={16} />
                Add Note
              </>
            )}

          </button>

        </form>


        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          {
            allNotes.map((val) => {

              return (
                <Notes
                  key={val._id}
                  details={val}
                  getDeletedNote={getDeletedNote}
                  getUpdatedNote={getUpdatedNote}
                />
              );

            })
          }

        </div>

      </div>

    </div>
  );
};

export default App;