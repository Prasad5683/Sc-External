class Student {

  marks: number;

  constructor(marks: number) {

    this.marks = marks;
  }

  grade() {

    if (this.marks >= 75) {

      console.log("Grade A");

    } else if (this.marks >= 60) {

      console.log("Grade B");

    } else if (this.marks >= 40) {

      console.log("Grade C");

    } else {

      console.log("Fail");
    }
  }
}

let s1 = new Student(80);

s1.grade();