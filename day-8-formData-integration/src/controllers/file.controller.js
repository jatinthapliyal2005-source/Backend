let fileController = (req,res)=>{
    try{
    let body = req.body
    let file =req.files
    console.log(body)
    console.log(file)

    res.status(200).json({
        message:"file uploaded successfully",
        files:req.files
    })
   
    }catch(error){
        console.log(error)
        res.status(500).json({
      message: "File upload failed",
      error: error.message,
    });
    }
}

module.exports=fileController