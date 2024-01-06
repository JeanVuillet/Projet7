import { recipes } from "./recipes.mjs";

import recetteMaker from "./recette.mjs"

var masterList=[];
export function reloadMasterList(selectedList) {
masterList=[];
    if(selectedList.length!=0){

    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        let present=false;
        for (let k = 0; k < selectedList.length; k++) {

          if (recipes[i].ingredients[j].ingredient==selectedList[k]) {
       present=true;
          }
  
      }
      if (present==true){masterList.push(recipes[i])}
    }
  
    }}
    else {masterList=recipes;}

    const sectionRecettes = document.getElementById("recettes");
    sectionRecettes.innerHTML='';
  
    masterList.forEach(function (recipe) {
      let recetteArticle = recetteMaker(recipe);
      sectionRecettes.appendChild(recetteArticle);})

    return masterList;

  }

export default class listMaker {
  //sort ingredients


  sortIngredients(selectedList) {
let masterList=reloadMasterList(selectedList);
    let listIngredients = [];

    for (let i = 0; i < masterList.length; i++) {
      for (let j = 0; j < masterList[i].ingredients.length; j++) {
        let present=false;
        for( let k=0; k<selectedList.length; k++){
           
           if(selectedList[k]==masterList[i].ingredients[j]){
            present=true;
           } 

        }
        if(present==false) {listIngredients.push(masterList[i].ingredients[j].ingredient) };
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
