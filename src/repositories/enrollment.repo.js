
import { prisma } from "@/src/lib/prisma";

export async function findEnrollment(studentId, courseId) {
  return prisma.enrollment.findFirst({
    where: { studentId, courseId },
  });
}

export async function saveEnrollment(studentId, courseId, status) {
  return prisma.enrollment.upsert({
    where: {
      studentId_courseId: {
        studentId,
        courseId,
      },
    },
    update: { status },
    create: { studentId, courseId, status },
  });
}