import CollectionModel from "../models/collectionModel.js";

class CollectionController {
  async getAllCollections(req, res) {
    try {
      const collections = await CollectionModel.findAll();
      res.json(collections);
    } catch (error) {
      console.error("Erro ao buscar coleções:", error);
      res.status(500).json({ error: "Erro ao buscar coleções" });
    }
  }

  async getCollectionById(req, res) {
    try {
      const { id } = req.params;

      const collection = await CollectionModel.findById(id);

      if (!collection) {
        return res.status(404).json({ error: "Coleção não encontrada" });
      }

      res.json(collection);
    } catch (error) {
      console.error("Erro ao buscar coleção:", error);
      res.status(500).json({ error: "Erro ao buscar coleção" });
    }
  }

  async createCollection(req, res) {
    try {
      const {
        name,
        description = null,
        releaseYear,
      } = req.body;

      if (
        !name ||
        !releaseYear
      ) {
        return res
          .status(400)
          .json({ error: "Os campos de Nome e Ano de Lançamento são obrigatórios" });
      }

      const newCollection = await CollectionModel.create(
        name,
        description,
        releaseYear,
      );

      if (!newCollection) {
        return res.status(400).json({ error: "Erro ao criar coleção" });
      }

      res.status(201).json(newCollection);
    } catch (error) {
      console.error("Erro ao criar coleção:", error);
      res.status(500).json({ error: "Erro ao criar coleção" });
    }
  }

  async updateCollection(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        description,
        releaseYear,
      } = req.body;

      const updatedCollection = await CollectionModel.update(
        id,
        name,
        description,
        releaseYear,
      );

      if (!updatedCollection) {
        return res.status(404).json({ error: "Coleção não encontrada" });
      }

      res.json(updatedCollection);
    } catch (error) {
      console.error("Erro ao atualizar coleção:", error);
      res.status(500).json({ error: "Erro ao atualizar coleção" });
    }
  }

  async deleteCollection(req, res) {
    try {
      const { id } = req.params;

      const result = await CollectionModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Coleção não encontrada" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover coleção:", error);
      res.status(500).json({ error: "Erro ao remover coleção" });
    }
  }
}

export default new CollectionController();
