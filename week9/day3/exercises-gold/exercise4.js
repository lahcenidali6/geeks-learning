var Box = /** @class */ (function () {
    function Box() {
        this.items = [];
    }
    Box.prototype.add = function (item) {
        this.items.push(item);
    };
    Box.prototype.get = function (index) {
        return this.items[index];
    };
    return Box;
}());
var numberBox = new Box();
numberBox.add(10);
numberBox.add(20);
console.log(numberBox.get(0));
var stringBox = new Box();
stringBox.add("hello");
stringBox.add("world");
console.log(stringBox.get(1));
