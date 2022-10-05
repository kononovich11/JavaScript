// Create a function called reusableFunction which prints the string Hi World to the dev console.
// Call the function.

function reusableFunction () {
 console.log('Hi World');
}

reusableFunction();


// Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
// Call the function with two numbers as arguments.

function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(3,4);

// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(num) {
  return num * 5;
}

// Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
// Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}
