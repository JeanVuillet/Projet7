import { recipes } from "../recipes.mjs";
import recetteMaker from "../recette.mjs";

export class FunctionalMasterList{
 static masterList=[];

 static reloadFunctionalMasterList(tag){
       

    let   masterList=[];
     
     // FABRICATION DE NOUVELLE MASTERLIST
     
     //fitrer chaque recette

       masterList= recipes.filter( function checkTags (recipe){

//pour cette recette filtrer les ingredients pour ne garder 
//que ceux qui sont dans la taglis
   let ingredients= recipe.ingredients.filter( function(ingredientObject){
   let result =tag.ingredientsTaglist.find(function (taglistIngredient){
        if(taglistIngredient.toLocaleLowerCase()==ingredientObject.ingredient.toLocaleLowerCase())
        { return true}
         else{return false}});
         return result;

   });
            
return ingredients.length!=0;
    
       })
       console.log('je suis newMethode');
    console.log(masterList);  
    
}
}