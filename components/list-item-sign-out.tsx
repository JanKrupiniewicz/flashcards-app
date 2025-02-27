"use client";

import { ListItemText } from "@mui/material";
import { signOut } from "next-auth/react";

const ListItemSignOut = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return <ListItemText onClick={handleSignOut} primary={"Sign Out"} />;
};

export default ListItemSignOut;
