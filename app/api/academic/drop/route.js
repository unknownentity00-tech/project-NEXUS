import { dropCourse } from "@/src/services/academic.service";

export async function POST(req) {
  const body = await req.json();
  const { studentId, courseId } = body;

  try {
    const result = await dropCourse(studentId, courseId);
    return Response.json(result);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 400 });
  }
}