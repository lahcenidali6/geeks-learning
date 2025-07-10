function getArrayLength<T extends number | string>(arr: T[]): number {
  return (arr as Array<T>).length;
}

const numLength = getArrayLength([1, 2, 3]);
const strLength = getArrayLength(["a", "b", "c"]);

console.log(numLength); 
console.log(strLength); 
