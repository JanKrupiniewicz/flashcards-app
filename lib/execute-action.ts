import { isRedirectError } from "next/dist/client/components/redirect-error";

type Options<T> = {
  actionFn: () => Promise<T>;
  successMessage?: string;
  failMessage?: string;
};

const executeAction = async <T>({
  actionFn,
  successMessage = "The actions was successful",
  failMessage = "An error has occurred during executing the action",
}: Options<T>): Promise<{ success: boolean; message: string }> => {
  try {
    await actionFn();

    return {
      success: true,
      message: successMessage,
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return {
      success: false,
      message: failMessage,
    };
  }
};

export { executeAction };
