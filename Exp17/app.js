function sum() {
    var input = document.getElementById("arr").value;
    var arr = input.split(",").map(function (num) { return Number(num.trim()); });
    // let arr: number[] = input.split(",").map(num => Number(num.trim()));
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var Tsum = document.getElementById("sum");
    Tsum.innerText = "Sum : " + sum;
}
