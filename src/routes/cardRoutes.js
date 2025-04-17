import express from "express";
import CardController from "../controllers/cardController.js";

const cardsRouter = express.Router();

cardsRouter.get("/", CardController.getAllCards);

cardsRouter.get("/:id", CardController.getCardById);

cardsRouter.post("/", CardController.createCard);

cardsRouter.put("/:id", CardController.updateCard);

cardsRouter.delete("/:id", CardController.deleteCard);

export default cardsRouter;
