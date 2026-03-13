const express  = require ("express");

const router = express.Router();

const{ getNotes, getNoteById, createNote, deleteNote} = require (controllers/noteController);
router.get("/",getNotes);
router.get("/:id",getNoteById);
router.post("/",createNote);
router.delete("/:id",deleteNote);

module.exports = router;