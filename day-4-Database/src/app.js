let express = require("express");
let app = express()
let connectDb=require("./config/db");
const noteModel = require("./models/note.model");

connectDb()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("MongoDb connected successfully")
})

app.post("/create",async(req,res)=>{
    let {title,description}= req.body
    const newNote =await noteModel.create({
        title,
        description
    })
    res.send({
        success:true,
        message:"Notes uploaded successfully",
        data:newNote

    })
})
module.exports=app