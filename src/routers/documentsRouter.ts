import { Router } from "express";

import { createDocument, getAllDocuments, getDocumentById, deleteDocument } from "../controllers/documentsController.js";
import verifyToken from "../middlewares/verifytoken.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { documentSchema } from "../schemas/joiSchemas.js";
const documentRouter = Router()

documentRouter.post("/document/create", verifyToken, schemaVerifier(documentSchema), createDocument)
documentRouter.get("/documents", verifyToken, getAllDocuments)
documentRouter.get("/document/:id", verifyToken, getDocumentById)
documentRouter.delete("/document/:id", verifyToken, deleteDocument)


export default documentRouter