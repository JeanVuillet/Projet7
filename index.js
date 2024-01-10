
import recetteMaker from "./recette.mjs";
import { Tag } from "./Tag/tags.mjs";
import { ReloadPage } from "./reloadPage.mjs";


const finders = document.getElementsByClassName("finders__option");
const ingredientDiv = document.getElementById("finders__ingrédients");
var selectedList=[];
export var open = true;
//initiating page 
ReloadPage(Tag);
// Implementing ingredientsFinder
let ingredientFinder=document.getElementById('ingredientFinder');
  ingredientFinder.addEventListener("click", function () {
    if (open == true) {
      ingredientFinder.classList.add("active");
    } else {
      open = true;
    }
    ReloadPage(Tag);
  });

Array.from(finders).forEach((element) => {
  //implementing closer
  let chevronUp = element.getElementsByClassName("fa-chevron-up");
  chevronUp[0].addEventListener("click", function () {
    element.classList.remove("active");
    open = false;
  });


});





//including ingredient finder content

// listMakerObject.sortIngredients(selectedList).forEach(function (ingredient) {

//   let ingredientP = document.createElement("p");
//   ingredientP.textContent = `${ingredient}`;
//   ingredientDiv.appendChild(ingredientP);
// });

//implementing ingredient tagMaker
ingredientDiv.addEventListener("click", function (e) {

  //implement zone taglist du dom
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
  

}
  );
  // fin fabrication  tagZone 

    //implementing selectedList
    Tag.ingredientsTaglist.push(e.target.textContent);

ReloadPage(Tag);
});

export function getSelectedList(){
    return selectedList;
};
