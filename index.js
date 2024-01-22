
import recetteMaker from "./recette.mjs";
import { Tag } from "./Tag/tags.mjs";
import { ReloadPage } from "./reloadPage.mjs";
import { MasterList } from "./reloadPage/reloadMasterList.mjs";
import { Finders } from "./reloadPage/reloadFinders.mjs";



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
  for(let i=0; i<3; i++){
let active=document.querySelector('.active');
if(active){
active.classList.remove('active');}}
  if((input.value.length>2)||(input.value.length==0)){
    ReloadPage(Tag);
  }
  
})
// FINDERS SECTION

//INGREDIENTS SECTION

//Implenting ingredient Imput
const ingredientsInput=document.getElementById('ingredientsInput');
ingredientsInput.addEventListener('keyup',function(e){
Finders.inputFinders(ingredientsInput,Finders.ingredentsFinder,ingredientDiv);
})
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
// inplementing Appareil input

const AppareilsInput=document.getElementById('appareilsInput');
AppareilsInput.addEventListener('keyup',function(e){
Finders.inputFinders(AppareilsInput,Finders.appareilsFinder,appareilDiv);
})
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
//implementing ustensilesInput
let ustensilesInput=document.getElementById('ustensilesInput');
ustensilesInput.addEventListener('keyup',function(e){
  Finders.inputFinders(ustensilesInput,Finders.ustensilesFinder,ustensileseDiv);});
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
  const closeCrossFinder = document.createElement("i");
  closeCrossFinder.className = "fa-solid fa-xmark";


  let headerElementP=document.createElement("p");
  headerElementP.className="header__selected__element";
  headerElementP.textContent=event.target.textContent;
  headerElementP.appendChild(closeCrossFinder);
  let headFinder=document.getElementById(`${type}Selected`);
  headFinder.appendChild(headerElementP);

  closeCrossFinder.addEventListener("click",function  () {
    
    //cette fonction(placee en paremetres) supprime l element selectionne 
    //de sa TagList et de son headerFinder
    TagRemoveFunction(selectedIngredientP.textContent);
  
    tagDiv.removeChild(selectedIngredientP);
    headFinder.removeChild(headerElementP);
      ReloadPage(Tag);
 
    });
  //close finder
  const finder = document.getElementById(`${type}Finder`);
  finder.classList.remove("active");
  open = false;

  // TAGLIST
  //implementing element in tagDiv
  const closeCross = document.createElement("i");
  closeCross.className = "fa-solid fa-xmark";



  let selectedIngredientP = document.createElement("p");
  selectedIngredientP.appendChild(event.target);
    selectedIngredientP.appendChild(closeCross);
    selectedIngredientP.className =`tags__tagDiv__tag`;
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
if(e.target.textContent.length>0){
  //Adding Tag to taglist
  Tag.ingredientsTaglist.push(e.target.textContent.toLowerCase());
  ReloadPage(Tag);

  //creating tag in dom
  implementingTag('ingredient',e, Tag.removeIngredient);

 }
 });

 //appareil TagMaker
 
 appareilDiv.addEventListener("click", function (f) {
  if(f.target.textContent.length>0){
  //Adding Tag to taglist
  Tag.appareilsTaglist.push(f.target.textContent.toLowerCase());
  ReloadPage(Tag);

  //creating tag in dom
  implementingTag('appareil',f, Tag.removeAppareil);
 }});

// ustensiles TagMaker

ustensileseDiv.addEventListener("click", function (g) {
  if(g.target.textContent.length>0){
  //Adding Tag to taglist
  Tag.ustensilesTaglist.push(g.target.textContent.toLowerCase());
  ReloadPage(Tag);

  //creating tag in dom
  implementingTag('ustensile',g, Tag.removeUstensil);



 }});




