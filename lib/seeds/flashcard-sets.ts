import { faker } from "@faker-js/faker";
import { PrismaClient, User } from "@prisma/client";
import { FlashCardSet } from "@prisma/client";

const prisma = new PrismaClient();

const mockFlashcardSets = (users: User[]) => {
  const data: FlashCardSet[] = [];

  for (let i = 0; i < 100; i++) {
    data.push({
      id: faker.string.uuid(),
      userId: users[faker.number.int({ min: 0, max: users.length - 1 })].id,
      title: faker.lorem.words(3),
      description: faker.lorem.sentence(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    });
  }

  return data;
};

const seedFlashcardSets = async (users: User[]) => {
  const flashcardSets = mockFlashcardSets(users);

  await prisma.flashCardSet.createMany({
    data: flashcardSets,
  });

  return flashcardSets;
};

export { seedFlashcardSets };
