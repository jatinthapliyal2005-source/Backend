const express = require("express")
const {
notesController,allNotesController, 
noteById,updateNote,deleteNotes} = require("../controller/notes.controller")
const notesModel = require("../models/notes.model")
const router = express.Router()
router.post("/create",notesController)
router.get("/allNotes",allNotesController)
router.get("/:id",noteById)
router.put("/:id",updateNote)
router.delete("/:id",deleteNotes)
module.exports=router