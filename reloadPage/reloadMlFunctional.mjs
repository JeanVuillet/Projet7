import { recipes } from "../recipes.mjs";
import recetteMaker from "../recette.mjs";
import { NewTag } from "../tagsFunctional.mjs";

export class FunctionalMasterList{
 static masterList=[];

 static reloadFunctionalMasterList(tag){
       

    let   masterList=[];
     
     // FABRICATION DE NOUVELLE MASTERLIST
     
     //fitrer chaque recette
var ingredientsPresent=[];
       masterList= recipes.filter( function(recipe){
        if( (NewTag.checkTags (recipe))
        &&(FunctionalMasterList.checkInupt(recipe))) 
        {return true}
        else{return false}
    });

console.log('je suis newMethode');
console.log(masterList); 
//raffraichissement de masterList
FunctionalMasterList.masterList=masterList;
   // IMPLEMENTATION DANS LE DOM

     const sectionRecettes = document.getElementById("recettes");
     sectionRecettes.innerHTML='';
       
         masterList.forEach(function (recipe) {
           let recetteArticle = recetteMaker(recipe);
           sectionRecettes.appendChild(recetteArticle);})
     
           const recipesTotalDiv=document.getElementById("recipesTotal");
           recipesTotalDiv.innerHTML='';
           recipesTotalDiv.innerText=`${masterList.length} recettes`;

}

static  checkInupt(recette){

    let inputMatch;
    let input=document.getElementById('recherche');
  //checking recette name match
        if(recette.name.toLowerCase().includes(input.value.toLowerCase()))
        {inputMatch=true;return inputMatch};
  //checking recette description match
        if(recette.description.toLowerCase().includes(input.value.toLowerCase()))
        {inputMatch=true;return inputMatch};
  //checking recette ingredients match
        for(let i=0; i<recette.ingredients.length; i++){
  
              if(recette.ingredients[i].ingredient.toLowerCase().includes(input.value.toLowerCase()))
  
              {inputMatch=true; return inputMatch;}
  
            }
  //no match
         inputMatch=false;
         return inputMatch;
        }
}