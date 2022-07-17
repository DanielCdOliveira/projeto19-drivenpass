import { Router } from "express";

import verifyToken from "../middlewares/verifytoken.js";
import { getAlldata } from "../controllers/alldataController.js";
const alldataRouter = Router()
alldataRouter.get("/alldata",verifyToken, getAlldata)


export default alldataRouter