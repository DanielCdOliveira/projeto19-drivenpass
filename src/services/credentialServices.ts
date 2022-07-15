import { CreateCredentialData } from "../interfaces/interfaces.js";

import * as credentialRepository from "../repositories/credentialRepository.js"
export async function createNewCredential(newCredential : CreateCredentialData) {
    await credentialRepository.insertNewCredential(newCredential)
}
export async function getAllCredentials (userId : number) {
   await credentialRepository.getAllCredentials(userId) 
}