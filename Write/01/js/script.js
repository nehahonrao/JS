const movies =[
  `GATE TO HEAVEN`,
  `TOUT S’EST BIEN PASSÉ`,
  `HERSELF`,
  `WOLFWALKERS`,
  `DUNE`,
  `DÉLICIEUX`,
  `BENEDETTA`,
  `RESPECT`,
];

document.write(`<ol>`);
for (let i = 0; i < movies.length; i++) {
  document.write(`<li>${movies[i]}</li>`);
}
document.write(`</ol>`);
