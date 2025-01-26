import { signIn } from "@/lib/auth";
import { Github } from "./ui/github";
import Button from "@mui/material/Button";

const GithubSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button variant="outlined" startIcon={<Github />}>
        Continue with GitHub
      </Button>
    </form>
  );
};

export { GithubSignIn };
