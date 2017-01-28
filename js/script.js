/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {
    
    var name = "Ryan";

    var message = "Hello there my name is " + name + ".";

    var x = console.log(message);
    
    return x;
} 


function evenOrOdd() {

    var message1 = "Lets play a game called Even or Odd!";

    var x = console.log(message1);

    var number = Math.floor(Math.random() * 10 + 1);
    
    var value = console.log("And the number is " + number + "!");
    
        if(number % 2 === 0)
            {
                console.log(number + " is an even number (I hope...)")
            }
        else
            {
                console.log(number + " is an odd number! (or is it...)")
            }
}


function countToTen() {
   
    for(i=1; i < 11; i++){
        console.log(i);
    }
}

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative
    var arrayNumb = [-10,34,3,0,5];

    // Write the array to the console
    console.log(arrayNumb);


    // Make a variable called total, set it to 0
    var total = 0;

    // Use a for loop to set total to the sum of all of the numbers in the array

    for(var i in arrayNumb ) {
        total += arrayNumb[i];
    }

    // Write a message to the console saying the value of total
    console.log("We add up the numbers to get " + total + " as our total")

    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.
    if (total > 50){
        console.log("That is probably bigger than 50...")
    }
    else if(total === 50){
        console.log("That looks like a 50...")
    }
    else{
        console.log("That isn't close to a 50...")
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

console.log();
evenOrOdd();
console.log();

console.log( "Count to 10" );
countToTen();
console.log();

console.log( "Add Numbers" );
addNumbers();
console.log();