/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {

    // Make a variable called name and set it to your first name.

    var name = "Lance"

    //Make a variable called message and using the name variable from above,
    // set it to be something like:  "Hello, Mary.  Very nice to meet you."

    var message = "Greetings, " + name + ".";


    // Log the message to the console.  Use console.log()

    console.log(message);


}

function evenOrOdd() {

    // Make a variable called number, and set it to a number between 1 and 10

    var number = 8

    // Write a message (not just the number) to the console saying the value of the number

    var message = " The value of the number is: " + number;
    console.log(message)


    // Use the modulus operator and an if statement to display a message
    // in the console that says whether the number is even or odd

    if (number <= 10) {
        var remainder = number % 2;
        if (remainder === 0) {
            console.log("Number is even");
        } else if (remainder === 1) {
            console.log("Number is odd");
        } else {
            console.log("This should never happen, but let's me show if/else if/else.");
        }
    }


}

function countToTen() {

    // Write a for loop to count from 1 to 10
    // Use console.log() inside the loop to write out each number

    var count = 1;

    while (count <= 10) {
        console.log(count);
        count += 1;

    }




}

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative

    var numbers = [10, 20, 30, 40, 50, -70]

    // Write the array to the console

    console.log(numbers);


    // Make a variable called total, set it to 0

    var total = 0


    // Use a for loop to set total to the sum of all of the numbers in the array

    for (count = 0; count < numbers.length; count++) {
        var num = numbers[count];
        total = total + num;
    }


    // Write a message to the console saying the value of total

    var message = "The value of the total is: " + total;
    console.log(message);

    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.

    if (total < 50) {
        console.log("Total is less than 50");
    } else if (total === 50) {
        console.log("Total is equal to 50");
    } else if (total > 50) {
        console.log("Total is greater than 50");
    }
    


}






/*
 * DO NOT MODIFY THE CODE BELOW
 */
assignmentName = "HW1 - Basic JavaScript"
console.log(assignmentName);
console.log();

console.log("Say Hello");
sayHello();
console.log();

console.log("Even or Odd");
evenOrOdd();
console.log();

console.log("Count to 10");
countToTen();
console.log();

console.log("Add Numbers");
addNumbers();
console.log();