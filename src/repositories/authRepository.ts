import { prisma } from "../config/database.js"

import { CreateUserData } from "../services/authServices.js"

export async function getUserByEmail(email : string) {
    return prisma.user.findFirst({where:{email}})
}
export async function insertNewUser(newUser : CreateUserData) {
    return prisma.user.create({data:{...newUser}})
}