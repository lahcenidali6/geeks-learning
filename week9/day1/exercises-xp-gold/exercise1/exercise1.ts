function processValue(value: string | number): string {
  if (typeof value === "number") {
    
    return `$${value.toFixed(2)}`;
  } else {
    
    return value.split("").reverse().join("");
  }
}


console.log(processValue(100));       
console.log(processValue("hello"));   
console.log(processValue(45.5));      
console.log(processValue("TypeScript"));
