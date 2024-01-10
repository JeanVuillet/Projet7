import { reloadMasterList } from "./reloadMasterList.mjs";
import { Tag } from "../Tag/tags.mjs";

export class Finders{

static ingredentsFinder=[];
static ustensilsFinder=[];
static appareilsFinder=[];

   static reloadFinders(Tag){
   Finders.reloadIngredientsFinder(Tag);
    // Finders.reloadUstensilsFinder(Tag);
    // Findrers.reloadAppareilsFinder(Tag);
};

  
static reloadIngredientsFinder(Tag){



      
          // verification qu au moins un element a ete selectionne
           
          
          let masterList=reloadMasterList(Tag);
              let listIngredients = [];
          // parcourir des recettes de masterList
            for (let i = 0; i < masterList.length; i++) {
                // parcourt des ingredients de chaque recette
                for (let j = 0; j < masterList[i].ingredients.length; j++) {
                  let present=false;
               // comparer chaque ingredient a sa TagList si present =true
                  for( let k=0; k<Tag.ingredientsTaglist.length; k++){
                     
                     if(Tag.ingredientsTaglist[k]==masterList[i].ingredients[j].ingredient){
                      present==true;
                     } 
          
                  }
                  if(present==false) 
                  // si l ingredient n est pas dans la taglist on l ajoute au finder
                  {Finders.ingredentsFinder.push(masterList[i].ingredients[j].ingredient) };
                }
              }
          
              Finders.ingredentsFinder  =  Finders.ingredentsFinder.sort(function (a, b) {
                if (a > b) {
                  return 1;
                } else {
                  return -1;
                }
              });
              let newIngredientsFinder = [Finders.ingredentsFinder[0]];
              let i = 0;

              for(let i=0; i<Finders.ingredentsFinder.length; i++){
                for (let j=0; j<newIngredientsFinder.length; j++){
             
                if (newIngredientsFinder[i] != Finders.ingredentsFinder[j]) {
                  newIngredientsFinder.push(Finders.ingredentsFinder[j]);
                  i++;
                }
              }
              };
              Finders.ingredentsFinder=[];
              Finders.ingredentsFinder=newIngredientsFinder;

           
                   // implementing Dom
        const ingredientDiv = document.getElementById("finders__ingrédients");
        for(let i=0; i<Finders.ingredentsFinder.length; i++){
        let ingredientP = document.createElement("p");
        ingredientP.textContent = `${ Finders.ingredentsFinder[i]}`;
        ingredientDiv.appendChild(ingredientP);
        }

            }

   
   
      }

