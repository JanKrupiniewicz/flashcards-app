import { GithubSignIn } from "@/components/github-sign-in";
import GoogleSignIn from "@/components/google-sign-in";
import { SignInForm } from "@/components/sign-in-form";
import { auth } from "@/lib/auth";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";

const signInPage = async () => {
  const session = await auth();
  if (session) redirect("/discover");

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          borderRadius: 1,
          boxShadow: 1,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          p: 3,
          gap: 3,
        }}
      >
        <Typography variant="h4" align="center" fontWeight="bold">
          Sign In
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <GithubSignIn />
          <GoogleSignIn />
        </Stack>

        <Divider>Or continue with email</Divider>

        <SignInForm />

        <Typography align="center" mt={2}>
          <Link href="/sign-up" passHref>
            Don't have an account? Sign up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default signInPage;
