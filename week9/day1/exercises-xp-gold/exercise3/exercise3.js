function introduceAdvancedUser(user) {
    var message = "Hello, my name is ".concat(user.name, " and I am ").concat(user.age, " years old.");
    if (user.address) {
        message += " I live at ".concat(user.address, ".");
    }
    return message;
}
var user1 = { name: "Alice", age: 25 };
var user2 = { name: "Bob", age: 30, address: "123 Main St" };
console.log(introduceAdvancedUser(user1));
console.log(introduceAdvancedUser(user2));
