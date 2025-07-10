function describeEmployee(emp) {
    if (emp.position === "Manager") {
        return "".concat(emp.name, " is a Manager in ").concat(emp.department, " department.");
    }
    else if (emp.position === "Developer") {
        return "".concat(emp.name, " is a Developer working in ").concat(emp.department, ".");
    }
    else {
        return "".concat(emp.name, " works in ").concat(emp.department, " as ").concat(emp.position, ".");
    }
}
// Example usage
var emp1 = {
    name: "Alice",
    age: 35,
    position: "Manager",
    department: "Sales"
};
var emp2 = {
    name: "Bob",
    age: 28,
    position: "Developer",
    department: "IT"
};
console.log(describeEmployee(emp1));
console.log(describeEmployee(emp2));
