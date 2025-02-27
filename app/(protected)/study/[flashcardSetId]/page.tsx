const studyFlashcardSetPage = async ({
  params,
}: {
  params: Promise<{ flashcardSetId: string }>;
}) => {
  const flashcardSetId = (await params).flashcardSetId;

  return (
    <div>
      <h1>Flashcard Set Page</h1>
      <p>Flashcard set id: {flashcardSetId}</p>
    </div>
  );
};

export default studyFlashcardSetPage;
