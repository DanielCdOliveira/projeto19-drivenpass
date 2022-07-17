import { Request ,Response } from "express";

import { getAllCredentials } from "../services/credentialsServices.js";
import { getAllNotes } from "../services/notesServices.js";
import { getAllCards } from "../services/cardsServices.js";
import { getAllWifi } from "../services/wifiServices.js";
import { getAllDocuments } from "../services/documentsServices.js";



export async function getAlldata(req : Request, res: Response) {
    const userId = res.locals.userId
    const credentials = await getAllCredentials(userId)
    const notes = await getAllNotes(userId)
    const cards = await  getAllCards(userId)
    const wifi = await getAllWifi(userId)
    const documents = await getAllDocuments(userId)
    res.status(200).send({credentials,notes,cards,wifi,documents})
}