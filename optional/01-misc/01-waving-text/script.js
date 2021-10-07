/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




  var text=document.getElementById("target");
  var target = text.innerText;
  var fontSize=[4,8,5,9,6,8,2,4,7,3,4,6];
  var text="";
  // let inner=" ";


for(i=0;i<target.length;i++)
{
var x=fontSize[i%12];
var char=target.charAt(i).fontsize(x);
console.log(x);
text= text + char;
//  inner=inner+char;
}
document.getElementById("target").innerHTML=text;






