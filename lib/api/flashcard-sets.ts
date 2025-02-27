import db from "@/prisma/db";

const getFlashcardSets = async (userId: string) => {
  const flashcardSets = await db.flashCardSet.findMany({
    where: {
      userId,
    },
  });

  return flashcardSets;
};

export { getFlashcardSets };
