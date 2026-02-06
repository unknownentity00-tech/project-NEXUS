import { prisma } from "@/src/lib/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const studentId = searchParams.get("studentId");
  const courseId = searchParams.get("courseId");

  const enrollment = await prisma.enrollment.findFirst({
    where: { studentId, courseId },
  });

  return Response.json({
    status: enrollment?.status ?? "AVAILABLE",
  });
}