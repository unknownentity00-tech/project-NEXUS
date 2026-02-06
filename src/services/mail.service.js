// src/services/mail.service.js
import { OpenAISummarizer } from '@/src/ai/openai.adapter';

export async function summarizeMail(text) {
  const ai = new OpenAISummarizer();
  return ai.summarize(text);
}