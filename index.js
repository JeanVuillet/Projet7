
import recetteMaker from "./recette.mjs";

import { ReloadPage } from "./reloadPage.mjs";

import { NewTag } from "./tagsFunctional.mjs";

import { FunctionalMasterList } from "./reloadPage/reloadMlFunctional.mjs";
import { Finders } from "./reloadPage/reloadFinders.mjs";

const ingredientDiv = document.getElementById("finder__ingrédients");
const appareilDiv=document.getElementById('finder__appareils');
const ustensileseDiv =document.getElementById("finder__ustensiles");

var selectedList=[];
export var open = true;
//initiating page 
ReloadPage(NewTag);

//INPUT SECTION

//INPUT SECTION
const input=document.getElementById('recherche');

const inputDiv=document.getElementById('inputDiv');
let crossDiv=document.createElement('div');
crossDiv.className='Header__inputLabel__finder__closeCross';
crossDiv.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" 
width="13px" height="13px" viewBox="0 0 8 8" fill="none">
<path d="M7 7L4 4M4 4L1 1M4 4L7 1M4 4L1 7" stroke="#7A7A7A" 
stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
crossDiv.style.display='none';
inputDiv.appendChild(crossDiv);
crossDiv.addEventListener('click',function()
{input.value='';
crossDiv.style.display='none';
ReloadPage(NewTag);
});


input.addEventListener('keyup',function(e){
  for(let i=0; i<3; i++){

let active=document.querySelector('.active');
if(active){
active.classList.remove('active');}}
if((input.value.length>0) ){
crossDiv.style.display='flex';

}
else{ crossDiv.style.display='none';
ReloadPage(NewTag)}

  if((input.value.length>2)||(input.value.length==0)){
    ReloadPage(NewTag);
  }
  
})
//INGREDIENTS SECTION

      //   EXPORT THIS
//Implenting ingredient Input

const ingredientsInput=document.getElementById('ingredientsInput');
const ingredientsHeaderFinder=document.getElementById('ingredientHeaderFinder');
let ingredientFinderCross=document.createElement('div');
ingredientFinderCross.className='crossFinderDiv';
ingredientFinderCross.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" 
width="8" height="8" viewBox="0 0 8 8" fill="none">
<path d="M7 7L4 4M4 4L1 1M4 4L7 1M4 4L1 7" stroke="#7A7A7A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
ingredientFinderCross.style.display='none';
ingredientsHeaderFinder.appendChild(ingredientFinderCross);
ingredientFinderCross.addEventListener('click',function(){
  ingredientsInput.value='';
  ingredientFinderCross.style.display='none';
  Finders.inputFinders(ingredientsInput,Finders.ingredentsFinder,ingredientDiv); 
 
});
ingredientsInput.addEventListener('keyup',function(e){
  if(ingredientsInput.value.length>0){
    ingredientFinderCross.style.display='flex';
  }
  else{ingredientFinderCross.style.display='none';
}
Finders.inputFinders(ingredientsInput,Finders.ingredentsFinder,ingredientDiv);});

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
        //   EXPORT THIS
// inplementing Appareil input

const AppareilsInput=document.getElementById('appareilsInput');
AppareilsInput.addEventListener('keyup',function(e){
Finders.inputFinders(AppareilsInput,Finders.appareilsFinder,appareilDiv);
})



const appareilsHeaderFinder=document.getElementById('appareilHeaderFinder');
let appareilFinderCross=document.createElement('div');
appareilFinderCross.className='crossFinderDiv';
appareilFinderCross.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" 
width="8" height="8" viewBox="0 0 8 8" fill="none">
<path d="M7 7L4 4M4 4L1 1M4 4L7 1M4 4L1 7" stroke="#7A7A7A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
appareilFinderCross.style.display='none';
appareilsHeaderFinder.appendChild(appareilFinderCross);
appareilFinderCross.addEventListener('click',function(){
  AppareilsInput.value='';
  appareilFinderCross.style.display='none';
  Finders.inputFinders(AppareilsInput,Finders.appareilsFinder,appareilDiv); 
 
});
AppareilsInput.addEventListener('keyup',function(e){
  if(AppareilsInput.value.length>0){
    appareilFinderCross.style.display='flex';
  }
  else{appareilFinderCross.style.display='none';
}
Finders.inputFinders(AppareilsInput,Finders.appareilsFinder,appareilDiv);
});














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

      //   EXPORT THIS
//Implenting ustensil Input
let ustensilesInput=document.getElementById('ustensilesInput');
ustensilesInput.addEventListener('keyup',function(e){
  Finders.inputFinders(ustensilesInput,Finders.ustensilesFinder,ustensileseDiv);});



const ustensilesHeaderFinder=document.getElementById('ustensilesHeaderFinder');
let ustensileFinderCross=document.createElement('div');
ustensileFinderCross.className='crossFinderDiv';
ustensileFinderCross.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" 
width="8" height="8" viewBox="0 0 8 8" fill="none">
<path d="M7 7L4 4M4 4L1 1M4 4L7 1M4 4L1 7" stroke="#7A7A7A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
ustensileFinderCross.style.display='none';
ustensilesHeaderFinder.appendChild(ustensileFinderCross);
ustensileFinderCross.addEventListener('click',function(){
  ustensilesInput.value='';
  ustensileFinderCross.style.display='none';
  Finders.inputFinders(ustensilesInput,Finders.ustensilesFinder,ustensileseDiv); 
 
});
ustensilesInput.addEventListener('keyup',function(e){
  if(ustensilesInput.value.length>0){
    ustensileFinderCross.style.display='flex';
  }
  else{ustensileFinderCross.style.display='none';
}
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


// DOM NewTag SECTION
   
    // cette fonction permet d implementer les tags dans le dom
    // et dans les finders
    //avec leur close event listener
    function implementingTag(type, event, TagRemoveFunction){
 
      //FINDERLIST
     // implementing selected element in findersList
     const closeCrossFinder = document.createElement("div");
     closeCrossFinder.className='closeCrossFinder';
     let closeCross=`<svg width="17" height="17" viewBox="0 0 17
     17" fill="none" xmlns="http://www.w3.org/2000/svg">
     <g id="Group 11"><circle id="Ellipse 5" cx="8.5" cy="8.5" r="8.5" fill="black"/><path id="Vector" 
     d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B"
     stroke-linecap="round" stroke-linejoin="round"/></g></svg>`;
     closeCrossFinder.innerHTML=closeCross;
   
   
   
     let headerElementP=document.createElement("p");
     headerElementP.className="header__selected__element";
     headerElementP.textContent=event.target.textContent;
     headerElementP.appendChild(closeCrossFinder);
     let headFinder=document.getElementById(`${type}Selected`);
     headFinder.appendChild(headerElementP);
   
     closeCrossFinder.addEventListener("click",function  () {
       
       //cette fonction(placee en paremetres) supprime l element selectionne 
       //de sa TagList et de son headerFinder
       TagRemoveFunction(target.textContent);
     
       tagDiv.removeChild(selectedIngredientP);
       headFinder.removeChild(headerElementP);
         ReloadPage(NewTag);
    
       });
     //close finder
     const finder = document.getElementById(`${type}Finder`);
     finder.classList.remove("active");
     open = false;
   
     // TAGLIST
     //implementing element in tagDiv
   const tagCloseCross=document.createElement('div');
   tagCloseCross.className='tagCloseCross';
   tagCloseCross.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" 
   viewBox="0 0 14 13" fill="none">
   <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" 
   stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>`;
   
   
   
     let selectedIngredientP = document.createElement("p");
   let target=event.target;
     event.target.className='target';
     selectedIngredientP.appendChild(target);
       selectedIngredientP.appendChild(tagCloseCross);
       selectedIngredientP.className =`tags__tagDiv__tag`;
       let tagDiv = document.getElementById(`${type}sTag`);
       tagDiv.appendChild(selectedIngredientP);
   
   
   
     //adding Tag close event listener
     tagCloseCross.addEventListener("click",function  () {
       
       //cette fonction(placee en paremetres) supprime l element selectionne 
       //de sa TagList et de son headerFinder
       TagRemoveFunction(target.textContent);
     
       tagDiv.removeChild(selectedIngredientP);
       headFinder.removeChild(headerElementP);
         ReloadPage(NewTag);
    
       });
       
     }
 
// APPEL DE CETTE FONCTION DANS LES EVENT LISTENERS DES FINDERS

//INGREDIENT tagMaker
ingredientDiv.addEventListener("click", function (e) {
if(e.target.textContent.length>0){
  //Adding Tag to taglist
  NewTag.ingredientsTaglist.push(e.target.textContent.toLowerCase());
  ReloadPage(NewTag);

  //creating tag in dom
  implementingTag('ingredient',e, NewTag.removeIngredient);
}

 });

 //appareil TagMaker
 
 appareilDiv.addEventListener("click", function (f) {
  if(f.target.textContent.length>0){
  //Adding Tag to taglist
  NewTag.appareilsTaglist.push(f.target.textContent.toLowerCase());
  ReloadPage(NewTag);

  //creating tag in dom
  implementingTag('appareil',f, NewTag.removeAppareil);
  }
 });

// ustensiles TagMaker

ustensileseDiv.addEventListener("click", function (g) {
  if(g.target.textContent.length>0){
  //Adding Tag to taglist
  NewTag.ustensilesTaglist.push(g.target.textContent.toLowerCase());
  ReloadPage(NewTag);

  //creating tag in dom
  implementingTag('ustensile',g, NewTag.removeUstensil);


  }
 });

document.addEventListener('keydown',(e)=>{
  if(e.key=='a'){
    FunctionalMasterList.reloadFunctionalMasterList(NewTag);


  }});



