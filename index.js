import{ alerter } from "./listMaker.js";
import recetteMaker from "./recette.js";
import  { recipes } from "./recipes.mjs";
const finders = document.getElementsByClassName("finders__option");

// Utiliser forEach sur la collection pour itérer sur chaque élément
Array.from(finders).forEach(element => {
    element.addEventListener("click",()=>  element.classList.add('active'))

});

//including finders content
const ingrédientDiv= document.getElementById("finders__ingrédients");

alerter();

const sectionRecettes=document.getElementById("recettes");
recipes.forEach(function(recipe){
    let recetteArticle=recetteMaker(recipe);
    sectionRecettes.appendChild(recetteArticle);
});


