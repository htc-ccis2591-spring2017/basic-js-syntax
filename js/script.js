/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {
    
    
    var name = 'Josh';
    var message = 'Hello ' + name + '.  Nice to meet you!';
    
    console.log(message);
    

}

function evenOrOdd() {
    
    var number = 5;
    console.log('Five');
    
    if ((number %2) ===1){
        console.log("The number is odd.");}
    else
        {
            console.log("The number is even.");
        }
    }


function countToTen() {

for (var count = 1; count < 11; count++)
{
    console.log(count);
}



}

function addNumbers() {
    
    var array = [ -5, 25, 10, 7 , 12];
    
    console.log(array);
    
    var total = 0;
    
    for (i=0; i < array.length; i++)
        {
            total = total + array[i];
        }
    
if (total>50)
    {
        console.log("Total is greater than 50.")
    }
else if (total<50)
    {
        console.log("Total is less than 50.")
    }
else
    {
        console.log("Total is equal to 50.")
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
