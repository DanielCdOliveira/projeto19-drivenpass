import joi from "joi"

import { CreateUserData, CreateCredentialData, CreateNoteData } from "../interfaces/interfaces.js"

export const authSchema = joi.object<CreateUserData>({
    email: joi.string().email().required(),
    password: joi.string().min(10).required()
})

export const credentialSchema = joi.object<CreateCredentialData>({
    title: joi.string().min(1).required(),
    url: joi.string().uri().required(),
    userName: joi.string().min(1).required(),
    password: joi.string().min(1).required()
})
export const noteSchema = joi.object<CreateNoteData>({
    title: joi.string().min(1).max(50).required(),
    text: joi.string().min(1).max(1000).required(),
})