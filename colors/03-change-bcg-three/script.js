/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// function color(){
//     document.body.style.background =color; 

// const button = document.querySelector('button');
// const h2E1 = document.querySelector('h2');
// const bgE1 = document.querySelector('section');

// button.addEventListener('click',()=>{

//     let color = '#';
//     color += Math.random().toString(16).slice(2,8);
//     bgE1.style.backgroundColor = color;
//     h2E1.innerText = color;
//     console.log(color);
// })
// }



const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  run.addEventListener("click", setBg);
  setBg();