import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignOut from "@/components/sign-out";

const discoverPage = async () => {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <div>
      <h1>Discover Page</h1>

      <p>{session.user?.name}</p>

      <SignOut />
    </div>
  );
};

export default discoverPage;
