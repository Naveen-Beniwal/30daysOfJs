// Day 4

// Task 1: Print numbers from 1 to 10 using a for loop.
for (let i = 1; i < 11; i++) {
  console.log(i);
}
// Output :
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Task 2: Print the multiplication table of 5 using a for loop.
for (let i = 1; i < 11; i++) {
  console.log(5 * i);
}

// output:
// 5
// 10
// 15
// 20
// 25
// 30
// 35
// 40
// 45
// 50

// Task 3: Calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0,
  i = 1;
while (i < 11) {
  sum += i;
  i++;
}
console.log(sum);
// output : 55

// Task 4: Print numbers from 10 to 1 using a while loop.
let j = 10;
while (j != 0) {
  console.log(j);
  j--;
}
// output:
// 10;
// 9;
// 8;
// 7;
// 6;
// 5;
// 4;
// 3;
// 2;
// 1;

// Task 5: Print numbers from 1 to 5 using a do...while loop.
i = 1;
do {
  console.log(i);
  i++;
} while (i < 6);
// output:
// 1;
// 2;
// 3;
// 4;
// 5;

// Task 6: Calculate the factorial of a number using a do...while loop.
let n = 5;
let factorial = 1;
do {
  if (n == 0) {
    break;
  }
  factorial = factorial * n;
  n--;
} while (n > 1);
console.log(factorial);
// output : 120

// Task 7: Print a pattern using nested for loops.
for (i = 1; i < 5; i++) {
  let str = "";
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
// output:
// *
// **
// ***
// ****

// Task 8: Print numbers from 1 to 10, skipping the number 5 using the continue statement.
i = 1;
while (i < 11) {
  if (i != 5) {
    console.log(i);
  }
  i++;
}
// output:
// 1;
// 2;
// 3;
// 4;
// 6;
// 7;
// 8;
// 9;
// 10;

// Task 9: Print numbers from 1 to 10, stop the loop when the number is 7 using the break statement.

for (i = 1; i < 11; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
// output:
// 1;
// 2;
// 3;
// 4;
// 5;
// 6;

// Feature 1: Script to print numbers from 1 to 10 using for and while loops.
for (let i = 1; i < 11; i++) {
  console.log(i);
}
// Output :
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// using while loop
i = 1;
while (i < 11) {
  console.log(i);
  i++;
}
// output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// NOT DOING ALL FEATURES DUE TO LACK OF TIME AND THEY ARE SAME AS TASKS
