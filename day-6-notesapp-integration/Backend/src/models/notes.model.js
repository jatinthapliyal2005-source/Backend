let mongoose = require("mongoose") 

let notesSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        minlength:[20,"atleast 20 letters"]
    }
})
let notesModel= mongoose.model("notes",notesSchema)
module.exports=notesModel