const { default: mongoose } = require("mongoose")

const connectDb=async(req,res)=>{
    try{

        await mongoose.connect("mongodb://localhost:27017/notes-app")
        console.log('mongoDb connected successfully')

    }catch(error){
        console.log(error)
    }
}

module.exports=connectDb