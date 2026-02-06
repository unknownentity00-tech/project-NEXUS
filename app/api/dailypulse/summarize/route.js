import { summarizeMail } from "@/src/ai/summarize";

export async function POST(req) {
  const { mail } = await req.json();
  const summary = await summarizeMail(mail);
  return Response.json({ summary });
}