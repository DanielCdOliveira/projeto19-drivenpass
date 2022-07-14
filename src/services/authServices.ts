import { User } from "@prisma/client";
import bcrypt from "bcrypt"
import * as authRepository from "../repositories/authRepository.js"

export type CreateUserData = Omit<User,"id"|"createdAt">

export async function createUser(newUser: CreateUserData) {
const userExists = await authRepository.getUserByEmail(newUser.email)
if(userExists){
    throw{
        type:"unauthorized",
        message:`${newUser.email} already registered`
    }
}
newUser.password = await password(newUser.password, false)
await authRepository.insertNewUser(newUser)
}

async function password(password:string, checkPassword :boolean){
    if(checkPassword){
      
    }else{
        return bcrypt.hashSync(password, parseInt(process.env.SALT));
    }
}