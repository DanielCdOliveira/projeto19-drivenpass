import { Request, Response } from "express";

import * as documentService from "../services/documentsServices.js"

export async function createDocument(req: Request, res: Response) {
    const userId = res.locals.userId
    const document = req.body
    await documentService.createNewDocument({ userId, ...document })
    res.sendStatus(201)
}
export async function getAllDocuments(req: Request, res: Response) {
    const userId = res.locals.userId
    const documents = await documentService.getAllDocuments(userId)
    res.status(200).send(documents)
}
export async function getDocumentById(req: Request, res: Response) {
    const userId = res.locals.userId
    const id = parseInt(req.params.id)
    const document = await documentService.getDocumentById(userId, id)
    res.status(200).send(document)
}
export async function deleteDocument(req: Request, res: Response) {
    const userId = res.locals.userId
    const id = parseInt(req.params.id)
    await documentService.getDocumentById(userId, id)
    await documentService.deleteDocument(id)
    res.sendStatus(204)
}