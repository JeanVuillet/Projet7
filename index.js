import{ alerter } from "./listMaker.js";

const finders = document.getElementsByClassName("finders__option");

// Utiliser forEach sur la collection pour itérer sur chaque élément
Array.from(finders).forEach(element => {
    element.addEventListener("click",()=>  element.classList.add('active'))

});

//including finders content
const ingrédientDiv= document.getElementById("finders__ingrédients");

alerter();
