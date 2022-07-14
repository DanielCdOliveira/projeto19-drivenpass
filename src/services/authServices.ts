import { User } from "@prisma/client";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import * as authRepository from "../repositories/authRepository.js"

export type CreateUserData = Omit<User, "id" | "createdAt">

const SALT = parseInt(process.env.SALT)
const JWT = process.env.JWT

export async function createUser(newUser: CreateUserData) {
    const userExists = await authRepository.getUserByEmail(newUser.email)
    if (userExists) {
        throw {
            type: "unauthorized",
            message: `${newUser.email} already registered`
        }
    }
    newUser.password = bcrypt.hashSync(newUser.password, SALT )
    await authRepository.insertNewUser(newUser)
}
export async function login(user: CreateUserData) {
    const userDb = await authRepository.getUserByEmail(user.email)
    if (userDb && bcrypt.compareSync(user.password, userDb.password)) {
        const token = jwt.sign({ ...userDb }, JWT);
        return token
    }
    throw {
        type: "unauthorized",
        message: `Incompatible username and password`
    }
}