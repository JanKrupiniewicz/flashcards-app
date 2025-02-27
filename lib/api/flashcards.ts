import db from "@/prisma/db";

const getFlashcards = async (flashcardSetId: string) => {
  const flashcards = await db.flashCard.findMany({
    where: {
      flashCardSetId: flashcardSetId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return flashcards;
};

export { getFlashcards };
