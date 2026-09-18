let express = require("express");
let app = express()
app.use(express.json())
var cors = require('cors')
app.use(cors({
    origin:"http://localhost:5173",
}))
let fileRoute = require("./routes/file.route")
app.get("/",(req,res)=>{
    res.send("hnji server me hu")
})
app.use("/user",fileRoute)

module.exports=app