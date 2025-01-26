import { faker } from "@faker-js/faker";
import { FlashCard, FlashCardSet, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mockFlashcards = (flashcardSets: FlashCardSet[]) => {
  const data: FlashCard[] = [];

  for (let i = 0; i < 200; i++) {
    data.push({
      id: i.toString(),
      flashCardSetId:
        flashcardSets[
          faker.number.int({ min: 0, max: flashcardSets.length - 1 })
        ].id,
      front: faker.lorem.sentence(),
      back: faker.lorem.sentence(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    });
  }

  return data;
};

const seedFlashcards = async (flashcardSets: FlashCardSet[]) => {
  const flashCards = mockFlashcards(flashcardSets);

  await prisma.flashCard.createMany({
    data: flashCards,
  });

  return flashCards;
};

export { seedFlashcards };
