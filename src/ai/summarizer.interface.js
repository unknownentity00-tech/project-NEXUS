import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function summarizeMail(text) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Summarize this college email into one action item",
      },
      {
        role: "user",
        content: text,
      },
    ],
  });

  return response.choices[0].message.content;
}