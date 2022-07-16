import Joi from "joi"
import joi from "joi"

import { CreateUserData, CreateCredentialData, CreateNoteData, CreateCardData } from "../interfaces/interfaces.js"

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
export const cardSchema = joi.object<CreateCardData>({
    title: joi.string().min(1).required(),
    cardNumber: joi.string().min(16).max(16).required(),
    cardName: joi.string().min(1).max(45).required(),
    cvc:joi.string().min(3).max(3).required(),
    expirationDate: joi.string().min(5).max(5).required(),
    password: joi.string().min(4).max(4).required(),
    isVirtual: joi.boolean().required(),
    cardType: joi.string().required()    
})