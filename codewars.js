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

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks){
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return Math.floor(sum / marks.length);
}

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === 'r'? `${name} plays banjo` : `${name} does not play banjo`;
}

// Count the Monkeys!
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1 --> [1]

function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr; 
}

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside.
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b){
  return a.length < b.length? `${a+b+a}` :`${b+a+b}`;
}

