"use client";

import { userRegisterCredentials, UserRegisterCredentials } from "@/lib/schema";
import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UserRegisterCredentials>({
    resolver: zodResolver(userRegisterCredentials),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<UserRegisterCredentials> = async (values) => {
    const response = await fetch("/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      redirect("/discover");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <TextField
        label="Name"
        type="text"
        variant="outlined"
        fullWidth
        {...register("name")}
      />
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
      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        fullWidth
        {...register("confirmPassword")}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        variant="contained"
        fullWidth
      >
        {isSubmitting ? "Signing up..." : "Sign Up"}
      </Button>
    </form>
  );
};

export { SignUpForm };
