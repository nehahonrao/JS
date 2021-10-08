/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var guess = Math.floor(Math.random() * 100) + 1;
    console.log(guess);
    var x = prompt("Enter your Guess in between 1 to 100");
    var y = 0;


    do {
        if (x > guess) {
            x = prompt("Your guess is too High!!!");
            

        }else if(x < guess){
            x = prompt("Your Guess is too Low!!!");
        
        }
        y++;

    } while (x != guess);
    
    if (x == guess) {
        alert("Your Guess is correct");
        y++;
        alert(`you took ${y} guesses`);
    }


})();
