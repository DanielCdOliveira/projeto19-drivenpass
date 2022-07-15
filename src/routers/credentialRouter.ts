import { Router } from "express";

import { createCredential, getAllCredentials, getCredentialById, deleteCredential } from "../controllers/credentialController.js";
import verifyToken from "../middlewares/verifytoken.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { credentialSchema } from "../schemas/joiSchemas.js";
const credentialsRouter = Router()

credentialsRouter.post("/credential/create",verifyToken, schemaVerifier(credentialSchema), createCredential)
credentialsRouter.get("/credentials", getAllCredentials)
credentialsRouter.get("/credential/:id", getCredentialById)
credentialsRouter.delete("/credential/:id", deleteCredential)


export default credentialsRouter