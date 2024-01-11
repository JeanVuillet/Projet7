
import recetteMaker from "./recette.mjs";
import { Tag } from "./Tag/tags.mjs";
import { ReloadPage } from "./reloadPage.mjs";



const ingredientDiv = document.getElementById("finders__ingrédients");
const ustensilDiv =document.getElementById('finders__ustensils')
var selectedList=[];
export var open = true;
//initiating page 
ReloadPage(Tag);
//INGREDIENTS SECTION

// Implementing ingredientsFinder
let ingredientFinder=document.getElementById('ingredientFinder');
  ingredientFinder.addEventListener("click", function () {
    if (open == true) {
      ingredientFinder.classList.add("active");
    } else {
      open = true;
    }

  });
    //implementing ingedient closer
    let chevronUp = document.getElementById("closingIngredientsFinder");
    chevronUp.addEventListener("click", function () {
      ingredientFinder.classList.remove("active");
      open = false;
    });
    // APPAREIL SECTION

    // Implementing AppareilFinder

let appareilFinder=document.getElementById('appareilFinder');
appareilFinder.addEventListener("click", function () {
  if (open == true) {
    appareilFinder.classList.add("active");
  } else {
    open = true;
  }

});
  //implementing appareil closer
  let appareilCloser = document.getElementById("closingAppareilsFinder");
  appareilCloser.addEventListener("click", function () {
    appareilFinder.classList.remove("active");
    open = false;});


    // USTENSILS SECTION

  //implementing ustensilFinder
  let ustensilFinder=document.getElementById('ustensilFinder');
  ustensilFinder.addEventListener("click", function () {
    if (open == true) {
      ustensilFinder.classList.add("active");
    } else {
      open = true;
    }

  });

//implementing ustensil closer
    let UstensilsCloseButton = document.getElementById("closingUstensilsFinder");
    UstensilsCloseButton.addEventListener("click", function () {
      ustensilFinder.classList.remove("active");
      open = false;
    });







//implementing ingredient tagMaker
ingredientDiv.addEventListener("click", function (e) {

  //implement zone taglist du dom

  function implementingTag(type, className,TagdivId){
    const closeCross = document.createElement("i");
  closeCross.className = "fa-solid fa-xmark";

  let selectedIngredientP = document.createElement("p");
  selectedIngredientP.appendChild(e.target);

  selectedIngredientP.appendChild(closeCross);
  selectedIngredientP.className =`"tags__${type}sTags__${type}Tag"`;
  let tagDiv = document.getElementById(`"${type}sTag"`);
  tagDiv.appendChild(selectedIngredientP);

  if(type.startsWith('i')){
  Tag.removeIngredient(selectedIngredientP.textContent);
  tagDiv.removeChild(selectedIngredientP);
    ReloadPage(Tag);
  }
  else if(type.startsWith('a')){
    Tag.removeAppareil(selectedIngredientP.textContent);
    tagDiv.removeChild(selectedIngredientP);
      ReloadPage(Tag);
    }
    else (type.startsWith('u')){
      Tag.removeUstensil(selectedIngredientP.textContent);
      tagDiv.removeChild(selectedIngredientP);
        ReloadPage(Tag);
      }
  }

  ;

  const closeCross = document.createElement("i");
  closeCross.className = "fa-solid fa-xmark";

  let selectedIngredientP = document.createElement("p");
  selectedIngredientP.appendChild(e.target);

  selectedIngredientP.appendChild(closeCross);
  selectedIngredientP.className = "tags__ingredientsTags__ingredientTag";
  let tagDiv = document.getElementById("ingredientsTag");
  tagDiv.appendChild(selectedIngredientP);

  //closing ingredient finder
  const finder = document.getElementById("ingredientFinder");
  finder.classList.remove("active");
  open = false;
  //adding cross event listener
  closeCross.addEventListener("click", function() {
  
Tag.removeIngredient(selectedIngredientP.textContent);
tagDiv.removeChild(selectedIngredientP);
  ReloadPage(Tag);

}
  );
  // fin fabrication  tagZone 

    //implementing selectedList
    Tag.ingredientsTaglist.push(e.target.textContent);

ReloadPage(Tag);
});

  
