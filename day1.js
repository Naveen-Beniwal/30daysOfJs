// activity-1
// TASK-1
// declaring a variable using var,assign it a number and log the value to console

var mynumber = 9;
console.log(mynumber);
// output is 9

let str = "Hello World";
console.log(str);

// output is Hello World

//activity 2
// TASK-3
// declare a variable using const,assign it a boolean value and log the value to console

const bool = true;
console.log(bool);

// output is true

// TASK-4
// create variable of diff data type(bool,number,string,double,float,char etc.) and log each each variable types using typeof operator

let num1 = 9;
console.log(typeof num1); // output is number

let str1 = "Hello World";
console.log(typeof str1); // output is string

let bool1 = false;
console.log(typeof bool1); // output is boolean

let char1 = "n";
console.log(typeof char1); // output is string

// task -5
// declare variable using let,assign it an initial value and reassign a new value and log both value on console

let num2 = 9;
console.log("Initial value: ", num2); // output is Initial value:  9

num2 = 22;
console.log("New value: ", num2); // output is New value:  22

// task-6
// try reassigning a variable declared with const and observe the error

const constVar = "Hi";
console.log(constVar); // output is Hi

// try to change the value of constVar
// constVar = "hello"
// console.log(constVar);
// this will throw an error as constVar is declared as const and can't be reassigned

// Feature request
// write a script that declare variables of different data types and logs both the value and type of each variable to console

let num4 = 22;
let str2 = "hello";
let boolean2 = true;
let object1 = { key: "value" };
let array1 = [1, 2, 3];
let n;
let c = null;

console.log("Value: ", num4, ", Type: ", typeof num4);
// Output: Value:  <value of num4>, Type: number

console.log("Value: ", str2, ", Type: ", typeof str2);
// Output: Value:  <value of str2>, Type: string

console.log("Value: ", boolean2, ", Type: ", typeof boolean2);
// Output: Value:  <value of boolean2>, Type: boolean

console.log("Value: ", object1, ", Type: ", typeof object1);
// Output: Value:  <value of object1>, Type: object

console.log("Value: ", array1, ", Type: ", typeof array1);
// Output: Value:  <value of array1>, Type: object (Arrays are a type of object in JavaScript)

console.log("Value: ", n, ", Type: ", typeof n);
// Output: Value:  <value of n>, Type: undefined

console.log("Value: ", c, ", Type: ", typeof c);
// Output: Value:  <value of c>, Type: object (This is a well-known quirk in JavaScript)

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let letVariable = "hi ";
console.log(letVariable); // Output: hi
letVariable = "hello";
console.log(letVariable); // Output: hello

const constVariable = "great";
console.log(constVariable); // Output: great

// constVariable = "hiii";
// this will throw and error
