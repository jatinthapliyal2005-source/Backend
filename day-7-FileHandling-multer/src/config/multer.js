let multer = require("multer");
let storage = multer.memoryStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")

    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)

    }
})
let uploads = multer({storage})
module.exports=uploads