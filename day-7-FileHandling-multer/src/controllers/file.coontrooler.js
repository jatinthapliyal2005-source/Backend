const fileController = (req,res)=>{
    try{

        let body = req.body
        let file = req.file
        console.log(body)
        console.log(file)
        
        res.status(200).json({
            message:"file sended successfully haaanjiii",
            
            
        })

    }catch(error){
        console.log(error)
    }
}

module.exports = fileController