import express from 'express'

// Importar todas as rotas
import authRouter from "./authRoutes.js"
import cardsRouter from "./cardRoutes.js"
import collectionsRouter from "./collectionRoutes.js"

// Importar o Middleware
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();

// Rotas Públicas
router.use("/auth", authRouter)

// Rotas Protegidas
router.use(authMiddleware)

router.use("/cards", cardsRouter)
router.use("/collections", collectionsRouter)

export default router