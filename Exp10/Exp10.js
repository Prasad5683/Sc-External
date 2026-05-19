var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.checkSalary = function () {
        if (this.salary > 50000) {
            console.log("High Salary");
        }
        else {
            console.log("Low Salary");
        }
    };
    return Employee;
}());
var e1 = new Employee("Prasad", 60000);
e1.checkSalary();
