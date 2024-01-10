import { recipes } from "../../recipes.mjs";
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
          let present=true;
    //  alert(tag.coucou());
     present=  tag.checkTags(recipes[i].ingredients, recipes[i].appliance, recipes[i].ustensiles);
    
         if (present==true){masterList.push(recipes[i])}
         }
     console.log(masterList);
       MasterList.masterList=masterList;
     // IMPLEMENTATION DANS LE DOM

     const sectionRecettes = document.getElementById("recettes");
     sectionRecettes.innerHTML='';
       
         masterList.forEach(function (recipe) {
           let recetteArticle = recetteMaker(recipe);
           sectionRecettes.appendChild(recetteArticle);})
     
    
     
     }
    }