/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    (function() {
        const timeHour = new Date().getHours();
        const timeMinute = new Date().getMinutes();
    
    
        if ((timeHour < 17 ) || (timeHour == 17 && timeMinute < 30)){
             message = "Hello";
        }else{
             message = "Good evening"
        }
    
        document.getElementById("target").innerHTML = message;
    
    })();