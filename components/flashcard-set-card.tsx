import { FlashCardSet } from "@prisma/client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FlashcardSetCard = ({ flashcardSet }: { flashcardSet: FlashCardSet }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {flashcardSet.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Created on {flashcardSet.createdAt.toLocaleDateString()}
        </Typography>
        <Typography variant="body2">{flashcardSet.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/study/${flashcardSet.id}`}>
          Study Now
        </Button>
        <Button size="small">Edit Set</Button>
      </CardActions>
    </Card>
  );
};

export { FlashcardSetCard };
