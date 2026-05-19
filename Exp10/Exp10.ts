class Employee {

  name: string;
  salary: number;

  constructor(name: string, salary: number) {

    this.name = name;
    this.salary = salary;
  }

  checkSalary() {

    if (this.salary > 50000) {

      console.log("High Salary");

    } else {

      console.log("Low Salary");
    }
  }
}

let e1 = new Employee("Prasad", 60000);

e1.checkSalary();