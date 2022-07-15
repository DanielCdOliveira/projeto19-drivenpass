import { NextFunction, Request, Response } from "express";
import  jwt  from "jsonwebtoken";

import * as authService from "../services/authServices.js"

export default async function verifyToken(req : Request, res : Response, next : NextFunction) {
    const { authorization } = req.headers;
    const id = authService.checkToken(authorization)
    res.locals.userId = id
    next()
}