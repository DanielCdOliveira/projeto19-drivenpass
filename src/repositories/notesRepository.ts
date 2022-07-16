import { prisma } from "../config/database.js";
import { CreateNoteData } from "../interfaces/interfaces.js";

export async function insertNewNote(newNote: CreateNoteData) {
    try {
        await prisma.note.create({ data: newNote })
    } catch (error) {
        throw {
            type: "conflict",
            message: "title already registered"
        }
    }
}
export async function getAllNotes(userId: number) {
    return await prisma.note.findMany({
        where: { userId },
        select: { id: true, title: true, text: true }
    })
}
export async function getNoteById(id: number) {
    return await prisma.note.findFirst({ where: { id } })
}
export async function deleteNote(id: number) {
    await prisma.note.delete({ where: { id } })
}