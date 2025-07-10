interface Operation {
  operate(a: number, b: number): number;
}

class Addition implements Operation {
  operate(a: number, b: number): number {
    return a + b;
  }
}

class Multiplication implements Operation {
  operate(a: number, b: number): number {
    return a * b;
  }
}


const add = new Addition();
const multiply = new Multiplication();

console.log(add.operate(5, 3));        
console.log(multiply.operate(5, 3));  
