const curriedSum = (a) => (b) => a + b // This returns: (b) => 5 + b
const add5 = curriedSum(5)
add5(12)   // This returns: 5 + 12 = 17

//so the return is 17
