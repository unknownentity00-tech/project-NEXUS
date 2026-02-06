import { prisma } from "./prisma";

/**
 * Enroll a student into a course
 */
export async function enrollCourse(studentId, courseId) {
  const existing = await prisma.enrollment.findFirst({
    where: {
      studentId,
      courseId,
    },
  });

  if (existing && existing.status === "ENROLLED") {
    throw new Error("Student already enrolled in this course");
  }

  return prisma.enrollment.upsert({
    where: {
      id: existing?.id || "",
    },
    update: {
      status: "ENROLLED",
    },
    create: {
      studentId,
      courseId,
      status: "ENROLLED",
    },
  });
}

/**
 * Drop a course
 */
export async function dropCourse(studentId, courseId) {
  const enrollment = await prisma.enrollment.findFirst({
    where: {
      studentId,
      courseId,
    },
  });

  if (!enrollment || enrollment.status !== "ENROLLED") {
    throw new Error("Student is not enrolled in this course");
  }

  return prisma.enrollment.update({
    where: { id: enrollment.id },
    data: {
      status: "DROPPED",
    },
  });
}