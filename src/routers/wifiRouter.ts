import { Router } from "express";

import { createWifi, getAllWifi, getWifiById, deleteWifi } from "../controllers/wifiController.js";
import verifyToken from "../middlewares/verifytoken.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { wifiSchema } from "../schemas/joiSchemas.js";
const wifiRouter = Router()

wifiRouter.post("/wifi/create", verifyToken, schemaVerifier(wifiSchema), createWifi)
wifiRouter.get("/wifi-connections", verifyToken, getAllWifi)
wifiRouter.get("/wifi/:id", verifyToken, getWifiById)
wifiRouter.delete("/wifi/:id", verifyToken, deleteWifi)


export default wifiRouter