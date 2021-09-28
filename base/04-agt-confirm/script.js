/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function display() {

    var name=prompt("Enter your Name:");
    if (name!= null) {

        alert( "Hello " + name + "! Enter your data in following fields");
    
    }

    var age=window.prompt("Enter your Age:");
    var gender=window.prompt("Enter your Gender:");
    var town=window.prompt("Enter your Town:");
    alert("Name is " + name);
    alert("Age is "  + age);
    alert("Gender is " + gender);
    alert("Town is   " + town);

    var r = confirm("Are you sure you want to confirm?");

if (r == true) {

    x = "Your data is collected!";

} else {

    x = "You cancelled your data";

}

alert (x);

   
})();
