import { prisma } from "../config/database.js";
import { CreateDocumentData } from "../interfaces/interfaces.js";

export async function insertNewDocument(newDocument: CreateDocumentData) {
    try {
        await prisma.document.create({ data: newDocument })
    } catch (error) {
        throw {
            type: "conflict",
            message: "document type already registered"
        }
    }

}
export async function getAlldocuments(userId: number) {
    return await prisma.document.findMany({
        where: { userId },
    })
}
export async function getDocumentsById(id: number) {
    return await prisma.document.findFirst({ where: { id } })
}
export async function deleteDocument(id: number) {
    await prisma.document.delete({ where: { id } })
}