import { CreateNoteData } from "../interfaces/interfaces.js";

import * as notesRepository from "../repositories/notesRepository.js"

export async function createNewNote(newNote: CreateNoteData) {
    await notesRepository.insertNewNote(newNote)
}
export async function getAllNotes(userId: number) {
    const notes = await notesRepository.getAllNotes(userId)
    return notes
}
export async function getNoteById(userId: number, id: number) {
    const note = await notesRepository.getNoteById(id)
    if (!note) {
        throw {
            type: "not_found",
            message: "note not found"
        }
    }
    if (note.userId !== userId) {
        throw {
            type: "unauthorized",
            message: "invalid token for this note"
        }
    }
    return note
}
export async function deleteNote(id: number) {
    await notesRepository.deleteNote(id)
}
