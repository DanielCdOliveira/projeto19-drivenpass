import { Request, Response } from "express";

import * as credentialService from "../services/credentialServices.js"

export async function createCredential(req: Request, res: Response) {
// TODO ADICONAR UMA FUNÇAO QUE FAZ TRIM
const userId = res.locals.userId
const credential = req.body
await credentialService.createNewCredential({userId, ...credential})
res.sendStatus(201)

}
export async function getAllCredentials(req: Request, res: Response) {
const userId = res.locals.userId
const credentials = await credentialService.getAllCredentials(userId)
res.status(200).send(credentials)
}
export async function getCredentialById(req: Request, res: Response) {

}
export async function deleteCredential(req: Request, res: Response) {

}