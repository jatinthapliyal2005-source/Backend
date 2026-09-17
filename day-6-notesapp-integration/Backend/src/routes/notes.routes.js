let express = require("express");
const { notesController,allNotesController,getNoteById,getDeleteNote,getUpdatedId,getSingleUpdate} = require("../controller/notes.controller");
const notesModel = require("../models/notes.model");
const router = express.Router()
router.post("/create",notesController)
router.get("/allNotes",allNotesController)
router.get("/:id",getNoteById)
router.delete("/:id",getDeleteNote)
router.put("/:id",getUpdatedId)
router.patch("/:id",getSingleUpdate)
module.exports=router