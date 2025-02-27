import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { auth } from "@/lib/auth";

const Home = async () => {
  const session = await auth();

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
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
          }}
        >
          Next-Flashcards
        </Typography>
        <Typography>Your new favorite flashcard app</Typography>
      </Box>
    </Container>
  );
};

export default Home;
