function validateUnionType(value: any, allowedTypes: string[]): boolean {
  const valueType = typeof value;


  if (value === null && allowedTypes.includes("null")) {
    return true;
  }

  if (Array.isArray(value) && allowedTypes.includes("array")) {
    return true;
  }

  return allowedTypes.includes(valueType);
}



const a = "Hello";
const b = 42;
const c = true;
const d = [1, 2, 3];
const e = null;

console.log(validateUnionType(a, ["string", "number"]));
console.log(validateUnionType(b, ["boolean", "object"])); 
console.log(validateUnionType(c, ["boolean"]));
console.log(validateUnionType(d, ["array"]));
console.log(validateUnionType(e, ["null", "undefined"]));
