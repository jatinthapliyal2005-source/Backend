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
module.exports = {
    notesController,
    allNotesController,
}