import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const AddFlashcardSetPage = async () => {
  const session = await auth();
  if (!session) redirect("/");

  return <>Add new flashcard set</>;
};

export default AddFlashcardSetPage;
