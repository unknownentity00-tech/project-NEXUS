export const CourseStatus = {
  AVAILABLE: "AVAILABLE",
  ENROLLED: "ENROLLED",
  DROPPED: "DROPPED",
  PENDING: "PENDING",
};

export function enroll(currentStatus) {
  if (currentStatus === CourseStatus.ENROLLED) {
    throw new Error("Already enrolled");
  }
  if (currentStatus === CourseStatus.DROPPED) {
    throw new Error("Cannot enroll a dropped course");
  }
  return CourseStatus.ENROLLED;
}

export function drop(currentStatus) {
  if (currentStatus !== CourseStatus.ENROLLED) {
    throw new Error("Only enrolled courses can be dropped");
  }
  return CourseStatus.DROPPED;
}