import { prisma } from "@/src/lib/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") ?? 1);
  const size = 5;

  const courses = await prisma.course.findMany({
    skip: (page - 1) * size,
    take: size,
  });

  return Response.json(courses);
}