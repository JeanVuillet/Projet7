


import { FunctionalMasterList } from "./reloadMlFunctional.mjs";
export class Finders{

static ingredentsFinder=[];
static ustensilesFinder=[];
static appareilsFinder=[];

   static reloadFinders(NewTag){
   Finders.reloadIngredientsFinder(NewTag);
   Finders.reloadAppareilsFinder(NewTag);
    Finders.reloadUstensilesFinder(NewTag);
  
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
  ElementDiv.innerHTML='';
  for(let i=0; i<FindersList.length; i++){
  let elementP = document.createElement("p");
  elementP.textContent = `${FindersList[i]}`;
  ElementDiv.appendChild(elementP);
  
    }
  }
  
static reloadIngredientsFinder(NewTag){



      
          // verification qu au moins un element a ete selectionne
           
          
       
              Finders.ingredentsFinder = [];
          // parcourir des recettes de masterList
            for (let i = 0; i < FunctionalMasterList.masterList.length; i++) {
                // parcourt des ingredients de chaque recette
                for (let j = 0; j < FunctionalMasterList.masterList[i].ingredients.length; j++) {
                  let present=false;
               // comparer chaque ingredient a sa TagList si present =true
                  for( let k=0; k<NewTag.ingredientsTaglist.length; k++){
                     
                     if(NewTag.ingredientsTaglist[k]==FunctionalMasterList.masterList[i].ingredients[j].ingredient.toLowerCase()){
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
          //on trie les ingredients de ingredientsFinder dans l ordre alphabetique
               FilteredIngredientlist  =  Finders.ingredentsFinder.sort(function (a, b) {
                if (a > b) {
                  return 1;
                } else {
                  return -1;
                }
              });
              let newIngredientsFinder=[];
              if(FilteredIngredientlist.length!=0){
                 newIngredientsFinder = [FilteredIngredientlist[0]];}
              let i = 0;
// suppression des doublons dans ingrdients list
              for(let i=1; i<FilteredIngredientlist.length; i++){
         
             //si un element d ingredient list est different du precedent on l ajoute a la nouvelle ingredientList
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
   
static reloadAppareilsFinder(NewTag){



      
  // verification qu au moins un element a ete selectionne
   
  

      Finders.appareilsFinder = [];
  // parcourir des recettes de masterList
    for (let i = 0; i < FunctionalMasterList.masterList.length; i++) {
        // parcourt des appareils de chaque recette

          let present=false;
       // comparer l appareil de cette recette a sa TagList si present =true
          for( let k=0; k<NewTag.appareilsTaglist.length; k++){
             
             if(NewTag.appareilsTaglist[k]==FunctionalMasterList.masterList[i].appliance.toLowerCase()){
              present=true;
              break;
             } 
  
          }
          if(present==false) 
          // si l appareil n est pas dans la taglist on l ajoute au finder
          {Finders.appareilsFinder.push(FunctionalMasterList.masterList[i].appliance.toLowerCase()) 
        
          };
        }
     
      console.log(Finders.appareilsFinder);
  let FilteredAppareilslist=[];
  //on trie les appareils par ordre alphabetique
       FilteredAppareilslist  =  Finders.appareilsFinder.sort(function (a, b) {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      });
      let newAppareilsFinder=[];
    if(FilteredAppareilslist.length>0){     newAppareilsFinder = [FilteredAppareilslist[0]]};
      let i = 0;
// on supprime les doublons dans la liste AppareilFinders
      for(let i=1; i<FilteredAppareilslist.length; i++){
 
     //si un element d appareilList est different de l element precedent on 
     //l ajoute a la nouvelle appareil liste (sans doublons)
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


static reloadUstensilesFinder(NewTag){



      
  // verification qu au moins un element a ete selectionne
   
  

      Finders.ustensilesFinder = [];
  // parcourir des recettes de masterList
    for (let i = 0; i < FunctionalMasterList.masterList.length; i++) {
        // parcourt des ustensiles de chaque recette
        for (let j = 0; j < FunctionalMasterList.masterList[i].ustensiles.length; j++) {
          let present=false;
       // comparer chaque ingredient a sa TagList si present =true
          for( let k=0; k<NewTag.ustensilesTaglist.length; k++){
             
             if(NewTag.ustensilesTaglist[k]==FunctionalMasterList.masterList[i].ustensiles[j].toLowerCase()){
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
  // on trie les ustensiles par ordre alphabetique
       FilteredUstensillist  =  Finders.ustensilesFinder.sort(function (a, b) {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      });
      let newUstensilesFinder=[];
     if(FilteredUstensillist.length>0){    newUstensilesFinder = [FilteredUstensillist[0]]};
      let i = 0;
// On supprime les doublons de finderUstensiles
      for(let i=1; i<FilteredUstensillist.length; i++){
 
     //si un element est different de son precedent il est ajouter a la 
    // nouvelle ustensiles liste sans doublons
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
