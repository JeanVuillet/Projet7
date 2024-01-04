import {recipes} from "./recipes.mjs";

export  function alerter(){
//sort ingredients

let listIngredients=[];

for(let i=0; i<recipes.length; i++){
    for(let j=0; j<recipes[i].ingredients.length; j++){
        listIngredients.push(recipes[i].ingredients[j].ingredient);

    }
}

listIngredients=listIngredients.sort( function (a,b){if(a>b){return 1} else{ return -1} });

console.log(listIngredients);
};