import { recipes } from "../recipes.mjs";
import recetteMaker from "../recette.mjs";
import { NewTag } from "../tagsFunctional.mjs";

export class FunctionalMasterList {
  static masterList = [];

  static reloadFunctionalMasterList(tag) {
    let masterList = [];

    // FABRICATION DE NOUVELLE MASTERLIST

    //fitrer chaque recette
    var ingredientsPresent = [];
    masterList = recipes.filter(function (recipe) {
      if (NewTag.checkTags(recipe) && FunctionalMasterList.checkInupt(recipe)) {
        return true;
      } else {
        return false;
      }
    });

    //raffraichissement de masterList
    FunctionalMasterList.masterList = masterList;
    // IMPLEMENTATION DANS LE DOM

    const sectionRecettes = document.getElementById("recettes");
    sectionRecettes.innerText = "";

    masterList.forEach(function (recipe) {
      let recetteArticle = recetteMaker(recipe);
      sectionRecettes.appendChild(recetteArticle);
    });

    const recipesTotalDiv = document.getElementById("recipesTotal");
    recipesTotalDiv.innerText = "";
    recipesTotalDiv.innerText = `${masterList.length} recettes`;
  }

  static checkInupt(recette) {
    let inputMatch;
    let input = document.getElementById("recherche");
    //checking recette name match
    if (recette.name.toLowerCase().includes(input.value.toLowerCase())) {
      inputMatch = true;
      return inputMatch;
    }
    //checking recette description match
    if (recette.description.toLowerCase().includes(input.value.toLowerCase())) {
      inputMatch = true;
      return inputMatch;
    }
    //checking recette ingredients match
    let ingredientPresent = recette.ingredients.find(function (
      ingredientObject
    ) {
      if (
        ingredientObject.ingredient
          .toLowerCase()
          .includes(input.value.toLowerCase())
      ) {
        //si un ingredient de cette recette contient l input on revoie true
        //l ingredient est stocke dans ingredient present
        inputMatch = true;
        return inputMatch;
      }
      //sinon on revoie false et l ingredient est vide
      else {
        inputMatch = false;
        return inputMatch;
      }
    });
    // si l ingredient est plein on valide le test et on revoie true
    if (ingredientPresent) {
      return true;
    }
    //sinon test non valide et on renvoie false
    else {
      return false;
    }
  }
}
