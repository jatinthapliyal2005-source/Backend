let express = require("express");
const connectDb = require("./config/db");
const notesModel = require("./models/notes.model");
const notesController = require("./controller/notes.controller");
let routerNotes = require("./routes/notes.routes")
var cors = require('cors')
let app = express();

app.use(cors({
    origin:"http://localhost:5173"
}))


app.use(express.json())

connectDb()

app.get("/",(req,res)=>{
    res.send("its working")
})

app.use("/notes",routerNotes)
module.exports=app