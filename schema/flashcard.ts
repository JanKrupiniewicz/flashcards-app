import { z } from "zod";

const flashcard = z.object({
  front: z.string().min(1, { message: "Question is too short" }),
  back: z.string().min(1, { message: "Answer is too short" }),
});

type Flashcard = z.infer<typeof flashcard>;

export { flashcard, type Flashcard };
