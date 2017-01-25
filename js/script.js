/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {

    // Make a variable called name and set it to your first name.
    //Make a variable called message and using the name variable from above,
    // set it to be something like:  "Hello, Mary.  Very nice to meet you."
    // Log the message to the console.  Use console.log()

var myName = "Parker"
var message = "Hello " + myName + ", how are you?";
console.log (message);

}

function evenOrOdd() {

    // Make a variable called number, and set it to a number between 1 and 10
    // Write a message (not just the number) to the console saying the value of the number
    // Use the modulus operator and an if statement to display a message
    // in the console that says whether the number is even or odd
    
    count = 1;
    {
        var number = 6 % 2;
        if (number === 0)
        {
            console.log("The number 6 is even");
        }
        else if (number === 1)
        {
            console.log("The number 6 is odd");
        }
        else 
        {
            console.log("This should never happen");
        }
        count++;
    }
}
    

function countToTen() {

    // Write a for loop to count from 1 to 10
    // Use console.log() inside the loop to write out each number

    for(count=1; count <= 10; count++)
    {
        console.log(count);
    }


}

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative
    // Write the array to the console
    // Make a variable called total, set it to 0
    // Use a for loop to set total to the sum of all of the numbers in the array
    // Write a message to the console saying the value of total
    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.

    var numbers = [45, -35, 14, 5, 21];
    var total = 0
    for (count = 0; count < numbers.length; count++)
    {
        var num = numbers[count];
        total = total + num;
    }
    
    console.log("Adding the numbers in the array " + numbers);
    console.log(total);
    if (total > 50)
    {
        console.log("The number is greater then 50");
    }
    else if (total < 50)
    {
        console.log("The number is less then 50");
    }
    else (total === 50) 
    {
        console.log("The number is equal to 50");
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
