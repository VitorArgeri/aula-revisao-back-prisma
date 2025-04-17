import prisma from "../../prisma/prisma.js";

class CardModel {
  async findAll() {
    const collections = await prisma.collection.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(collections);

    return collections;
  }

  async findById(id) {
    const collection = await prisma.collection.findUnique({
      where: {
        id: Number(id),
      },
    });

    return collection;
  }

  async create(
    name,
    description = null,
    releaseYear,
    cards = null
  ) {
    const newCollection = await prisma.collection.create({
      data: {
        name,
        description,
        releaseYear,
        cards
      },
    });

    return newCollection;
  }

  async update(
    name,
    description,
    releaseYear,
    cards
  ) {
    const collection = await this.findById(id);

    if (!collection) {
      return null;
    }

    const data = {};
    if (name !== undefined) {
      data.title = title;
    }
    if (description !== undefined) {
      data.description = description;
    }
    if (releaseYear !== undefined) {
      data.releaseYear = releaseYear;
    }
    if (cards !== undefined) {
      data.cards = cards;
    }

    const collectionUpdated = await prisma.collection.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return collectionUpdated;
  }

  async delete(id) {
    const collection = await this.findById(id);

    if (!collection) {
      return null;
    }

    await prisma.collection.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CardModel();
