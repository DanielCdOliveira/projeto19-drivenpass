import { Request, Response } from "express";

import * as cardsService from "../services/cardsServices.js"

export async function createCard(req: Request, res: Response) {
    const userId = res.locals.userId
    const card = req.body
    await cardsService.createNewCard({ userId, ...card })
    res.sendStatus(201)
}
export async function getAllCards(req: Request, res: Response) {
    const userId = res.locals.userId
    const cards = await cardsService.getAllCards(userId)
    res.status(200).send(cards)
}
export async function getCardById(req: Request, res: Response) {
    const userId = res.locals.userId
    const id = parseInt(req.params.id)
    const card = await cardsService.getCardById(userId, id)
    res.status(200).send(card)
}
export async function deleteCard(req: Request, res: Response) {
    const userId = res.locals.userId
    const id = parseInt(req.params.id)
    await cardsService.getCardById(userId, id)
    await cardsService.deleteCard(id)
    res.sendStatus(204)
}