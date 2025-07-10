var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarDetails = function () {
        return "Make: ".concat(this.make, ", Model: ").concat(this.model, ", Year: ").concat(this.year);
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2021);
console.log(myCar.getCarDetails());
// Trying to modify readonly properties will cause errors:
// myCar.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property
// myCar.model = "Civic"; // Error: Property 'model' is private and only accessible within class 'Car'
// However, you can modify the year property:
myCar.year = 2022;
console.log(myCar.getCarDetails());
