import { prisma } from "../config/database.js";
import { CreateWifiData } from "../interfaces/interfaces.js";

export async function insertNewWifi(newWifi: CreateWifiData) {
    try {
        await prisma.wifi.create({ data: newWifi })
    } catch (error) {
        throw {
            type: "conflict",
            message: "title already registered"
        }
    }
}
export async function getAllWifi(userId: number) {
    return await prisma.wifi.findMany({
        where: { userId },
    })
}
export async function getWifiById(id: number) {
    return await prisma.wifi.findFirst({ where: { id } })
}
export async function deleteWifi(id: number) {
    await prisma.wifi.delete({ where: { id } })
}