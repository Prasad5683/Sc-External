var EvenOddChecker = /** @class */ (function () {
    function EvenOddChecker() {
    }
    EvenOddChecker.prototype.checkNumbers = function () {
        for (var i = 1; i <= 20; i++) {
            if (i % 2 == 0) {
                console.log(i + " is Even");
            }
            else {
                console.log(i + " is Odd");
            }
        }
    };
    return EvenOddChecker;
}());
// Create object of class
var obj = new EvenOddChecker();
// Call method
obj.checkNumbers();
