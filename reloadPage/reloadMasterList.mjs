import { recipes } from "../recipes.mjs";
import recetteMaker from "../recette.mjs";
export class MasterList{
 static masterList=[];
 static reloadMasterList(tag){
       

    let   masterList=[];
     
     // FABRICATION DE NOUVELLE MASTERLIST
     //traiter chaque recette
         for (let i = 0; i < recipes.length; i++) {
           // parcourir la liste de tag
           // par defaut on dit qu il est present au cas ou tagList serait vide
          let present;
          let inputMatch;

     present=  ((tag.checkTags(recipes[i].ingredients, recipes[i].appliance, recipes[i].ustensiles)));
    inputMatch=MasterList.checkInupt(recipes[i]);
         if ((present==true) && (inputMatch==true))
         {masterList.push(recipes[i])}
         }
     console.log(masterList);
       MasterList.masterList=masterList;
     // IMPLEMENTATION DANS LE DOM

     const sectionRecettes = document.getElementById("recettes");
     sectionRecettes.innerText='';
       
         masterList.forEach(function (recipe) {
           let recetteArticle = recetteMaker(recipe);
           sectionRecettes.appendChild(recetteArticle);})
     
           const recipesTotalDiv=document.getElementById("recipesTotal");
           recipesTotalDiv.innerText='';
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