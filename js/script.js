/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {
    
    // Make a variable called name and set it to your first name.
    var name = "Kong.";

    //Make a variable called message and using the name variable from above,
    // set it to be something like:  "Hello, Mary.  Very nice to meet you."

    var message = "Hello," + name + "Very nice to meet you.";
    // Log the message to the console.  Use console.log()

    var x = console.log(message);
    
    return x;
    

} 

function evenOrOdd() {

    // Make a variable called number, and set it to a number between 1 and 10
    var number = Math.floor(Math.random() * 10 + 1);
    
    // Write a message (not just the number) to the console saying the value of the number
    var value = console.log("the vaule of the number is:" + number);
    
    // Use the modulus operator and an if statement to display a message
    // in the console that says whether the number is even or odd
    
        if(number % 2 === 0)
            {
                console.log("Number is even")
            }
        else
            {
                console.log("number is odd")
            }
    



}

function countToTen() {

    // Write a for loop to count from 1 to 10
    // Use console.log() inside the loop to write out each number
   
    for(i=1; i < 11; i++){
        console.log(i);
    }



}

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative
    var arrayNumbers = [-1,2,3,4,5];

    // Write the array to the console
    console.log(arrayNumbers);


    // Make a variable called total, set it to 0
    var total = 0;

    // Use a for loop to set total to the sum of all of the numbers in the array

    for(var i in arrayNumbers ) {
        total += arrayNumbers[i];
    }

    // Write a message to the console saying the value of total
    console.log("The total value of the array number are:"+total)

    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.
    if (total > 50){
        console.log("The total number is greater than 50.")
    }
    else if(total === 50){
        console.log("The total number is equal to 50.")
    }
    else{
        console.log("The number is less than 50.")
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
