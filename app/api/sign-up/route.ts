import { executeAction } from "@/lib/execute-action";
import { NextResponse } from "next/server";
import { signUp } from "@/lib/api/users";

export async function POST(req: Request): Promise<Response> {
  const { name, email, password, confirmPassword } = await req.json();

  const result = await signUp({ name, email, password, confirmPassword });

  if (!result.success) {
    return new NextResponse(result.message, { status: 400 });
  }

  return new NextResponse(result.message, { status: 200 });
}
