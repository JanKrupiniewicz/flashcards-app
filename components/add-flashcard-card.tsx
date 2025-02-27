"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Button, Stack, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flashcard, flashcard } from "@/schema/flashcard";

const AddFlashcardCard = ({ flashcardSetId }: { flashcardSetId: string }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Flashcard>({
    resolver: zodResolver(flashcard),
    defaultValues: {
      front: "",
      back: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);

    // Send the data to the server
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{ justifyContent: "center" }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack sx={{ my: 2 }}>
            <Typography variant="h5" component="div">
              Add a new flashcard
            </Typography>
            <Typography variant="caption" component="div">
              Click the button below to add a new flashcard to this set.
            </Typography>
          </Stack>
        </Stack>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TextField
            label="Front - Question"
            type="text"
            variant="outlined"
            fullWidth
            {...register("front")}
          />
          <TextField
            label="Back - Answer"
            type="text"
            variant="outlined"
            fullWidth
            {...register("back")}
          />
          <Button
            variant="outlined"
            type="submit"
            size="small"
            disabled={isSubmitting}
            startIcon={<AddIcon fontSize="small" />}
          >
            {isSubmitting ? "Adding..." : "Add Flashcard"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export { AddFlashcardCard };
