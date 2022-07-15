import { prisma } from "../config/database.js";
import { CreateCredentialData } from "../interfaces/interfaces.js";

export async function insertNewCredential(newCredential: CreateCredentialData) {
    await prisma.credential.create({ data: newCredential })
}
export async function getAllCredentials(userId: number) {
    return await prisma.credential.findMany({ where: { userId }, 
        select: { id: true, url: true, userName: true, password: true } })
}
export async function getCredentialById(id: number) {
    return await prisma.credential.findFirst({ where: { id } })
}