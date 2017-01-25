/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {

    // Make a variable called name and set it to your first name.
    var name = "Kenner";

    //Make a variable called message and using the name variable from above,
    // set it to be something like:  "Hello, Mary.  Very nice to meet you."
    var message = "Hello, " + name + ". Very nice to meet you."

    // Log the message to the console.  Use console.log()
    console.log(message);

}

function evenOrOdd() {

    // Make a variable called number, and set it to a number between 1 and 10
    var number = 2;

    // Write a message (not just the number) to the console saying the value of the number
    var message = "The number " + number;

    // Use the modulus operator and an if statement to display a message
    // in the console that says whether the number is even or odd
    if (number % 2 == 0) {
      console.log(message + " is even!");
    } else if ( number % 2 == 1 ) {
      console.log(message + " is odd...");
    } else {
      console.log(number + "? What is this? No decimals.");
    }

}

function countToTen() {

    // Write a for loop to count from 1 to 10
    // Use console.log() inside the loop to write out each number
    for (var i = 1; i <= 10; i++) {
      console.log( i + " Mississippi");
    }

}

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative
    var numbers = [-1, 0, 1, 2, 3];

    // Write the array to the console
    console.log(numbers);

    // Make a variable called total, set it to 0
    var total = 0;

    // Use a for loop to set total to the sum of all of the numbers in the array
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }

    // Write a message to the console saying the value of total
    console.log("The sum is " + total + ".");

    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.
    if (total > 50) {
      console.log(total + " is greater than 50.");
    } else if (total < 50) {
      console.log(total + " is less than 50.");
    } else if (total === 50) {
      console.log(total + " is 50.");
    }

}



/*
 * DO NOT MODIFY THE CODE BELOW
 */
assignmentName = "HW1 - Basic JavaScript"
console.log( assignmentName );
console.log();

console.log( "Say Hello" );
sayHello();
console.log();

console.log( "Even or Odd" );
evenOrOdd();
console.log();

console.log( "Count to 10" );
countToTen();
console.log();

console.log( "Add Numbers" );
addNumbers();
console.log();
