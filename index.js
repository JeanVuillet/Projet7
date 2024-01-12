
import recetteMaker from "./recette.mjs";
import { Tag } from "./Tag/tags.mjs";
import { ReloadPage } from "./reloadPage.mjs";
import { MasterList } from "./reloadPage/reloadMasterList.mjs";



const ingredientDiv = document.getElementById("finder__ingrédients");
const appareilDiv=document.getElementById('finder__appareils');
const ustensileseDiv =document.getElementById("finder__ustensiles");

var selectedList=[];
export var open = true;
//initiating page 
ReloadPage(Tag);

//INPUT SECTION
let input=document.getElementById('recherche');
input.addEventListener('keyup',function(e){
  if(input.value.length>2){
    ReloadPage(Tag);
  }
})
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
    let chevronUp = document.getElementById("closingIngredientFinder");
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
  let appareilCloser = document.getElementById("closingAppareilFinder");
  appareilCloser.addEventListener("click", function () {
    appareilFinder.classList.remove("active");
    open = false;});


    // USTENSILS SECTION

  //implementing ustensilesFinder
  let ustensilesFinder=document.getElementById('ustensileFinder');
  ustensilesFinder.addEventListener("click", function () {
    if (open == true) {
      ustensilesFinder.classList.add("active");
    } else {
      open = true;
    }

  });

//implementing ustensiles closer
    let UstensilesCloseButton = document.getElementById("closingUstensileFinder");
    UstensilesCloseButton.addEventListener("click", function () {
      ustensilesFinder.classList.remove("active");
      open = false;
    });


// DOM TAG SECTION
   
    // cette fonction permet d implementer les tags dans le dom
    // et dans les finders
    //avec leur close event listener

    function implementingTag(type, event, TagRemoveFunction){
 
   //FINDERLIST
  // implementing selected element in findersList
  let headerElementP=document.createElement("p");
  headerElementP.className="header__selected__element";
  headerElementP.textContent=event.target.textContent;
  let headFinder=document.getElementById(`${type}Selected`);
  headFinder.appendChild(headerElementP);
  //close finder
  const finder = document.getElementById(`${type}Finder`);
  finder.classList.remove("active");
  open = false;

  // TAGLIST
  //implementing element in tagList
  const closeCross = document.createElement("i");
  closeCross.className = "fa-solid fa-xmark";

  let selectedIngredientP = document.createElement("p");
  selectedIngredientP.appendChild(event.target);
    selectedIngredientP.appendChild(closeCross);
    selectedIngredientP.className =`tags__${type}sTags__${type}Tag`;
    let tagDiv = document.getElementById(`${type}sTag`);
    tagDiv.appendChild(selectedIngredientP);



  //adding Tag close event listener
  closeCross.addEventListener("click",function  () {
    
    //cette fonction(placee en paremetres) supprime l element selectionne 
    //de sa TagList et de son headerFinder
    TagRemoveFunction(selectedIngredientP.textContent);
  
    tagDiv.removeChild(selectedIngredientP);
    headFinder.removeChild(headerElementP);
      ReloadPage(Tag);
 
    });
    
  }
// APPEL DE CETTE FONCTION DANS LES EVENT LISTENERS DES FINDERS

//INGREDIENT tagMaker
ingredientDiv.addEventListener("click", function (e) {

  //Adding Tag to taglist
  Tag.ingredientsTaglist.push(e.target.textContent);
  ReloadPage(Tag);

  //creating tag in dom
  implementingTag('ingredient',e, Tag.removeIngredient);


 });

 //appareil TagMaker
 
 appareilDiv.addEventListener("click", function (f) {

  //Adding Tag to taglist
  Tag.appareilsTaglist.push(f.target.textContent);
  ReloadPage(Tag);

  //creating tag in dom
  implementingTag('appareil',f, Tag.removeAppareil);
 });

// ustensiles TagMaker

ustensileseDiv.addEventListener("click", function (g) {

  //Adding Tag to taglist
  Tag.ustensilesTaglist.push(g.target.textContent);
  ReloadPage(Tag);

  //creating tag in dom
  implementingTag('ustensile',g, Tag.removeUstensil);



 });




