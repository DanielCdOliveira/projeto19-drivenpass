import { Router } from "express";

import { createCard,getAllCards,getCardById,deleteCard } from "../controllers/cardsController.js";
import verifyToken from "../middlewares/verifytoken.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { cardSchema } from "../schemas/joiSchemas.js";
const cardsRouter = Router()

cardsRouter.post("/card/create", verifyToken, schemaVerifier(cardSchema), createCard)
cardsRouter.get("/cards", verifyToken, getAllCards)
cardsRouter.get("/card/:id", verifyToken, getCardById)
cardsRouter.delete("/card/:id", verifyToken, deleteCard)


export default cardsRouter