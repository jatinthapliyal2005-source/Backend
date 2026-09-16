const notesModel = require("../models/notes.model")

const notesController = async(req,res)=>{
    let {title,description} = req.body
    let newNote = await notesModel.create({
        title,
        description
    })
    return res.status(201).json({
        success:true,
        message:"Notes is successfully added",
        data:newNote
    })
}

const allNotesController=async(req,res)=>{
    try{
      let getNotes = await notesModel.find()
      res.status(201).json({
        success:true,
        message:"aagye sare notes",
        data:getNotes
      })
    }catch(error){
        console.log(error)
    }
}

const noteById=async(req,res)=>{
    let noteId=req.params.id
    let note = await notesModel.findById(noteId)
    res.status(201).json({
        data:note,
        message:"ye ra note"
    })
}

const updateNote=async(req,res)=>{
    try{

        let id = req.params.id
        let body = req.body

        let updatedNote = await notesModel.findByIdAndUpdate(id,body,{new: true,})

        return res.status(202).json({
            message:"updated vala hu",
            updated:updatedNote
        })

    }
    
    catch(error){
        console.log(error)
    }
}

const deleteNotes=async(req,res)=>{

   try{
     let deletedId = req.params.id
     let deletedNote=await notesModel.findByIdAndDelete(deletedId)
     return res.status(201).json({
        deleteNote:deletedNote
     })

   }catch(error){
    console.log(error)
   }


}
const singleUpdate=async(req,res)=>{
    try{
     let singleId=req.params.id
     let body = req.body
     let updatedSingleNote = await notesModel.findByIdAndUpdate(singleId,body,{new:true})
     return res.status(202).json({
        message:"get single note by patch",
        data:updatedSingleNote
     })
    }catch(error){
        console.log(error)
    }
}
module.exports = {
    notesController,
    allNotesController,
    noteById,
    updateNote,
    deleteNotes,
    singleUpdate,
}