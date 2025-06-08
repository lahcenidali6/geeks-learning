const lodash = require("lodash")
const math = require('./math')

const a = 6;
const b = 7;
const sum = math.add(a, b);
const mult= math.mult(a, b);
console.log(sum)
console.log(mult)

const numbers = [5, 10, 15, 20];
const total =lodash.sum(numbers);
const average =lodash.mean(numbers);

console.log(total)
console.log(average)