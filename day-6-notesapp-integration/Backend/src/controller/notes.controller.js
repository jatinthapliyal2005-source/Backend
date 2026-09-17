const notesModel = require("../models/notes.model")


const notesController = async(req,res)=>{
    try{
        let{title,description}=req.body
        let newNote = await notesModel.create({
            title,
            description
        })
      return  res.status(200).json({
            success:true,
            message:"Note created Successfully",
            data:newNote
        })
        
      
    }catch(error){
        console.log(error)
    }

}

const allNotesController = async(req,res)=>{
   try{
     let getAllNotes= await notesModel.find()
      res.status(200).json({
        data:getAllNotes,
        message:"ye re all notes"
    })
   }

   catch(error){
    console.log(error)
   }


    
    
    

    }

    const getNoteById = async(req,res)=>{
       try{
         let noteId=req.params.id
        let note=await notesModel.findById(noteId)
        res.status(200).json({
            message:"ye ra note by id",
            data:note
        })
       }catch(error){
        console.log(error)
       }
    }

   const getDeleteNote = async(req,res)=>{
       try{
        let deleteId=req.params.id
       let deletedNote = await notesModel.findByIdAndDelete(deleteId)
       res.status(200).json({
           message:"Note is deleted",
           data:deletedNote
       })
       }catch(error){
        console.log(error)
       }
   }

   const getUpdatedId = async(req,res)=>{
       try{
           let updateId=req.params.id 
           let body = req.body
           let updatedId=await notesModel.findByIdAndUpdate(updateId,body,{new:true})
           return res.status(200).json({
               message:"update hogya h ",
               data : updatedId,
           })
   
       }catch(error){
           console.log(error)
       }
   }

    const getSingleUpdate = async(req,res)=>{
       try{
           let updateId=req.params.id 
           let body = req.body
           let updatedId=await notesModel.findByIdAndUpdate(updateId,body,{new:true})
           return res.status(200).json({
               message:"update hogya h ",
               data : updatedId,
           })
   
       }catch(error){
           console.log(error)
       }
   }

module.exports={
    notesController,
    allNotesController,
    getNoteById,
    getDeleteNote,
    getUpdatedId,
    getSingleUpdate,
}