const express = require("express");
const app = express()
const fileRoute = require("./routes/file.route")

app.get("/",(req,res)=>{
    res.send("server chalra hai lawdo")
})
app.use("/file",fileRoute)

module.exports = app 