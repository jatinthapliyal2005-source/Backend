let express = require("express");
let connectDb=require("./config/db");
const notesModel = require("./models/note.model");

let app = express();

connectDb()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("server ke andar hu")
})

app.post("/create",async(req,res)=>{
    let {title,description} = req.body
    let newNote =await notesModel.create({
        title,
        description
    })
    res.send({
        success:true,
        data:newNote,
        message:"Successfully added"
    })
})


module.exports=app