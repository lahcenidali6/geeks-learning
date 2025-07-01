
type Person = {
  name: string;
  age: number;
};


function createPerson(name: string, age: number): Person {
  return { name, age };
}


const person = createPerson("Alice", 30);
console.log(person); // Output: { name: 'Alice', age: 30 }
