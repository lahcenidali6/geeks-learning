function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

let result1 = getFirstElement(["apple", 42, "banana"]);
let result2 = getFirstElement([100, "orange", 200]);

console.log(result1);
console.log(result2);
