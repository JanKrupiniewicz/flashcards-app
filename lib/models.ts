import { z } from "zod";

const Flashcard = z.object({
  id: z.string(),
  front: z.string(),
  back: z.string(),
  setId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const FlashCardSet = z.object({
  id: z.string(),
  title: z.string(),
  cards: z.array(Flashcard),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const User = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  flashcardSets: z.array(FlashCardSet),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export { User, FlashCardSet, Flashcard };
