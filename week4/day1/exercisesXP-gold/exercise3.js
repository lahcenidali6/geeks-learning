const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
console.log(curriedSum(30)(1))

// curriedSum is a curried function, meaning it returns another function
// curriedSum(30) returns a function: (b) => 30 + b
// Then calling that result with (1) gives: 30 + 1 = 31
//so the output : 31