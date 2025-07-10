var RectangleImpl = /** @class */ (function () {
    function RectangleImpl(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
    }
    RectangleImpl.prototype.getArea = function () {
        return this.width * this.height;
    };
    RectangleImpl.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return RectangleImpl;
}());
var myRect = new RectangleImpl("red", 10, 5);
console.log("Color:", myRect.color);
console.log("Area:", myRect.getArea());
console.log("Perimeter:", myRect.getPerimeter());
