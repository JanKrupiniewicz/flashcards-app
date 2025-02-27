import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getFlashcards } from "@/lib/api/flashcards";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Container, Typography } from "@mui/material";
import { FlashcardCard } from "@/components/flashcard-card";
import { getFlashcardSet } from "@/lib/api/flashcard-sets";
import { AddFlashcardCard } from "@/components/add-flashcard-card";

const studyFlashcardSetPage = async ({
  params,
}: {
  params: Promise<{ flashcardSetId: string }>;
}) => {
  const session = await auth();
  if (!session) redirect("/");

  const flashcardSetId = (await params).flashcardSetId;
  const flashcardSet = await getFlashcardSet(flashcardSetId);
  const flashcards = await getFlashcards(flashcardSetId);

  return (
    <Container>
      <Stack direction="column" sx={{ mb: 3, gap: 1 }}>
        <Typography variant="h3" fontWeight="bold">
          {flashcardSet?.title}
        </Typography>
        <Typography variant="caption">
          Created At: {flashcardSet?.createdAt.toDateString()} | Updated At:{" "}
          {flashcardSet?.updatedAt.toDateString()}
        </Typography>
        <Typography variant="body2">{flashcardSet?.description}</Typography>
        <Stack direction="row" sx={{ gap: 2, my: 3 }} alignItems="center">
          <Button variant="contained" size="small">
            Start Study
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<DeleteIcon fontSize="inherit" />}
          >
            Delete Set
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<EditIcon fontSize="inherit" />}
          >
            Edit Set
          </Button>
        </Stack>
      </Stack>
      <Stack direction="column" sx={{ gap: 2 }}>
        <AddFlashcardCard flashcardSetId={flashcardSetId} />
        {flashcards.map((flashcard) => (
          <FlashcardCard key={flashcard.id} flashcard={flashcard} />
        ))}
      </Stack>
    </Container>
  );
};

export default studyFlashcardSetPage;
