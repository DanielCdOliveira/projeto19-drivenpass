import { CreateWifiData } from "../interfaces/interfaces.js";
import Cryptr from "cryptr"

const CRYPTR_KEY = process.env.CRYPTR

import * as wifiRepository from "../repositories/wifiRepository.js"

export async function createNewWifi(newWifi: CreateWifiData) {
    const cryptr = new Cryptr(CRYPTR_KEY)
    newWifi.password = cryptr.encrypt(newWifi.password)
    await wifiRepository.insertNewWifi(newWifi)
}
export async function getAllWifi(userId: number) {
    const cryptr = new Cryptr(CRYPTR_KEY)
    const wifiConnections = await wifiRepository.getAllWifi(userId)
    wifiConnections.map((wifi) => {
        wifi.password = cryptr.decrypt(wifi.password)
        return wifi
    })
    return wifiConnections
}
export async function getWifiById(userId: number, id: number) {
    const cryptr = new Cryptr(CRYPTR_KEY)
    const wifi = await wifiRepository.getWifiById(id)
    if (!wifi) {
        throw {
            type: "not_found",
            message: "wifi not found"
        }
    }
    wifi.password = cryptr.decrypt(wifi.password)
    if (wifi.userId !== userId) {
        throw {
            type: "unauthorized",
            message: "invalid token for this wifi"
        }
    }
    return wifi
}
export async function deleteWifi(id: number) {
    await wifiRepository.deleteWifi(id)
}
