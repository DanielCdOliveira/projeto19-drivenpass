import { prisma } from "../config/database.js";
import { CreateCardData } from "../interfaces/interfaces.js";

export async function insertNewCard(newCard: CreateCardData) {
    try {
        await prisma.card.create({ data: newCard })
    } catch (error) {
        throw {
            type: "conflict",
            message: "title already registered"
        }
    }

}
export async function getAllCards(userId: number) {
    return await prisma.card.findMany({
        where: { userId },
    })
}
export async function getCardById(id: number) {
    return await prisma.card.findFirst({ where: { id } })
}
export async function deleteCard(id: number) {
    await prisma.card.delete({ where: { id } })
}