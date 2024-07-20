// DAY 2: OPERATORS

//Activity 1: arithmetic operations

let num1 = 8;
let num2 = 4;

console.log("sum=", num1 + num2); //task 1
// output is : sum= 12

console.log("differnce=", num1 - num2); //task 2
// output is : differnce= 4

console.log("multiplication=", num1 * num2); //task 3
// output is : multiplication= 32

console.log("division=", num1 / num2); //task 4
// output is : division= 2

console.log("remainder=", num1 % num2); //task 5
// output is : remainder= 0

//Activity 2: assignment operators

num1 += 5;
console.log("new num=", num1); //task 6
// output is : new num= 13

num1 -= 5;
console.log("num1=", num1); //task 7
// output is : num1= 8

//Activity 3: comparison operators

console.log("Is num1 greater than num2: ", num1 > num2); //task8
// output is : Is num1 greater than num2:  true
console.log("Is num1 smaller than num2: ", num1 < num2);
// output is : Is num1 smaller than num2:  false
console.log("Is 5 greater than 5: ", 5 >= 5); //task9
// output is : Is 5 greater than 5:  true
console.log("Is 5 lesser than 4: ", 5 <= 4);
// output is : Is 5 lesser than 4:  false
console.log("Is null==undefined: ", null == undefined); //task10
// output is : Is null==undefined:  true

console.log("Is null===undefined: ", null === undefined);
// output is : Is null===undefined:  false

//Activity 4: logic operators

console.log("5<8<7: ", 5 < 8 && 8 < 7); //task 11
// output is : 5<8<7:  false
console.log("5<8 or 5<4 : ", 5 < 8 || 5 < 4); //task 12
// output is :5<8 or 5<4 :  true

console.log("opposite to true is: ", !true); //task 13
// output :opposite to true is:  false

//Activity 5: ternary operator

output: num1 > 0
  ? console.log("Positive number")
  : console.log("Negative number");
//num1=10: output= Positive number

//FEATURE REQUEST :
// 1. Arithmetic operations script

let n = 5;

// addition operator
console.log("Addition: n + 2 = ", n + 2);

// subtraction operator
console.log("Subtraction: n - 3 =", n - 3);

// multiplication operator
console.log("Multiplication: n * 3 =", n * 3);

// division operator
console.log("Division: n / 3 =", n / 3);

// remainder operator
console.log("Remainder: n % 3 =", n % 3);

// increment operator
console.log("Increment: ++n =", ++n);

// decrement operator
console.log("Decrement: --n =", --n);

// exponentiation operator
console.log("Exponentiation: n ** 3 =", n ** 3);

//output
// Addition: n + 2 =  7
// Subtraction: n - 3 = 2
// Multiplication: n * 3 = 15
// Division: n / 3 = 1.6666666666666667
// Remainder: n % 3 = 2
// Increment: ++n = 6
// Decrement: --n = 5
// Exponentiation: n ** 3 = 125

// 2. Comparison and logical operators script

// equal to operator                         // output
console.log("Equal to: 3 == 3 is", 3 == 3); // Equal to: 3 == 3 is true

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3); // Not equal to: 3 != 3 is false

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === "2"); // Strictly equal to: 2 === '2' is false

// greater than operator
console.log("Greater than: 3 > 5 is", 3 > 5); // Greater than: 3 > 5 is false

// less than operator
console.log("Less than: 3 < 5 is", 3 < 5); // Less than: 3 < 5 is true

// logical AND
console.log(n < 5 && n > 0); // false

// logical OR
console.log(n > 2 || n > 5); // true

// logical NOT
console.log(!(n == 3)); // true

// 3. ternary operator script
n1 > 0 ? console.log(n1, "is +ve") : console.log(n1, "is -ve"); //output: 10 is positive
