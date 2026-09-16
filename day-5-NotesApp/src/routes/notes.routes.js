const express = require("express")
const {
notesController,allNotesController, 
noteById,updateNote,deleteNotes,singleUpdate} = require("../controller/notes.controller")
const notesModel = require("../models/notes.model")
const router = express.Router()
router.post("/create",notesController)
router.get("/allNotes",allNotesController)
router.get("/:id",noteById)
router.put("/:id",updateNote)
router.delete("/:id",deleteNotes)
router.patch("/:id/single")
module.exports=router