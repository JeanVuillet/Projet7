import { reloadMasterList } from "./reloadMasterList.mjs";
import { Tag } from "../Tag/tags.mjs";

export function reloadFinders(Tag){
    reloadIngredientsFinder(Tag);
    // reloadUstensilsFinder(Tag);
    // reloadAppareilsFinder(Tag);
};

function   reloadIngredientsFinder(Tag){

    // // verification qu au moins un element a ete selectionne
     
    let masterList=reloadMasterList(Tag);
        let listIngredients = [];
    // parcourir des recettes de masterList
      for (let i = 0; i < masterList.length; i++) {
          // parcourt des ingredients de chaque recette
          for (let j = 0; j < masterList[i].ingredients.length; j++) {
            let present=false;
         // comparer chaque ingredient a la ingredientsTagList si present =true
            for( let k=0; k<Tag.ingredientsTaglist.length; k++){
               
               if(Tag.ingredientsTaglist[k]==masterList[i].ingredients[j].ingredient){
                present=true;
               } 
    
            }
            if(present==false) 
            {Tag.ingredientsTaglist.push(masterList[i].ingredients[j].ingredient) };
          }
        }
    
        Tag.ingredientsTaglists = Tag.ingredientsTaglist.sort(function (a, b) {
          if (a > b) {
            return 1;
          } else {
            return -1;
          }
        });
        let CleanListIngredients = [listIngredients[0]];
        let i = 0;
        Tag.ingredientsTaglists.forEach(function (ingredient) {
          if (CleanListIngredients[i] != ingredient) {
            CleanListIngredients.push(ingredient);
            i++;
          }
        });
        return CleanListIngredients;
        // implementing Dom
        const ingredientDiv = document.getElementById("finders__ingrédients");
        for(let i=0; i<Tag.ingredientsTaglist.length; i++){
        let ingredientP = document.createElement("p");
        ingredientP.textContent = `${ Tag.ingredientsTaglist[i]}`;
        ingredientDiv.appendChild(ingredientP);
        }
      }