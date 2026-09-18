const express = require("express");

const fileController = require("../controllers/file.coontrooler");
const uploads = require("../config/multer");
let router = express.Router() 
router.post("/",uploads.single('image'),fileController)
module.exports =router 