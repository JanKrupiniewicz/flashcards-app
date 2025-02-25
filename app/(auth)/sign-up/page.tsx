import { GithubSignIn } from "@/components/github-sign-in";
import { SignUpForm } from "@/components/sign-up-form";
import { auth } from "@/lib/auth";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";

const signUpPage = async () => {
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
          Sign Up
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
          <GithubSignIn />
        </Stack>

        <Divider>Or continue with email</Divider>

        <SignUpForm />

        <Typography align="center" mt={2}>
          <Link href="/sign-in" passHref>
            Already have a account? Sign in
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default signUpPage;
