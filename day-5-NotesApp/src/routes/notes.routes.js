const express = require("express")
const {
notesController,allNotesController } = require("../controller/notes.controller")
const router = express.Router()
router.post("/create",notesController)
router.get("/allNotes",allNotesController)
module.exports=router