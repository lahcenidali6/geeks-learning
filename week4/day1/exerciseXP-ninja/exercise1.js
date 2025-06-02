const mergeWords = (word) => 
  (next) => next === undefined ? word : mergeWords(`${word} ${next}`);


console.log(mergeWords('There')('is')('no')('spoon.')());
//to curring function
const mergeWords2 = (str) => (next) =>
  next === undefined ? str : mergeWords2(`${str} ${next}`);