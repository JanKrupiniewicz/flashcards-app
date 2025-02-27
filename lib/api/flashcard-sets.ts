import db from "@/prisma/db";

const getUsersFlashcardSets = async (userId: string) => {
  const flashcardSets = await db.flashCardSet.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return flashcardSets;
};

const getFlashcardSet = async (flashCardSetId: string) => {
  const flashCardSet = await db.flashCardSet.findUnique({
    where: {
      id: flashCardSetId,
    },
  });

  return flashCardSet;
};

export { getUsersFlashcardSets, getFlashcardSet };
