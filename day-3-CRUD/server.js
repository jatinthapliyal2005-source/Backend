let express = require("express");
let app = express();
let users=[]
app.get("/",(req,res)=>{
    res.send(users)
})
app.use(express.json())
app.post("/create",(req,res)=>{
    let body = req.body
    users.push(body)
    res.send("user registered successfully")
    
})

app.delete("/delete/:id",(req,res)=>{
    let {id}= req.params
    let usersData=users.filter((val)=>val.id!==id)
    users=usersData
    res.send("deleted successfully")
  
})
app.put("/update/:id",(req,res)=>{
    let {id}=req.params
    let {name}=req.body
    let updatedUsers=users.map((val)=>val.id===id ? {...val,name}:val)
    users=updatedUsers;
    res.send(updatedUsers)
})
app.listen(3000,()=>{
    console.log("i am running bro")
})