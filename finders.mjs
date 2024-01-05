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