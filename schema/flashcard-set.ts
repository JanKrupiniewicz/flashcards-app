import { z } from "zod";

const flashcardSet = z.object({
  title: z.string().min(1, { message: "Title is too short" }),
  description: z.string().max(1000, { message: "Description is too long" }),
});

type FlashcardSet = z.infer<typeof flashcardSet>;

export { flashcardSet, type FlashcardSet };
