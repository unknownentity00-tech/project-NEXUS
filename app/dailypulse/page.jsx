"use client";
import { useState } from "react";

export default function DailyPulse() {
  const [mail, setMail] = useState("");
  const [summary, setSummary] = useState("");

  async function summarize() {
    const res = await fetch("/api/dailypulse/summarize", {
      method: "POST",
      body: JSON.stringify({ mail }),
    });
    const data = await res.json();
    setSummary(data.summary);
  }

  return (
    <div>
      <h1>Mail Summarizer</h1>
      <textarea value={mail} onChange={e => setMail(e.target.value)} />
      <button onClick={summarize}>Summarize</button>
      <p>{summary}</p>
    </div>
  );
}