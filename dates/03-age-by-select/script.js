/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function submitBirthday() {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;

    var birthday = Date.parse(document.getElementById("myBirthday").value);
    var dateNow = new Date();
    var YearsOld = Math.round((dateNow-birthday)/ years);

    document.getElementById("displayBirthday").innerHTML = ("You are " + YearsOld + " years old.");
}


