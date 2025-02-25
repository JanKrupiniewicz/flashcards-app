"use client";

import { signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import { redirect } from "next/dist/server/api-utils";

const SignOut = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Button onClick={handleSignOut} variant="contained">
      Sign Out
    </Button>
  );
};

export default SignOut;
