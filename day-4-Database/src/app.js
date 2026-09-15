let express = require("express");
let connectDb=require("./config/db")
let app = express();

connectDb()
app.get("/",(req,res)=>{
    res.send("server ke andar hu")
})
module.exports=app