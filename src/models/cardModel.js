import prisma from "../../prisma/prisma.js";

class CardModel {
  async findAll() {
    const cards = await prisma.card.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(cards);

    return cards;
  }

  async findById(id) {
    const card = await prisma.card.findUnique({
      where: {
        id: Number(id),
      },
    });

    return card;
  }

  async create(
    name,
    rarity,
    attackPoints,
    defensePoints,
    imageUrl = null
  ) {
    const newCard = await prisma.card.create({
      data: {
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl
      },
    });

    return newCard;
  }

  async update(
    name,
    rarity,
    attackPoints,
    defensePoints,
    imageUrl
  ) {
    const card = await this.findById(id);

    if (!card) {
      return null;
    }

    const data = {};
    if (name !== undefined) {
      data.title = title;
    }
    if (rarity !== undefined) {
      data.rarity = rarity;
    }
    if (attackPoints !== undefined) {
      data.attackPoints = attackPoints;
    }
    if (defensePoints !== undefined) {
      data.defensePoints = defensePoints;
    }
    if (imageUrl !== undefined) {
      data.imageUrl = imageUrl;
    }

    const cardUpdated = await prisma.card.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return cardUpdated;
  }

  async delete(id) {
    const card = await this.findById(id);

    if (!card) {
      return null;
    }

    await prisma.card.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CardModel();
