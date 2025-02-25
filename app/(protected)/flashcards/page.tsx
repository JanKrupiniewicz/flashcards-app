import SignOut from "@/components/sign-out";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const flashCardsPage = async () => {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <div>
      <h1>Flash Cards</h1>
    </div>
  );
};

export default flashCardsPage;
