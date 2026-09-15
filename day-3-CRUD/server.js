let express = require("express");
let app =express();
let users = [];
app.get("/",(req,res)=>{
    res.send(users)
})
app.use(express.json())
app.post("/create",(req,res)=>{
    let body = req.body
    users.push(body)
    res.send("registered successfully")

})

app.delete("/delete/:id",(req,res)=>{
  let {id} = req.params
  let deleteUsers= users.filter((val)=>val.id!==id)
  users=deleteUsers;
  res.send("Deleted Successfully")
})

app.put("/update/:id",(req,res)=>{
   let {id}=req.params
   let {name}=req.body
   let updatedUsers=users.map((val)=>val.id===id?{...val,name}:val)
   users=updatedUsers
   res.send("Updated Successfully")
})
app.listen(3000,(req,res)=>{
    console.log("i am running at port 3000")
})