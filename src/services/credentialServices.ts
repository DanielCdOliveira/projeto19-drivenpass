import { CreateCredentialData } from "../interfaces/interfaces.js";
import Cryptr from "cryptr"

import { decryptData } from "../utils/utils.js";

const CRYPTR_KEY = process.env.CRYPTR

import * as credentialRepository from "../repositories/credentialRepository.js"
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
export async function getCredentialById(userId: number, id:number) {
    const cryptr = new Cryptr(CRYPTR_KEY)
    const credential = await credentialRepository.getCredentialById(id)
    credential.password = cryptr.decrypt(credential.password)
    if(credential.userId !== userId){
        throw{
            type:"unauthorized",
            message:"invalid token for this credential"
        }
    }
    delete credential.userId 
    return credential
}