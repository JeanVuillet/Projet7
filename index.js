
import recetteMaker from "./recette.mjs";
import { Tag } from "./Tag/tags.mjs";
import { ReloadPage } from "./reloadPage.mjs";



const ingredientDiv = document.getElementById("finders__ingrédients");
const appareilDiv=document.getElementById('finders__appareils');
const ustensileseDiv =document.getElementById('finders__ustensiless');
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

  //implementing ustensilesFinder
  let ustensilesFinder=document.getElementById('ustensilesFinder');
  ustensilesFinder.addEventListener("click", function () {
    if (open == true) {
      ustensilesFinder.classList.add("active");
    } else {
      open = true;
    }

  });

//implementing ustensiles closer
    let UstensilesCloseButton = document.getElementById("closingUstensilesFinder");
    UstensilesCloseButton.addEventListener("click", function () {
      ustensilesFinder.classList.remove("active");
      open = false;
    });



   
    // cette fonction permet d implementer les tags dans le dom
    //avec leur close event listener

    function implementingTag(type, event, TagRemoveFunction){
 
      const closeCross = document.createElement("i");
    closeCross.className = "fa-solid fa-xmark";
  
    let selectedIngredientP = document.createElement("p");
    selectedIngredientP.appendChild(event.target);
  
    selectedIngredientP.appendChild(closeCross);
    selectedIngredientP.className =`tags__${type}sTags__${type}Tag`;
    let tagDiv = document.getElementById(`${type}sTag`);
    tagDiv.appendChild(selectedIngredientP);

      //close finder
  const finder = document.getElementById(`${type}Finder`);
  finder.classList.remove("active");
  open = false;

  //adding Tag close event listener
  closeCross.addEventListener("click",function  () {
    
    //cette fonction(placee en paremetres) supprime l element selectionne 
    //de sa TagList
    TagRemoveFunction(selectedIngredientP.textContent);
  
    tagDiv.removeChild(selectedIngredientP);
      ReloadPage(Tag);
 
    });
    
  }
// APPEL DE CETTE FONCTION DANS LES EVENT LISTENERS DES FINDERS

//ingredient tagMaker
ingredientDiv.addEventListener("click", function (event) {

  //Adding Tag to taglist
  Tag.ingredientsTaglist.push(event.target.textContent);
  ReloadPage(Tag);

  //creating tag in dom
  implementingTag('ingredient',event, Tag.removeIngredient);


 });

 //appareil TagMaker
 
 appareilDiv.addEventListener("click", function (event) {

  //Adding Tag to taglist
  Tag.appareilsTaglist.push(event.target.textContent);
  ReloadPage(Tag);

  //creating tag in dom
  implementingTag('appareil',event, Tag.removeAppareil);

// ustensiles TagMaker

ustensileseDiv.addEventListener("click", function (event) {

  //Adding Tag to taglist
  Tag.ustensilesTaglist.push(event.target.textContent);
  ReloadPage(Tag);

  //creating tag in dom
  implementingTag('ustensilese',event, Tag.removeUstensil);



 });



 })
