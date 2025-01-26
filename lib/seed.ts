import { PrismaClient } from "@prisma/client";
import { seedUsers } from "./seeds/users";
import { seedFlashcardSets } from "./seeds/flashcard-sets";
import { seedFlashcards } from "./seeds/flashcards";

const prisma = new PrismaClient();

const resetTable = async (table: string) => {
  await prisma.$executeRawUnsafe(`DELETE FROM ${table};`);
};

async function main() {
  const tablesToReset = ["User", "FlashCardSet", "FlashCard"];

  for (const table of tablesToReset) {
    await resetTable(table);
  }

  const users = await seedUsers();
  const flashcardSets = await seedFlashcardSets(users);
  await seedFlashcards(flashcardSets);

  console.log("Seeds have been executed");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
