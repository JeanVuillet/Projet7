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
let CleanListIngredients=[listIngredients[0]];
let i=0;
listIngredients.forEach(function (ingredient){if (CleanListIngredients[i]!= ingredient){CleanListIngredients.push(ingredient); i++;}
});
console.log(CleanListIngredients);
//sort appareils
let listAppareils=[];

for(let i=0; i<recipes.length; i++){
   
        listAppareils.push(recipes[i].appliance);
    }
listAppareils=listAppareils.sort( function (a,b){if(a>b){return 1} else{ return -1} });

let CleanListAppareils=[listAppareils[0]];
 i=0;
listAppareils.forEach(function (appareil){if (CleanListAppareils[i]!= appareil){CleanListAppareils.push(appareil); i++;}
});
console.log(CleanListAppareils);
//sort ustensils
let listUstensils=[];

for(let i=0; i<recipes.length; i++){
    for(let j=0; j<recipes[i].ustensils.length; j++){
        listUstensils.push(recipes[i].ustensils[j]);

    }
}

listUstensils=listUstensils.sort( function (a,b){if(a>b){return 1} else{ return -1} });

let CleanListUstensils=[listUstensils[0]];
 i=0;
listUstensils.forEach(function (ustensil){if (CleanListUstensils[i]!= ustensil){CleanListUstensils.push(ustensil); i++;}
});
console.log(CleanListUstensils);

console.log('ingredients:'+listIngredients);
console.log('appareils :'+listAppareils);
console.log('ustensils:'+listUstensils);

};