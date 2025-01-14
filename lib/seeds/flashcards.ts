import { faker } from "@faker-js/faker";
import { FlashCard, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mockFlashcards = () => {
  const data: FlashCard[] = [];

  for (let i = 0; i < 200; i++) {
    data.push({
      id: i.toString(),
      flashCardSetId: faker.number.int({ min: 0, max: 99 }).toString(),
      front: faker.lorem.sentence(),
      back: faker.lorem.sentence(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    });
  }

  return data;
};

const seedFlashcards = async () => {
  const flashCards = mockFlashcards();

  await prisma.flashCard.createMany({
    data: flashCards,
  });
};

export { seedFlashcards };
