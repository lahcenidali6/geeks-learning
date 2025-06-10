function returnNumbers(inputString) {
  const regex = /\d+/g; 
  const numbersArray = inputString.match(regex);

  if (numbersArray) {
    return numbersArray.join('');
  } else {
    return '';
  }
}
console.log(returnNumbers('k5k3q2g5z6x9bn'));
