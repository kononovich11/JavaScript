// Opposite number
function opposite(number) {
  return -number;
}

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
  return array.map(item => Number.isInteger(Math.sqrt(item)) ? Math.sqrt(item) : item ** 2);
}

// Convert a Number to a String
function numberToString(num) {
  return `${num}`;
}
