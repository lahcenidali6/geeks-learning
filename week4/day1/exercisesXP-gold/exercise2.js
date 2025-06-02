const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);

// addTo is a function that takes one argument x, and returns a new function.
// That returned function takes another argument y and returns x + y
// const addToTen = addTo(10);
// addToTen is now a function equivalent to y => 10 + y
//the output will be 13
