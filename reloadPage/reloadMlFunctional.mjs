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
       masterList= recipes.filter( function(recipe){return( NewTag.checkTags (recipe))});

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
static logMasterList(){
    console.log('masterlist is now' );
    console.log(FunctionalMasterList.masterList);
}
}