import { enroll, drop } from "@/src/domain/enrollment";
import {
  findEnrollment,
  saveEnrollment,
} from "@/src/repositories/enrollment.repository";
import { CourseStatus } from "@/src/domain/enrollment";

export async function enrollCourse(studentId, courseId) {
  const enrollment = await findEnrollment(studentId, courseId);

  const currentStatus = enrollment?.status ?? CourseStatus.AVAILABLE;
  const newStatus = enroll(currentStatus);

  return saveEnrollment(studentId, courseId, newStatus);
}

export async function dropCourse(studentId, courseId) {
  const enrollment = await findEnrollment(studentId, courseId);

  if (!enrollment) {
    throw new Error("Enrollment not found");
  }

  const newStatus = drop(enrollment.status);
  return saveEnrollment(studentId, courseId, newStatus);
}