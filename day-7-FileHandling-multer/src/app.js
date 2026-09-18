let express = require("express");
let fileRoute=require("./routes/file.route")
let app = express()

app.get("/",(req,res)=>{
    res.send("Api working")
})


app.use("/file",fileRoute)
module.exports = app