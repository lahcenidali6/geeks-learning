function welcomeUser(name, greeting) {
    var message = "".concat(greeting !== null && greeting !== void 0 ? greeting : "Hello", ", ").concat(name, "!");
    return message;
}
console.log(welcomeUser("Alice"));
console.log(welcomeUser("Bob", "Welcome"));
