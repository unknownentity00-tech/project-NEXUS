import { prisma } from "@/src/lib/prisma";
import { StudentDomain } from "@/src/domain/student.domain";

export async function enrollCourse(studentId, courseId) {
  const existing = await prisma.enrollment.findFirst({
    where: { studentId, courseId },
  });

  const status = StudentDomain.enroll(existing?.status);

  return prisma.enrollment.upsert({
    where: { id: existing?.id ?? "" },
    create: { studentId, courseId, status },
    update: { status },
  });
}

export async function dropCourse(studentId, courseId) {
  const existing = await prisma.enrollment.findFirst({
    where: { studentId, courseId },
  });

  const status = StudentDomain.drop(existing.status);

  return prisma.enrollment.update({
    where: { id: existing.id },
    data: { status },
  });
}