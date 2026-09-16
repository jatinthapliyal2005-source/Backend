const mongoose= require("mongoose")
let notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true,
        minlength:[10,"length should atleast 10 characters"]
    }
})

let notesModel= mongoose.model("notes",notesSchema)
module.exports=notesModel