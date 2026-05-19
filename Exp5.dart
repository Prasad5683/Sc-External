class Student {
  String name;
  int sub1, sub2, sub3;

  Student(this.name, this.sub1, this.sub2, this.sub3);

  void calculateResult() {
    int total = sub1 + sub2 + sub3;
    double average = total / 3;

    print("Student Name: $name");
    print("Total Marks: $total");
    print("Average Marks: $average");

    if (average >= 75) {
      print("Grade: A");
    } else if (average >= 60) {
      print("Grade: B");
    } else if (average >= 40) {
      print("Grade: C");
    } else {
      print("Grade: Fail");
    }
  }
}

void main() {
  Student s1 = Student("Prasad", 85, 70, 90);
  s1.calculateResult();
}