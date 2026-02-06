export class StudentDomain {
  static enroll(currentStatus) {
    if (currentStatus === "ENROLLED") {
      throw new Error("Already enrolled");
    }
    return "ENROLLED";
  }

  static drop(currentStatus) {
    if (currentStatus !== "ENROLLED") {
      throw new Error("Cannot drop a non-enrolled course");
    }
    return "DROPPED";
  }
}