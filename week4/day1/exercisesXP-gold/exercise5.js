const compose = (f, g) => (a) => f(g(a));//return add1(add2(10))
const add1 = (num) => num + 1;//return 15+1
const add5 = (num) => num + 5; //return add(10+5)
compose(add1, add5)(10)

//so the output will be 17
