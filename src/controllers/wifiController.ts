import { Request, Response } from "express";

import * as wifiService from "../services/wifiServices.js"

export async function createWifi(req: Request, res: Response) {
    const userId = res.locals.userId
    const wifi = req.body
    await wifiService.createNewWifi({ userId, ...wifi })
    res.sendStatus(201)
}
export async function getAllWifi(req: Request, res: Response) {
    const userId = res.locals.userId
    const wifiConnections = await wifiService.getAllWifi(userId)
    res.status(200).send(wifiConnections)
}
export async function getWifiById(req: Request, res: Response) {
    const userId = res.locals.userId
    const id = parseInt(req.params.id)
    const wifi = await wifiService.getWifiById(userId, id)
    res.status(200).send(wifi)
}
export async function deleteWifi(req: Request, res: Response) {
    const userId = res.locals.userId
    const id = parseInt(req.params.id)
    await wifiService.getWifiById(userId, id)
    await wifiService.deleteWifi(id)
    res.sendStatus(204)
}