import listMaker from "./listMaker.mjs";


const listMakerObject=new listMaker();


export function finderIngredients(input){

    let newIngredientList=listMakerObject.sortIngredients().filter(function(ingredient){
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

export function finderUstensils(input){

    let newUstensilsList=listMakerObject.sortUstensilss().filter(function(ustensils){
        if (ustensils.toLowerCase().includes(input.value.toLowerCase())){
            return ustensils
        }
    });
    return newUstensilsList;
}