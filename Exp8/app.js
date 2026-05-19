function add() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    if (num1 == null || num2 == null) {
        alert("Enter Both Number ...!");
        return;
    }
    (document.getElementById("result").innerHTML = "Answer:" + (num1 + num2));
}
function sub() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    if (num1 == null || num2 == null) {
        alert("Enter Both Number ...!");
        return;
    }
    (document.getElementById("result").innerHTML = "Answer:" + (num1 - num2));
}
function mul() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    if (num1 == null || num2 == null) {
        alert("Enter Both Number ...!");
        return;
    }
    (document.getElementById("result").innerHTML = "Answer:" + (num1 * num2));
}
function div() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    if (num1 == null || num2 == null) {
        alert("Enter Both Number ...!");
        return;
    }
    (document.getElementById("result").innerHTML = "Answer:" + (num1 / num2));
}
