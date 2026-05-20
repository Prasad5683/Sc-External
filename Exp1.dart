import 'dart:io';

class StudentAttendance {
  String name;
  double attendance;

  StudentAttendance(this.name, this.attendance);

  void checkEligibility() {
    if (attendance >= 75) {
      print("$name is Eligible for Exam");
    } else {
      print("$name is Not Eligible for Exam");
    }
  }
}

void main() { 
  // Get input from user
  print("Enter Student Name:");
  String? name = stdin.readLineSync();

  print("Enter Attendance Percentage:");
  double attendance = double.parse(stdin.readLineSync()!);

  // Create object
  StudentAttendance s1 = StudentAttendance(name!, attendance);

  // Check eligibility
  s1.checkEligibility();
}