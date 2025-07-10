var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.circumference = function (radius) {
        return 2 * MathUtils.PI * radius;
    };
    MathUtils.PI = 3.14159;
    return MathUtils;
}());
var circleCircumference = MathUtils.circumference(5);
console.log("Circumference of circle with radius 5: ".concat(circleCircumference));
