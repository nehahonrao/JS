/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// async function getInfo(){

//     const data= await fetch("http://localhost:3000/heroes");
//     const data1= await data.text();
//     document.getElementById("run").addEventListener(('click'),()=>{

//         console.log(data1);
//     })
    
// }
// getInfo();

// var tbody = document.querySelector("tbody");
// var template = document.querySelector("#hero");

// var clone = template.content.cloneNode(true);
//     var td = clone.querySelector("hero");
//     td[0].textContent = "Salman";
//     td[1].textContent = "Shahrukh";
//     td[2].textContent = "Amir";
//     td[3].textContent = "Mayur";
//     template.appendChild(clone);

// function getData() {
//     url = "../../_shared/api.json";
//     fetch(url).then((response) => {
//         return response.text();
//     }).then((data) => {

//         console.log(data);

//     })

// }
// document.getElementById("run").addEventListener(("click"), () => {
//     getData();

// })


const getHeroes = async ()=>{
    const response = await fetch('../../_shared/api.json');
    return await response.json();
}

const displayHeroesFromTemplate = async (templateID, targetID) =>{
    const target = document.getElementById(targetID);
    const template = document.getElementById(templateID);
    const heroes = await getHeroes();
    for (h of heroes.heroes){
       let newNode =  template.content.cloneNode(true);
       newNode.querySelector('.name').innerText=h.name;
       newNode.querySelector('.alter-ego').innerText=h.alterEgo;
       newNode.querySelector('.powers').innerText=h.abilities.join(", ");
        target.appendChild(newNode);
    }
}

document.getElementById("run").addEventListener("click", ()=> {
    displayHeroesFromTemplate("tpl-hero", "target");
});
