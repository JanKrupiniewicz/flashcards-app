import { FlashCard } from "@prisma/client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FlashcardCard = ({ flashcard }: { flashcard: FlashCard }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{ justifyContent: "center" }}>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Created at: {flashcard.createdAt.toLocaleDateString()} | Updated at:{" "}
          {flashcard.updatedAt.toLocaleDateString()}
        </Typography>
        <Typography variant="h5" component="div">
          {flashcard.front}
        </Typography>
        <Typography variant="body1" component="div">
          {flashcard.back}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export { FlashcardCard };
