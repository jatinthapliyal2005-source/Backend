const { default: mongoose } = require("mongoose")

const connectDb=async()=>{
    try{
       await mongoose.connect("mongodb+srv://jatinthapliyal2005_db_user:CgWF1VgHuMdwBumt@backenddb.blmtgyl.mongodb.net/")
        console.log("connected successfully Database")

    }catch(error){
        console.log("showing error while connecting it with database")
    }
}
module.exports=connectDb