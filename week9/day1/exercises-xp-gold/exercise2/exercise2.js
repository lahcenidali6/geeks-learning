function sumNumbersInArray(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var value = arr_1[_i];
        if (typeof value === "number") {
            sum += value;
        }
    }
    return sum;
}
var result1 = sumNumbersInArray([1, 2, "hello", 3]);
var result2 = sumNumbersInArray(["a", "b", "c"]);
var result3 = sumNumbersInArray([10, "20", 30, "40"]);
console.log(result1);
console.log(result2);
console.log(result3);
