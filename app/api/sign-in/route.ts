import { executeAction } from "@/lib/execute-action";
import { signIn } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<Response> {
  const { email, password } = await req.json();

  const result = await executeAction({
    actionFn: async () => {
      await signIn("credentials", { email, password });
    },
    successMessage: "You have successfully signed in",
    failMessage: "An error has occurred during signing in",
  });

  if (!result.success) {
    return new NextResponse(result.message, { status: 400 });
  }

  return new NextResponse(result.message, { status: 200 });
}
