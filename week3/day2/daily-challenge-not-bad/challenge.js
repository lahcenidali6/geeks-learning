const sentence = 'The movie is not that bad, I like it';
const wordNot = sentence.indexOf('not');
const wordBad = sentence.indexOf('bad');

const result = wordNot !== -1 && wordBad !== -1 && wordBad > wordNot
  ? sentence.slice(0, wordNot) + 'good' + sentence.slice(wordBad + 3)
  : sentence;

console.log(result);