// Day 5

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
// Output:
evenOrOdd(5); // odd
evenOrOdd(6); //  even

// Task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
  return num * num;
}
//  Output:
console.log(square(3)); // 9
console.log(square(7)); // 49

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const getMax = function (x, y) {
  let max = x > y ? x : y;
  console.log(`The maximum of ${x} and ${y} is ${max}`);
};
//  Output:
getMax(3, 9); // The maximum of 3 and 9 is 9
getMax(5, 2); // The maximum of 7 and 2 is 5

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatStrings = function (string1, string2) {
  return string1 + string2;
};
// Output:
console.log(concatStrings("Hello, ", "world!")); // Hello, world!

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const add = (num1, num2) => num1 + num2;
// Output:
console.log(add(4, 5)); // 9

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const hasCharacter = (text, char) => text.includes(char);
// Example Output:
console.log(hasCharacter("Hello, world!", "r")); // true
console.log(hasCharacter("Hello, world!", "z")); // false

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
  return a * b;
}
//Output:
console.log(multiply(5, 3)); // 15
console.log(multiply(5)); // 5

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greetPerson(name, age = 18) {
  return `Hello, ${name}! You are ${age} years old.`;
}
// Output:
console.log(greetPerson("John", 25)); // Hello, rohan! You are 25 years old.
console.log(greetPerson("Jane")); // Hello, sam! You are 18 years old.

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls that function that many times.
function repeatFunction(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}
// Example Output:
repeatFunction(() => console.log("Hello"), 3);
// Hello
// Hello
// Hello

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFuncs(fn1, fn2, value) {
  return fn2(fn1(value));
}
// Output:
const double = (x) => x * 2;
const square = (x) => x * x;
console.log(applyFuncs(double, square, 3)); // 36 (double(3) = 6, square(6) = 36)

// Skipped feature part
