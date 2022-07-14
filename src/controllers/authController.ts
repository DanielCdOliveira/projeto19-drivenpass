import { Request, Response } from "express";

import * as authService from "../services/authServices.js"

export async function signup(req: Request, res: Response) {
    const newUser = req.body
    await authService.createUser(newUser)
    res.sendStatus(201)
}
export async function login(req: Request, res: Response) {

}

