import { Request, Response } from "express";

import * as authService from "../services/authServices.js"

export async function signup(req: Request, res: Response) {
    const newUser = req.body
    await authService.createUser(newUser)
    res.sendStatus(201)
}
export async function signin(req: Request, res: Response) {
    const user = req.body
    const token = await authService.login(user)
    res.status(200).send(token)
}

