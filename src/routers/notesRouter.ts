import { Router } from "express";

import { createNote, getAllNotes, getNoteById, deleteNote } from "../controllers/notesController.js";

import verifyToken from "../middlewares/verifytoken.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { noteSchema } from "../schemas/joiSchemas.js";

const notesRouter = Router()

notesRouter.post("/note/create", verifyToken, schemaVerifier(noteSchema), createNote)
notesRouter.get("/notes", verifyToken, getAllNotes)
notesRouter.get("/note/:id", verifyToken, getNoteById)
notesRouter.delete("/note/:id", verifyToken, deleteNote)

export default notesRouter