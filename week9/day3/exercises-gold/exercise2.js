function castToType(value, converter) {
    return converter(value);
}
var numberValue = castToType("123", Number);
var booleanValue = castToType("true", Boolean);
console.log(numberValue); // 123
console.log(booleanValue); // true
