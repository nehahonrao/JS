/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    for ( var numbers = 1; numbers <= 100; numbers++) {  //Lists numbers to 100

    
        if (numbers % 15 === 0 ) {  //if number is divisible by 5 or 3 prints FizzBuzz
            console.log("FizzBuzz") }
        else if (numbers % 5 === 0) { //if number is divisible by 5 prints Buzz
            console.log("Buzz") }
        else if (numbers % 3 === 0 ) { //if number is divisible by 3 prints Fizz
            console.log("Fizz") }
        else {
            console.log(numbers) } // if neither prints the number
        
        }
})();
