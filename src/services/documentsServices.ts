import { CreateDocumentData } from "../interfaces/interfaces.js";

import * as documentRepository from "../repositories/documentsRepository.js"

export async function createNewDocument(newDocument: CreateDocumentData) {
    await documentRepository.insertNewDocument(newDocument)
}
export async function getAllDocuments(userId: number) {
    const documents = await documentRepository.getAlldocuments(userId)
    return documents
}
export async function getDocumentById(userId: number, id: number) {
    const document = await documentRepository.getDocumentsById(id)
    console.log(document);
    
    if (!document) {
        throw {
            type: "not_found",
            message: "document not found"
        }
    }
    if (document.userId !== userId) {
        throw {
            type: "unauthorized",
            message: "invalid token for this document"
        }
    }
    return document
}
export async function deleteDocument(id: number) {
    await documentRepository.deleteDocument(id)
}
