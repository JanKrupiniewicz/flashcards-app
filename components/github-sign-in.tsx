import { signIn } from "@/lib/auth";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

const GithubSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit" variant="outlined" startIcon={<GitHubIcon />}>
        Continue with GitHub
      </Button>
    </form>
  );
};

export { GithubSignIn };
