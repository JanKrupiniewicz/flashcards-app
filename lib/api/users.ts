import { UserRegisterCredentials } from "../schema";
import { executeAction } from "../execute-action";
import db from "@/prisma/db";

const signUp = async (credentials: UserRegisterCredentials) => {
  return executeAction({
    actionFn: async () => {
      await db.user.create({
        data: {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        },
      });
    },
    successMessage: "You have successfully signed up",
    failMessage: "An error has occurred during signing up",
  });
};

export { signUp };
