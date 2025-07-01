function welcomeUser(name: string, greeting?: string): string {
    const message = `${greeting ?? "Hello"}, ${name}!`;
    return message;
}

console.log(welcomeUser("Alice")); 
console.log(welcomeUser("Bob", "Welcome"));