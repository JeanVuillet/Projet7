
import { Tag } from "../Tag/tags.mjs";
import { MasterList } from "./reloadMasterList.mjs";
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
           
          
       
              Finders.ingredentsFinder = [];
          // parcourir des recettes de masterList
            for (let i = 0; i < MasterList.masterList.length; i++) {
                // parcourt des ingredients de chaque recette
                for (let j = 0; j < MasterList.masterList[i].ingredients.length; j++) {
                  let present=false;
               // comparer chaque ingredient a sa TagList si present =true
                  for( let k=0; k<Tag.ingredientsTaglist.length; k++){
                     
                     if(Tag.ingredientsTaglist[k]==MasterList.masterList[i].ingredients[j].ingredient){
                      present==true;
                     } 
          
                  }
                  if(present==false) 
                  // si l ingredient n est pas dans la taglist on l ajoute au finder
                  {Finders.ingredentsFinder.push(MasterList.masterList[i].ingredients[j].ingredient) 
                
                  };
                }
              }
              console.log(Finders.ingredentsFinder);
          let FilteredIngredientlist=[];
               FilteredIngredientlist  =  Finders.ingredentsFinder.sort(function (a, b) {
                if (a > b) {
                  return 1;
                } else {
                  return -1;
                }
              });
              let newIngredientsFinder=[];
                 newIngredientsFinder = [FilteredIngredientlist[0]];
              let i = 0;

              for(let i=1; i<FilteredIngredientlist.length; i++){
         
             
                if (FilteredIngredientlist[i] !=FilteredIngredientlist[i-1] ) {
                  newIngredientsFinder.push(FilteredIngredientlist[i]);
                  i++;
                }
              }
              
              Finders.ingredentsFinder=[];
              Finders.ingredentsFinder=newIngredientsFinder;

           
                   // implementing Dom
               
            let ingredientDiv = document.getElementById("finders__ingrédients");
            ingredientDiv.innerHTML='';
        for(let i=0; i<Finders.ingredentsFinder.length; i++){
        let ingredientP = document.createElement("p");
        ingredientP.textContent = `${Finders.ingredentsFinder[i]}`;
        ingredientDiv.appendChild(ingredientP);


        }
            
        
   
} 
        
}
