import { recipes } from "./recipes.mjs";


import recetteMaker from "./recette.mjs"

var masterList=[];
export function reloadMasterList(selectedList,) {
masterList=[];

const tags= new tags();
//traiter chaque recette
    for (let i = 0; i < recipes.length; i++) {
      // parcourir la liste de tag
      // par defaut on dit qu il est present au cas ou tagList serait vide
     let present=true;



// testing tagClass



      for (let j = 0; j < selectedList.length; j++) {
      // pour ce tag parcourir la liste des ingredients de cette recette
      //par defaut il est abscent
       present=false;
      for (let k = 0; k < recipes[i].ingredients.length; k++) {
  
   //si un ingredient est egale au tag=true
   

          if (selectedList[j]==recipes[i].ingredients[k].ingredient) {
       present=true;
          }
  
      }
      //a la sortie de cette boucle si aucun ingredient=tag (false) on sort
      // de cette recette
      if (present==false){break;}
      
      // si true alors ce tag la est validee et la liste des ingridients 
      //  de cette recette bouclent sur le prochain tag

    }
    // a la sortie si on est pas passe par false alors tous les ingredients de 
    // cette recette sont presents dans la tagList 
    // donc on ajoute cette recette a masterlist
    if (present==true){masterList.push(recipes[i])}
    }

  


    const sectionRecettes = document.getElementById("recettes");
    sectionRecettes.innerHTML='';
  
    masterList.forEach(function (recipe) {
      let recetteArticle = recetteMaker(recipe);
      sectionRecettes.appendChild(recetteArticle);})

    return masterList;

}

export default class listMaker {
//   sort ingredients

// creer  a partir de masterlist une nouvelle liste d
// ingredients qui ne contient pas les ingredients selectionnes


// Ancienne version de sort ingredients
  sortIngredients(selectedList) {
// verification qu au moins un element a ete selectionne
 

let masterList=reloadMasterList(selectedList);
    let listIngredients = [];
// parcourir des recettes de masterList
  for (let i = 0; i < masterList.length; i++) {
      // parcourt des ingredients de chaque recette
      for (let j = 0; j < masterList[i].ingredients.length; j++) {
        let present=false;
     // comparer chaque ingredient a la selected list si present =true
        for( let k=0; k<selectedList.length; k++){
           
           if(selectedList[k]==masterList[i].ingredients[j].ingredient){
            present==true;
           } 

        }
        if(present==false) 
        {listIngredients.push(masterList[i].ingredients[j].ingredient) };
      }
    }

    listIngredients = listIngredients.sort(function (a, b) {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });
    let CleanListIngredients = [listIngredients[0]];
    let i = 0;
    listIngredients.forEach(function (ingredient) {
      if (CleanListIngredients[i] != ingredient) {
        CleanListIngredients.push(ingredient);
        i++;
      }
    });
    return CleanListIngredients;
  }

  




}
