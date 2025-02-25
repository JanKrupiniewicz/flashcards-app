import { z } from "zod";

const userRegisterCredentials = z
  .object({
    name: z.string().min(8),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type UserRegisterCredentials = z.infer<typeof userRegisterCredentials>;

const userLoginCredentials = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(1, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

type UserLoginCredentials = z.infer<typeof userLoginCredentials>;

export {
  userRegisterCredentials,
  userLoginCredentials,
  type UserRegisterCredentials,
  type UserLoginCredentials,
};
