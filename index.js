import listMaker from "./listMaker.mjs";
import recetteMaker from "./recette.mjs";
import { reloadMasterList } from "./listMaker.mjs";
import { Tag } from "./Tag/tags.mjs";
import { ReloadPage } from "./reloadPage.mjs";


const finders = document.getElementsByClassName("finders__option");
const ingredientDiv = document.getElementById("finders__ingrédients");
var selectedList=[];
export var open = true;
// Utiliser forEach sur la collection pour itérer sur chaque élément
Array.from(finders).forEach((element) => {
  element.addEventListener("click", function () {
    if (open == true) {
      element.classList.add("active");
    } else {
      open = true;
    }
  });
});
Array.from(finders).forEach((element) => {
  //implementing closer
  let chevronUp = element.getElementsByClassName("fa-chevron-up");
  chevronUp[0].addEventListener("click", function () {
    element.classList.remove("active");
    open = false;
  });

  ReloadPage(Tag);
});




const listMakerObject = new listMaker();
//including ingredient finder content

// listMakerObject.sortIngredients(selectedList).forEach(function (ingredient) {

//   let ingredientP = document.createElement("p");
//   ingredientP.textContent = `${ingredient}`;
//   ingredientDiv.appendChild(ingredientP);
// });

//implementing ingredient tagMaker
ingredientDiv.addEventListener("click", function (e) {
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
    tagDiv.removeChild(selectedIngredientP)
    selectedList.pop(selectedIngredientP.innerText);
  
       
         ReloadPage(Tag);
        



}
  );
    //implementing selectedList
    selectedList.push(e.target.textContent);
    //implementing TagObject Class
    TagObject.ingredientsTaglist.push(e.target.textContent);
    ingredientDiv.innerHTML='';
   listMakerObject.sortIngredients(selectedList).forEach(function (ingredient) {

    let ingredientP = document.createElement("p");
    ingredientP.textContent = `${ingredient}`;
    ingredientDiv.appendChild(ingredientP);;
});
});

export function getSelectedList(){
    return selectedList;
};
