import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";

const Home = async () => {
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
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js App Router example in TypeScript
        </Typography>
        <Link href="/sign-in" color="secondary" component={NextLink}>
          Sign In
        </Link>
        <Link href="/sign-up" color="secondary" component={NextLink}>
          Sign Up
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
