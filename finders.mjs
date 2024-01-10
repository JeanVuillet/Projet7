import listMaker from "./listMaker.mjs";

import { getSelectedList } from "./index.js";
const listMakerObject=new listMaker();

let selectedList=getSelectedList();
export function finderIngredients(input){

    let newIngredientList=listMakerObject.sortIngredients(selectedList).filter(function(ingredient){
        if (ingredient.toLowerCase().includes(input.value.toLowerCase())){
            return ingredient
        }
    });
    return newIngredientList;
}
export function finderAppareils(input){

    let newAppareilList=listMakerObject.sortAppareils().filter(function(appareil){
        if (appareil.toLowerCase().includes(input.value.toLowerCase())){
            return appareil
        }
    });
    return newAppareilList;
}

export function finderUstensiles(input){

    let newUstensilesList=listMakerObject.sortUstensiless().filter(function(ustensiles){
        if (ustensiles.toLowerCase().includes(input.value.toLowerCase())){
            return ustensiles
        }
    });
    return newUstensilesList;
}