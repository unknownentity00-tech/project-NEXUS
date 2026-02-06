import { prisma } from "./prisma";

export async function getAllCourses() {
  return prisma.course.findMany({
    select: {
      id: true,
      code: true,
      name: true,
      credits: true,
    },
  });
}