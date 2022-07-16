import {Router} from 'express';
import authRouter from './authRouter.js';
import credentialsRouter from './credentialsRouter.js';
import notesRouter from './notesRouter.js';
import cardsRouter from './cardsRouter.js';
import wifiRouter from './wifiRouter.js';
import documentRouter from './documentsRouter.js';

const router = Router();
router.use(authRouter)
router.use(credentialsRouter)
router.use(notesRouter)
router.use(cardsRouter)
router.use(wifiRouter)
router.use(documentRouter)

export default router;