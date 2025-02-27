"use client";

import { signOut } from "next-auth/react";
import Button from "@mui/material/Button";

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
