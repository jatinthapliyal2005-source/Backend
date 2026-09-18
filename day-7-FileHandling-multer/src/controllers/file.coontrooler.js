const fileController = (req,res)=>{
    try{
        let data=req.body
        let file =req.file
        console.log(data)
        console.log(file)
      return  res.status(200).json({
            message:"File uploaded successfully"
        })
    }catch(error){
        console.log(error)
    }
}
module.exports = fileController