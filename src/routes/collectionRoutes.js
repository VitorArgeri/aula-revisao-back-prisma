import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionsRouter = express.Router();

collectionsRouter.get("/", CollectionController.getAllCollections);

collectionsRouter.get("/:id", CollectionController.getCollectionById);

collectionsRouter.post("/", CollectionController.createCollection);

collectionsRouter.put("/:id", CollectionController.updateCollection);

collectionsRouter.delete("/:id", CollectionController.deleteCollection);

export default collectionsRouter;
