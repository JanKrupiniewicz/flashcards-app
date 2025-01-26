import { z } from "zod";

const userRegisterCredentials = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

type UserRegisterCredentials = z.infer<typeof userRegisterCredentials>;

const userLoginCredentials = z.object({
  email: z.string(),
  password: z.string(),
});

type UserLoginCredentials = z.infer<typeof userLoginCredentials>;

export {
  userRegisterCredentials,
  userLoginCredentials,
  type UserRegisterCredentials,
  type UserLoginCredentials,
};
