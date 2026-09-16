const { default: mongoose } = require("mongoose")

const connectDb=async(req,res)=>{
    try{

        await mongoose.connect(process.env.mongodb_uri)
        console.log('mongoDb connected successfully')

    }catch(error){
        console.log(error)
    }
}

module.exports=connectDb