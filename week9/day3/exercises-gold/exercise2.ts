function castToType<T>(value: any, converter: (input: any) => T): T {
  return converter(value);
}

const numberValue = castToType<number>("123", Number);
const booleanValue = castToType<boolean>("true", Boolean);

console.log(numberValue);   
console.log(booleanValue);  
