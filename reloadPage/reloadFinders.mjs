
import { Tag } from "../Tag/tags.mjs";

import { FunctionalMasterList } from "./reloadMlFunctional.mjs";
export class Finders{

static ingredentsFinder=[];
static ustensilesFinder=[];
static appareilsFinder=[];

   static reloadFinders(Tag){
   Finders.reloadIngredientsFinder(Tag);
   Finders.reloadAppareilsFinder(Tag);
    Finders.reloadUstensilesFinder(Tag);
  
};

  
static reloadIngredientsFinder(Tag){



      
          // verification qu au moins un element a ete selectionne
           
          
       
              Finders.ingredentsFinder = [];
          // parcourir des recettes de masterList
            for (let i = 0; i < FunctionalMasterList.masterList.length; i++) {
                // parcourt des ingredients de chaque recette
                for (let j = 0; j < FunctionalMasterList.masterList[i].ingredients.length; j++) {
                  let present=false;
               // comparer chaque ingredient a sa TagList si present =true
                  for( let k=0; k<Tag.ingredientsTaglist.length; k++){
                     
                     if(Tag.ingredientsTaglist[k]==FunctionalMasterList.masterList[i].ingredients[j].ingredient.toLowerCase()){
                      present=true;
                     } 
          
                  }
                  if(present==false) 
                  // si l ingredient n est pas dans la taglist on l ajoute au finder
                  {Finders.ingredentsFinder.push(FunctionalMasterList.masterList[i].ingredients[j].ingredient.toLowerCase()) 
                
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
                  newIngredientsFinder.push(FilteredIngredientlist[i].toLowerCase());
               
                }
              }
              
              Finders.ingredentsFinder=[];
              Finders.ingredentsFinder=newIngredientsFinder;

           
                   // implementing Dom
               
            let ingredientDiv = document.getElementById("finder__ingrédients");
            ingredientDiv.innerHTML='';
        for(let i=0; i<Finders.ingredentsFinder.length; i++){
        let ingredientP = document.createElement("p");
        ingredientP.textContent = `${Finders.ingredentsFinder[i]}`;
        ingredientDiv.appendChild(ingredientP);


        }
            
        
   
} 
   
static reloadAppareilsFinder(Tag){



      
  // verification qu au moins un element a ete selectionne
   
  

      Finders.appareilsFinder = [];
  // parcourir des recettes de masterList
    for (let i = 0; i < FunctionalMasterList.masterList.length; i++) {
        // parcourt des appareils de chaque recette

          let present=false;
       // comparer l appareil de cette recette a sa TagList si present =true
          for( let k=0; k<Tag.appareilsTaglist.length; k++){
             
             if(Tag.appareilsTaglist[k]==FunctionalMasterList.masterList[i].appliance.toLowerCase()){
              present=true;
              break;
             } 
  
          }
          if(present==false) 
          // si l ingredient n est pas dans la taglist on l ajoute au finder
          {Finders.appareilsFinder.push(FunctionalMasterList.masterList[i].appliance.toLowerCase()) 
        
          };
        }
     
      console.log(Finders.appareilsFinder);
  let FilteredAppareilslist=[];
       FilteredAppareilslist  =  Finders.appareilsFinder.sort(function (a, b) {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      });
      let newAppareilsFinder=[];
         newAppareilsFinder = [FilteredAppareilslist[0]];
      let i = 0;

      for(let i=1; i<FilteredAppareilslist.length; i++){
 
     
        if (FilteredAppareilslist[i] !=FilteredAppareilslist[i-1] ) {
          newAppareilsFinder.push(FilteredAppareilslist[i]);
          
        }
      }
      
      Finders.appareilsFinder=[];
      Finders.appareilsFinder=newAppareilsFinder;

   
           // implementing Dom
       
    let appareilDiv = document.getElementById("finder__appareils");
    appareilDiv.innerHTML='';
for(let i=0; i<Finders.appareilsFinder.length; i++){
let appareilP = document.createElement("p");
appareilP.textContent = `${Finders.appareilsFinder[i]}`;
appareilDiv.appendChild(appareilP);


}
    


} 


static reloadUstensilesFinder(Tag){



      
  // verification qu au moins un element a ete selectionne
   
  

      Finders.ustensilesFinder = [];
  // parcourir des recettes de masterList
    for (let i = 0; i < FunctionalMasterList.masterList.length; i++) {
        // parcourt des ustensiles de chaque recette
        for (let j = 0; j < FunctionalMasterList.masterList[i].ustensiles.length; j++) {
          let present=false;
       // comparer chaque ingredient a sa TagList si present =true
          for( let k=0; k<Tag.ustensilesTaglist.length; k++){
             
             if(Tag.ustensilesTaglist[k]==FunctionalMasterList.masterList[i].ustensiles[j].toLowerCase()){
              present=true;
             } 
  
          }
          if(present==false) 
          // si l ustensiles n est pas dans la taglist on l ajoute au finder
          {Finders.ustensilesFinder.push(FunctionalMasterList.masterList[i].ustensiles[j].toLowerCase()) 
        
          };
        }
      }
      console.log(Finders.ustensilesFinder);
  let FilteredUstensillist=[];
       FilteredUstensillist  =  Finders.ustensilesFinder.sort(function (a, b) {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      });
      let newUstensilesFinder=[];
         newUstensilesFinder = [FilteredUstensillist[0]];
      let i = 0;

      for(let i=1; i<FilteredUstensillist.length; i++){
 
     
        if (FilteredUstensillist[i] !=FilteredUstensillist[i-1] ) {
          newUstensilesFinder.push(FilteredUstensillist[i]);
          i++;
        }
      }
      
      Finders.ustensilesFinder=[];
      Finders.ustensilesFinder=newUstensilesFinder;

   
           // implementing Dom
       
    let ustensilesDiv = document.getElementById("finder__ustensiles");
    ustensilesDiv.innerHTML='';
for(let i=0; i<Finders.ustensilesFinder.length; i++){
let ustensilesP = document.createElement("p");
ustensilesP.textContent = `${Finders.ustensilesFinder[i]}`;
ustensilesDiv.appendChild(ustensilesP);


}
    


} 
}
