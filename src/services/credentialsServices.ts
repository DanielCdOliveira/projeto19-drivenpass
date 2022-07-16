import { CreateCredentialData } from "../interfaces/interfaces.js";
import Cryptr from "cryptr"

import { decryptData } from "../utils/utils.js";

const CRYPTR_KEY = process.env.CRYPTR

import * as credentialRepository from "../repositories/credentialsRepository.js"
export async function createNewCredential(newCredential: CreateCredentialData) {
    const cryptr = new Cryptr(CRYPTR_KEY)
    newCredential.password = cryptr.encrypt(newCredential.password)
    await credentialRepository.insertNewCredential(newCredential)
}
export async function getAllCredentials(userId: number) {
    const cryptr = new Cryptr(CRYPTR_KEY)
    const credentials = await credentialRepository.getAllCredentials(userId)
    credentials.map((item) => {
        item.password = cryptr.decrypt(item.password)
        return item
    })
    return credentials
}
export async function getCredentialById(userId: number, id: number) {
    const cryptr = new Cryptr(CRYPTR_KEY)
    const credential = await credentialRepository.getCredentialById(id)
    if (!credential) {
        throw {
            type: "not_found",
            message: "credential not found"
        }
    }
    credential.password = cryptr.decrypt(credential.password)
    if (credential.userId !== userId) {
        throw {
            type: "unauthorized",
            message: "invalid token for this credential"
        }
    }
    return credential
}
export async function deleteCredential(id: number) {
    await credentialRepository.deleteCredential(id)
}
