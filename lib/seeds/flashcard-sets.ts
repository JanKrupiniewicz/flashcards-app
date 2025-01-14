import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import { FlashCardSet } from "@prisma/client";

const prisma = new PrismaClient();

const mockFlashcardSets = () => {
  const data: FlashCardSet[] = [];

  for (let i = 0; i < 100; i++) {
    data.push({
      id: i.toString(),
      userId: faker.number.int({ min: 0, max: 49 }).toString(),
      title: faker.lorem.words(3),
      description: faker.lorem.sentence(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    });
  }

  return data;
};

const seedFlashcardSets = async () => {
  const flashcardSets = mockFlashcardSets();

  await prisma.flashCardSet.createMany({
    data: flashcardSets,
  });
};

export { seedFlashcardSets };
