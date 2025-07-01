function getDetails(name, age) {
    var message = "Hello, ".concat(name, "! You are ").concat(age, " years old.");
    return [name, age, message];
}
var details = getDetails("Alice", 25);
console.log(details);
