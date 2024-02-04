
import { Tag } from "../Tag/tags.mjs";
import { MasterList } from "./reloadMasterList.mjs";
export class Finders{

static ingredentsFinder=[];
static ustensilesFinder=[];
static appareilsFinder=[];

   static reloadFinders(Tag){
   Finders.reloadIngredientsFinder(Tag);
   Finders.reloadAppareilsFinder(Tag);
    Finders.reloadUstensilesFinder(Tag);
  
};

  static inputFinders(Finder, FindersList,ElementDiv){
let newFinderList=[];
for(let i=0; i<FindersList.length; i++){
  if( FindersList[i].includes(Finder.value.toLowerCase())){
    newFinderList.push(FindersList[i]);
  }
}
FindersList=[];
FindersList=newFinderList;

// implementing newLIst in Dom
ElementDiv.innerText='';
for(let i=0; i<FindersList.length; i++){
let elementP = document.createElement("p");
elementP.textContent = `${FindersList[i]}`;
ElementDiv.appendChild(elementP);

  }
}
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
                     
                     if(Tag.ingredientsTaglist[k]==MasterList.masterList[i].ingredients[j].ingredient.toLowerCase()){
                      present=true;
                     } 
          
                  }
                  if(present==false) 
                  // si l ingredient n est pas dans la taglist on l ajoute au finder
                  {Finders.ingredentsFinder.push(MasterList.masterList[i].ingredients[j].ingredient.toLowerCase()) 
                
                  };
                }
              }
            
          let FilteredIngredientlist=[];
               FilteredIngredientlist  =  Finders.ingredentsFinder.sort(function (a, b) {
                if (a > b) {
                  return 1;
                } else {
                  return -1;
                }
              });
              let newIngredientsFinder=[];
             if(FilteredIngredientlist.length>0){    newIngredientsFinder = [FilteredIngredientlist[0]]};
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
            ingredientDiv.innerText='';
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
    for (let i = 0; i < MasterList.masterList.length; i++) {
        // parcourt des appareils de chaque recette

          let present=false;
       // comparer l appareil de cette recette a sa TagList si present =true
          for( let k=0; k<Tag.appareilsTaglist.length; k++){
             
             if(Tag.appareilsTaglist[k]==MasterList.masterList[i].appliance.toLowerCase()){
              present=true;
              break;
             } 
  
          }
          if(present==false) 
          // si l appareil n est pas dans la taglist on l ajoute au finder
          {Finders.appareilsFinder.push(MasterList.masterList[i].appliance.toLowerCase()) 
        
          };
        }
     
     
  let FilteredAppareilslist=[];
       FilteredAppareilslist  =  Finders.appareilsFinder.sort(function (a, b) {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      });
      let newAppareilsFinder=[];
       if(FilteredAppareilslist.length>0){  newAppareilsFinder = [FilteredAppareilslist[0]]};
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
    appareilDiv.innerText='';
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
    for (let i = 0; i < MasterList.masterList.length; i++) {
        // parcourt des ustensiles de chaque recette
        for (let j = 0; j < MasterList.masterList[i].ustensiles.length; j++) {
          let present=false;
       // comparer chaque ingredient a sa TagList si present =true
          for( let k=0; k<Tag.ustensilesTaglist.length; k++){
             
             if(Tag.ustensilesTaglist[k]==MasterList.masterList[i].ustensiles[j].toLowerCase()){
              present=true;
             } 
  
          }
          if(present==false) 
          // si l ustensiles n est pas dans la taglist on l ajoute au finder
          {Finders.ustensilesFinder.push(MasterList.masterList[i].ustensiles[j].toLowerCase()) 
        
          };
        }
      }
 
  let FilteredUstensillist=[];
       FilteredUstensillist  =  Finders.ustensilesFinder.sort(function (a, b) {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      });
      let newUstensilesFinder=[];
     if(FilteredUstensillist.length>0){    newUstensilesFinder = [FilteredUstensillist[0]];}
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
    ustensilesDiv.innerText='';
for(let i=0; i<Finders.ustensilesFinder.length; i++){
let ustensilesP = document.createElement("p");
ustensilesP.textContent = `${Finders.ustensilesFinder[i]}`;
ustensilesDiv.appendChild(ustensilesP);


}
    


} 
}
