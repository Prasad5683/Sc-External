class Employee {
  String empName;
  double salary;

  Employee(this.empName, this.salary);

  void checkSalary() {
    if (salary > 50000) {
      print("$empName has High Salary");
    } else {
      print("$empName has Normal Salary");
    }
  }
}

void main() {
  Employee e1 = Employee("Rahul", 60000);
  e1.checkSalary();
}