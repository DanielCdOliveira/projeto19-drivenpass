import joi from "joi"

import { CreateUserData, CreateCredentialData } from "../interfaces/interfaces.js"

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