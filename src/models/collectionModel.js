import prisma from "../../prisma/prisma.js";

class CollectionModel {
  async findAll() {
    const collections = await prisma.collection.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        cards: true
      }
    });

    console.log(collections);

    return collections;
  }

  async findById(id) {
    const collection = await prisma.collection.findUnique({
      where: {
        id: Number(parseInt(id)),
      },
      include: {
        cards: true
      }
    });

    return collection;
  }

  async create(
    name,
    description = null,
    releaseYear,
  ) {
    const newCollection = await prisma.collection.create({
      data: {
        name,
        description,
        releaseYear,
      },
    });

    return newCollection;
  }

  async update(
    id,
    name,
    description,
    releaseYear,
  ) {

    const collection = await this.findById(id);

    if (!collection) {
      return null;
    }

    const data = {};
    if (name !== undefined) {
      data.name = name;
    }
    if (description !== undefined) {
      data.description = description;
    }
    if (releaseYear !== undefined) {
      data.releaseYear = releaseYear;
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

export default new CollectionModel();
