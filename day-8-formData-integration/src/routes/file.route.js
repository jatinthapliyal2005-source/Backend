const express = require("express");
const fileController = require("../controllers/file.controller");
const uploads = require("../config/multer.file");
let router = express.Router()
router.post("/create",uploads.array('files',5),fileController)
module.exports=router