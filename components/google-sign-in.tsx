import { signIn } from "@/lib/auth";
import Button from "@mui/material/Button";
import { Google } from "@mui/icons-material";

const GoogleSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit" variant="outlined" startIcon={<Google />}>
        Continue with Google
      </Button>
    </form>
  );
};

export default GoogleSignIn;
