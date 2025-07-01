function sumNumbersInArray(arr: (number | string)[]): number {
    let sum = 0;
    for (const value of arr) {
        if (typeof value === "number") {
            sum += value;
        }
    }
    return sum;
}

const result1 = sumNumbersInArray([1, 2, "hello", 3]);
const result2 = sumNumbersInArray(["a", "b", "c"]);
const result3 = sumNumbersInArray([10, "20", 30, "40"]);

console.log(result1); 
console.log(result2); 
console.log(result3); 
