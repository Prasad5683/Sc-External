var Student = /** @class */ (function () {
    function Student(marks) {
        this.marks = marks;
    }
    Student.prototype.grade = function () {
        if (this.marks >= 75) {
            console.log("Grade A");
        }
        else if (this.marks >= 60) {
            console.log("Grade B");
        }
        else if (this.marks >= 40) {
            console.log("Grade C");
        }
        else {
            console.log("Fail");
        }
    };
    return Student;
}());
var s1 = new Student(80);
s1.grade();
