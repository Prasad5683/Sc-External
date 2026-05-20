var Student = /** @class */ (function () {
    function Student(name, m1, m2, m3) {
        this.sname = name;
        this.m1 = m1;
        this.m2 = m2;
        this.m3 = m3;
    }
    Student.prototype.isPass = function () {
        if (this.m1 >= 35 && this.m2 >= 35 && this.m3 >= 35) {
            return true;
        }
        else {
            return false;
        }
    };
    return Student;
}());
function checkIt() {
    var sname = document.getElementById("name").value;
    var m1 = Number(document.getElementById("m1").value);
    var m2 = Number(document.getElementById("m2").value);
    var m3 = Number(document.getElementById("m3").value);
    var s1 = new Student(sname, m1, m2, m3);
    var res = document.getElementById("res");
    if (s1.isPass()) {
        res.innerText = "Pass";
    }
    else {
        res.innerText = "Fail";
    }
}
