let express = require("express");
const connectDb = require("./config/db");
const notesModel = require("./models/notes.model");
const notesController = require("./controller/notes.controller");
const notesRoute=require("./routes/notes.routes")
let app =express();
connectDb()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Okay got it")
})



app.use("/notes",notesRoute)

module.exports=app