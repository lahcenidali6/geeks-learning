var Employee = /** @class */ (function () {
    function Employee(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    Employee.prototype.getEmployeeInfo = function () {
        return "Name: ".concat(this.name, ", Position: ").concat(this.position);
    };
    return Employee;
}());
var emp = new Employee("Alice", 75000, "Developer", "Engineering");
console.log(emp.getEmployeeInfo());
