type AdvancedUser = {
    name: string;
    age: number;
    address?: string;
};

function introduceAdvancedUser(user: AdvancedUser): string {
    let message = `Hello, my name is ${user.name} and I am ${user.age} years old.`;
    if (user.address) {
        message += ` I live at ${user.address}.`;
    }
    return message;
}

const user1: AdvancedUser = { name: "Alice", age: 25 };
const user2: AdvancedUser = { name: "Bob", age: 30, address: "123 Main St" };

console.log(introduceAdvancedUser(user1)); 
console.log(introduceAdvancedUser(user2)); 