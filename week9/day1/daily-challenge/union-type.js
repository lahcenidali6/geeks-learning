function validateUnionType(value, allowedTypes) {
    var valueType = typeof value;
    if (value === null && allowedTypes.includes("null")) {
        return true;
    }
    if (Array.isArray(value) && allowedTypes.includes("array")) {
        return true;
    }
    return allowedTypes.includes(valueType);
}
var a = "Hello";
var b = 42;
var c = true;
var d = [1, 2, 3];
var e = null;
console.log(validateUnionType(a, ["string", "number"]));
console.log(validateUnionType(b, ["boolean", "object"]));
console.log(validateUnionType(c, ["boolean"]));
console.log(validateUnionType(d, ["array"]));
console.log(validateUnionType(e, ["null", "undefined"]));
