import { Router } from "express";

import {signup, signin} from "../controllers/authController.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { authSchema } from "../schemas/joiSchemas.js";

const authRouter = Router()
authRouter.post("/signup",schemaVerifier(authSchema), signup)
authRouter.post("/signin",schemaVerifier(authSchema), signin)

export default authRouter