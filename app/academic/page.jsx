"use client";
import { useEffect, useState } from "react";

export default function AcademicPage() {
  const studentId = "demo-student";
  const courseId = "demo-course";
  const [status, setStatus] = useState("");

  async function refresh() {
    const r = await fetch(`/api/academic/status?studentId=${studentId}&courseId=${courseId}`);
    const d = await r.json();
    setStatus(d.status);
  }

  async function enroll() {
    await fetch("/api/academic/enroll", {
      method: "POST",
      body: JSON.stringify({ studentId, courseId }),
    });
    refresh();
  }

  async function drop() {
    await fetch("/api/academic/drop", {
      method: "POST",
      body: JSON.stringify({ studentId, courseId }),
    });
    refresh();
  }

  useEffect(() => { refresh(); }, []);

  return (
    <div>
      <h1>Academic Cockpit</h1>
      <p>Status: {status}</p>
      <button onClick={enroll}>Enroll</button>
      <button onClick={drop}>Drop</button>
    </div>
  );
}