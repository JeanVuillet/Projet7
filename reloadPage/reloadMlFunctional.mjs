import { recipes } from "../recipes.mjs";
import recetteMaker from "../recette.mjs";

export class FunctionalMasterList{
 static masterList=[];

 static reloadFunctionalMasterList(tag){
       

    let   masterList=[];
     
     // FABRICATION DE NOUVELLE MASTERLIST
     
     //fitrer chaque recette
var ingredientsPresent=[];
       masterList= recipes.filter( function checkTags (recipe){

//pour cette recette rechercher chaque tag dans la liste des ingredients
// et le resultat est un tableau de boolean pour chaque tag ingredient present qu il faut initialiser a false

// on filtre la taglist pour trouver les tags presents dans la liste des ingredients
   ingredientsPresent= tag.ingredientsTaglist.filter( function filterTagPresents(taglistElement){

    //verifier que ce tag est dans la recette si oui renvoyer true sinon false
let FindedIngredient=recipe.ingredients.find(function findThisTag(ingredient){
    if(ingredient.ingredient.toLocaleLowerCase()==taglistElement.toLocaleLowerCase()){
        return true
    }
    else{return false}
})
       if (FindedIngredient)
       {return true}   
       else{return false}     

    
       })
     
       if (ingredientsPresent.length ==tag.ingredientsTaglist.length)
       {   return true;}
    else{ return false;}
    
 
    
})
console.log('je suis newMethode');
console.log(masterList);  
}
}