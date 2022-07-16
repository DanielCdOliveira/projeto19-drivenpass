import { CreateCardData } from "../interfaces/interfaces.js";
import Cryptr from "cryptr"

const CRYPTR_KEY = process.env.CRYPTR

import * as cardsRepository from "../repositories/cardsRepository.js"
export async function createNewCard(newCard: CreateCardData) {
    const cryptr = new Cryptr(CRYPTR_KEY)
    newCard.password = cryptr.encrypt(newCard.password)
    newCard.cvc = cryptr.encrypt(newCard.cvc)
    await cardsRepository.insertNewCard(newCard)
}
export async function getAllCards(userId: number) {
    const cryptr = new Cryptr(CRYPTR_KEY)
    const cards = await cardsRepository.getAllCards(userId)
    cards.map((card) => {
        card.password = cryptr.decrypt(card.password)
        card.cvc = cryptr.decrypt(card.cvc)
        return card
    })
    return cards
}
export async function getCardById(userId: number, id: number) {
    const cryptr = new Cryptr(CRYPTR_KEY)
    const card = await cardsRepository.getCardById(id)
    if (!card) {
        throw {
            type: "not_found",
            message: "card not found"
        }
    }
    card.password = cryptr.decrypt(card.password)
    card.cvc = cryptr.decrypt(card.cvc)
    if (card.userId !== userId) {
        throw {
            type: "unauthorized",
            message: "invalid token for this card"
        }
    }
    return card
}
export async function deleteCard(id: number) {
    await cardsRepository.deleteCard(id)
}
