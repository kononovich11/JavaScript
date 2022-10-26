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

// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  return bool? 'Yes' : 'No';
}

// Return Negative

function makeNegative(num) {
  return num > 0? -num : num;
}

// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  let res = 0;
  arr.forEach(item => item > 0? res+=item : 0);
  return res;
  
//  Find the smallest integer in the array
}

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
  let str = '';
  for (let i = n; n > 0; n--) {
    str += s;
  }
  return str;
}

// Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
  let min = args[0];
  args.forEach((item) => (item < min ? (min = item) : item));
  return min;
  }
}

// Remove String Spaces
function noSpace(x){
  return x.split('').filter(item => item !== ' ').join('');
}

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
  return Math.floor(time * 0.5);
}

// Reversed Words
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}
