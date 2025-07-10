var Addition = /** @class */ (function () {
    function Addition() {
    }
    Addition.prototype.operate = function (a, b) {
        return a + b;
    };
    return Addition;
}());
var Multiplication = /** @class */ (function () {
    function Multiplication() {
    }
    Multiplication.prototype.operate = function (a, b) {
        return a * b;
    };
    return Multiplication;
}());
var add = new Addition();
var multiply = new Multiplication();
console.log(add.operate(5, 3));
console.log(multiply.operate(5, 3));
