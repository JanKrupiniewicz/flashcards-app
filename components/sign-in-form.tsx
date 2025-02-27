"use client";

import { userLoginCredentials, UserLoginCredentials } from "@/lib/schema";
import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UserLoginCredentials>({
    resolver: zodResolver(userLoginCredentials),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<UserLoginCredentials> = async (values) => {
    const response = await fetch("/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      window.location.href = "/discover";
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        {...register("email")}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        {...register("password")}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        variant="contained"
        fullWidth
      >
        {isSubmitting ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
};

export { SignInForm };
