const { default: mongoose } = require("mongoose")

const connectDb=async()=>{
    try{
        await mongoose.connect("mongodb+srv://jatinthapliyal2005_db_user:CgWF1VgHuMdwBumt@backenddb.blmtgyl.mongodb.net/")
        console.log("mongoDb is succesfully connected")
    }catch(error){
        console.log("error while connecting Database",error)
    }
}

module.exports = connectDb