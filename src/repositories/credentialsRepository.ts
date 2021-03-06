import { prisma } from "../config/database.js";
import { CreateCredentialData } from "../interfaces/interfaces.js";

export async function insertNewCredential(newCredential: CreateCredentialData) {
    try {
        await prisma.credential.create({ data: newCredential })
    } catch (error) {
        throw {
            type: "conflict",
            message: "title already registered"
        }
    }

}
export async function getAllCredentials(userId: number) {
    return await prisma.credential.findMany({
        where: { userId },
    })
}
export async function getCredentialById(id: number) {
    return await prisma.credential.findFirst({ where: { id } })
}
export async function deleteCredential(id: number) {
    await prisma.credential.delete({ where: { id } })
}