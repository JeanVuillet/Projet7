
import { Tag } from "../Tag/tags.mjs";
import { MasterList } from "./reloadMasterList.mjs";
export class Finders{

static ingredentsFinder=[];
static ustensilesFinder=[];
static appareilsFinder=[];

   static reloadFinders(Tag){
   Finders.reloadIngredientsFinder(Tag);
    Finders.reloadUstensilesFinder(Tag);
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
               
            let ingredientDiv = document.getElementById("finder__ingrédients");
            ingredientDiv.innerHTML='';
        for(let i=0; i<Finders.ingredentsFinder.length; i++){
        let ingredientP = document.createElement("p");
        ingredientP.textContent = `${Finders.ingredentsFinder[i]}`;
        ingredientDiv.appendChild(ingredientP);


        }
            
        
   
} 
   
static reloadUstensilesFinder(Tag){



      
  // verification qu au moins un element a ete selectionne
   
  

      Finders.ustensilesFinder = [];
  // parcourir des recettes de masterList
    for (let i = 0; i < MasterList.masterList.length; i++) {
        // parcourt des ustensiles de chaque recette
        for (let j = 0; j < MasterList.masterList[i].ustensiles.length; j++) {
          let present=false;
       // comparer chaque ingredient a sa TagList si present =true
          for( let k=0; k<Tag.ustensilesTaglist.length; k++){
             
             if(Tag.ustensilesTaglist[k]==MasterList.masterList[i].ustensiles[j].ingredient){
              present==true;
             } 
  
          }
          if(present==false) 
          // si l ustensiles n est pas dans la taglist on l ajoute au finder
          {Finders.ingredentsFinder.push(MasterList.masterList[i].ustensiles[j].ingredient) 
        
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
ustensilesP.textContent = `${Finders.ingredentsFinder[i]}`;
ustensilesDiv.appendChild(ustensilesP);


}
    


} 
}
