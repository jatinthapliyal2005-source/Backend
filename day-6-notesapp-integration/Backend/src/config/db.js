let mongoose = require("mongoose");


const connectDb = async()=>{
  try{
    await  mongoose.connect("mongodb://localhost:27017/notes-application")
    console.log("MongoDb connected Successfully")
  }catch(error){
    console.log(error)
  }
}

module.exports=connectDb
