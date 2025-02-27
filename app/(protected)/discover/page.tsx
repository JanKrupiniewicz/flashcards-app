import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { getFlashcardSets } from "@/lib/api/flashcard-sets";
import { FlashcardSetCard } from "@/components/ui/flashcard-set-card";

const discoverPage = async () => {
  const session = await auth();
  if (!session) redirect("/");

  const flashcardSets = await getFlashcardSets(session.user?.id as string);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6, p: 2 }}>
      <Box component="section">
        <Typography variant="h3" gutterBottom>
          Your Flashcard Sets
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 4,
          }}
        >
          {flashcardSets.map((flashcardSet) => (
            <FlashcardSetCard
              key={flashcardSet.id}
              flashcardSet={flashcardSet}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default discoverPage;
