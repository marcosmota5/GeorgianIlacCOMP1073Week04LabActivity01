/* 
    COMP 1073 - Week 04 Lab 01
    Student Id: 200564426
    Student Name: Marcos Oliveira Mota
    Created on: 2024-09-29
*/

// ######################## QUESTION 1 ########################

// Asks the user to type a number
let number = prompt("Please, type a number:");

// Convert the typed number to a number variable using the Number type
number = Number(number);

// Check if the number is a multiple of 5 by using the rest of division operation %
if (number % 5 === 0) {
    console.log(number + " is a multiple of 5");
} else {
    console.log(number + " is not a multiple of 5");
}

// ######################## QUESTION 2 ########################

// Asks the user to type their score
let score = prompt("Please type your student's score (0 - 100):");

// Convert the typed number to a number variable using the Number type
score = Number(score);

// Create a variable to hold the grade
let grade = '';

// Check the range of the score using some ifs, else ifs and else, and assign a grade
if (score >= 80 && score <= 100) {
    grade = 'A';
} else if (score >= 70 && score <= 79) {
    grade = 'B';
} else if (score >= 60 && score <= 69) {
    grade = 'C';
} else if (score >= 50 && score <= 59) {
    grade = 'D';
} else if (score >= 0 && score <= 49) {
    grade = 'F';
} else {
    grade = 'Invalid';
}

// Logs a message to the user
if (grade === 'Invalid') {
    console.log("Invalid score. Please type a number between 0 and 100")
} else {
    console.log("Your grade is " + grade)
}

// ######################## QUESTION 3 ########################

// Creates the calculator function
function calculator(num1, num2, operator) {
    // Use a switch statement to return the operation based on the operator, or an error message
    switch(operator) {
        case '+':
            return num1 + num2; // As the operator passed is +, returns the sum of both numbers
        case '-':
            return num1 - num2; // As the operator passed is -, returns the subtraction of both numbers
        case '*':
            return num1 * num2; // As the operator passed is * returns the multiplication of both numbers
        case '/':
            return num1 / num2; // As the operator passed is /, returns the division of both numbers
        default:
            return "Error: Invalid operator. Please use +, -, *, or /"; // Returns an error message
    }
}

// Examples:
console.log(calculator(5, 2, '+')); // returns 7
console.log(calculator(5, 2, '-')); // returns 3
console.log(calculator(5, 2, '*')); // returns 10
console.log(calculator(5, 2, '/')); // returns 2.5
console.log(calculator(5, 2, '&')); // returns an error message

// ######################## QUESTION 4 ########################

// Iterates through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // If the number is divisible by both 3 and 5, logs FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    // If the number is divisible by 3, logs Fizz
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // If the number is divisible by 5, logs Buzz
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    // If not divisible by either, logs the number
    else {
        console.log(i);
    }
}