//  Day 3 Task 3
// Activity 1 : If-Else Statements

// Task 1: Check if a number is positive, negative, or zero, and log the result to the console.
function NumberType(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

// Outputs
NumberType(6); // Positive
NumberType(0); // Zero
NumberType(-2); // Negative

// Task 2: Check if a person is eligible to vote (age >= 18) and log the result to the console.
function votingStatus(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

// Outputs
votingStatus(22); // Eligible to vote
votingStatus(15); // Not eligible to vote

// Activity 2 : Nested If-Else statements

// Task 3: Find the largest of three numbers using nested if-else statements.
function largestNumber(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a);
  } else if (b >= a && b >= c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

// Outputs
largestNumber(1, 2, 3); // 3
largestNumber(8, 3, 4); // 8
largestNumber(7, 9, 6); // 9

// Activity 4 : Switch case

// Task 4: Determine the day of the week based on a number (1-7) and log the day name to the console.
function dayOfWeek(number) {
  switch (number) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day");
      break;
  }
}

// Outputs
dayOfWeek(2); // Tuesday
dayOfWeek(7); // Sunday
dayOfWeek(10); // Invalid day

// Task 5: Assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
function assignGrade(score) {
  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    case score >= 70:
      console.log("C");
      break;
    case score >= 60:
      console.log("D");
      break;
    case score < 60:
      console.log("F");
      break;
    default:
      console.log("Invalid score");
      break;
  }
}

// Outputs
assignGrade(82); // B
assignGrade(72); // C
assignGrade(59); // F

// Conditional Ternary Operators

// Task 6: Check if a number is even or odd and log the result to the console.
function evenOrOdd(num) {
  console.log(num % 2 === 0 ? "Even" : "Odd");
}

// Outputs
evenOrOdd(8); // Even
evenOrOdd(5); // Odd

// Combining conditions

// Task 7: Check if a year is a leap year using multiple conditions and log the result to the console.
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
}

// Outputs
checkLeapYear(2020); // Leap year
checkLeapYear(2021); // Not a leap year
checkLeapYear(1904); // leap year
checkLeapYear(2000); // Leap year

// Feature Requests

// 1. Check if a number is positive, negative, or zero and log the result to the console.
function NumberType(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

// Outputs
NumberType(5); // Positive
NumberType(-3); // Negative
NumberType(0); // Zero

// 2. Check if a person is eligible to vote (age >= 18) and log the result to the console.
function isEligibleToVote(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

// Outputs
isEligibleToVote(25); // Eligible to vote
isEligibleToVote(17); // Not eligible to vote

// 3. Determine the day of the week based on a number (1-7) and log the day name to the console.
function dayName(number) {
  switch (number) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day");
      break;
  }
}

// Outputs
dayName(5); // Friday
dayName(2); // Tuesday
dayName(0); // Invalid day

// 4. Assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
function assignGrade(score) {
  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    case score >= 70:
      console.log("C");
      break;
    case score >= 60:
      console.log("D");
      break;
    case score < 60:
      console.log("F");
      break;
    default:
      console.log("Invalid score");
      break;
  }
}

// Outputs
assignGrade(95); // A
assignGrade(67); // D
assignGrade(50); // F

// 5. Check if a year is a leap year using multiple conditions and log the result to the console.
function determineLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
}

// Outputs
determineLeapYear(2000); // Leap year
determineLeapYear(2001); // Not a leap year
determineLeapYear(1900); // Not a leap year
