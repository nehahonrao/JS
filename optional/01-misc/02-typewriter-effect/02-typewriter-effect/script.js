/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var i = 0;
var x=document.getElementById("target").innerHTML;
document.getElementById("target").innerHTML="";


var txt = x + ' Hello I am Neha & pursuing Web Develping course';
var speed = 500;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("target").innerHTML += txt.charAt(i);
    
    i++;
    setTimeout(typeWriter, speed);
  }
}typeWriter();
