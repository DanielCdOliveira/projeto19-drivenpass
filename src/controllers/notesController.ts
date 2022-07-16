import { Request, Response } from "express";

import * as noteServices from "../services/notesServices.js"

export async function createNote(req: Request, res: Response) {
    const userId = res.locals.userId
    const note = req.body
    await noteServices.createNewNote({ userId, ...note })
    res.sendStatus(201)
}
export async function getAllNotes(req: Request, res: Response) {
    const userId = res.locals.userId
    const notes = await noteServices.getAllNotes(userId)
    res.status(200).send(notes)
}
export async function getNoteById(req: Request, res: Response) {
    const userId = res.locals.userId
    const id = parseInt(req.params.id)
    const note = await noteServices.getNoteById(userId, id)
    res.status(200).send(note)
}
export async function deleteNote(req: Request, res: Response) {
    const userId = res.locals.userId
    const id = parseInt(req.params.id)
    await noteServices.getNoteById(userId, id)
    await noteServices.deleteNote(id)
    res.sendStatus(204)
}