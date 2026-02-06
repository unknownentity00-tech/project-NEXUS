import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function summarizeMail(emailText) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You summarize college emails into one clear actionable sentence.",
      },
      {
        role: "user",
        content: emailText,
      },
    ],
  });

  return response.choices[0].message.content;
}