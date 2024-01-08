import { recipes } from "./recipes.mjs";

import recetteMaker from "./recette.mjs";

var masterList = [];
export function reloadMasterList(selectedList) {
   const masterInput=document.getElementById("recherche");
 let masterList = [];
let input=false;
  //traiter chaque recette
  for (let i = 0; i < recipes.length; i++) {
    // par defaut on dit qu il est present au cas ou tagList serait vide
    let present = true;

    // parcourir la liste de tag
    for (let j = 0; j < selectedList.length; j++) {
  
      //par defaut le tag  est abscent de la liste d'ingredients de cette recette
      present = false;
        // pour ce tag parcourir la liste des ingredients de cette recette
      for (let k = 0; k < recipes[i].ingredients.length; k++) {
        // sur la boucle du premier tag , on en profite pour exclure la recette
        // si elle ne colle pas avec l'input

        // if(j==0){
        //     if(recipes[i].ingredients[k].ingredient.startsWith(masterInput.textContent)){input=true;}
        // } else{ if(input==false){ break;}}

        //si un ingredient est egale au tag=true

        if (selectedList[j] == recipes[i].ingredients[k].ingredient) {
          present = true;
        }
      }
      //a la sortie de cette boucle si aucun ingredient n a matche avec le tag
      //ingredient=tag (false) on sort de ce tag 1...
      if (present == false) {
        break;
      }

      // si true alors ce tag la est validee et la liste des ingridients
      //  de cette recette bouclent sur le prochain tag
    }
    //2 et de cette recette
    if (present==false) { break;}

        // a la sortie de la tagLIst, si present=true alors tous les ingredients de
        // cette recette sont presents dans la tagList
    if (present == true) {
          // donc on ajoute cette recette a masterlist si elle commence par les lettres en input

      masterList.push(recipes[i]);
    }
  }

  const sectionRecettes = document.getElementById("recettes");
  sectionRecettes.innerHTML = "";

  masterList.forEach(function (recipe) {
    let recetteArticle = recetteMaker(recipe);
    sectionRecettes.appendChild(recetteArticle);
  });

  return masterList;
}

export default class listMaker {
  //sort ingredients

  // creer  a partir de masterlist une nouvelle liste d
  // ingredients qui ne contient pas les ingredients selectionnes
  sortIngredients(selectedList) {
    // verification qu au moins un element a ete selectionne

    let masterList = reloadMasterList(selectedList);
    let listIngredients = [];
    // parcourir des recettes de masterList
    for (let i = 0; i < masterList.length; i++) {
      // parcourt des ingredients de chaque recette
      for (let j = 0; j < masterList[i].ingredients.length; j++) {
        let present = false;
        // comparer chaque ingredient a la selected list si present =true
        for (let k = 0; k < selectedList.length; k++) {
          if (selectedList[k] == masterList[i].ingredients[j].ingredient) {
            present == true;
          }
        }
        if (present == false) {
          listIngredients.push(masterList[i].ingredients[j].ingredient);
        }
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

  //sort appareils
  sortAppareils() {
    let listAppareils = [];

    for (let i = 0; i < recipes.length; i++) {
      listAppareils.push(recipes[i].appliance);
    }
    listAppareils = listAppareils.sort(function (a, b) {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });

    let CleanListAppareils = [listAppareils[0]];
    i = 0;
    listAppareils.forEach(function (appareil) {
      if (CleanListAppareils[i] != appareil) {
        CleanListAppareils.push(appareil);
        i++;
      }
    });
    return CleanListAppareils;
  }
  //sort ustensils
  sortUstensils() {
    let listUstensils = [];

    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ustensils.length; j++) {
        listUstensils.push(recipes[i].ustensils[j]);
      }
    }

    listUstensils = listUstensils.sort(function (a, b) {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });

    let CleanListUstensils = [listUstensils[0]];
    i = 0;
    listUstensils.forEach(function (ustensil) {
      if (CleanListUstensils[i] != ustensil) {
        CleanListUstensils.push(ustensil);
        i++;
      }
    });
  }
}
