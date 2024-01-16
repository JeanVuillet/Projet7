class Tag{
     ingredientsTaglist = []
     appareilsTaglist =[]
     ustensilesTaglist =[]

     static removeIngredient(ingredient){
        for(let i=0; i<Tag.ingredientsTaglist.length;i++){
            if(Tag.ingredientsTaglist[i]==ingredient){
                Tag.ingredientsTaglist.splice(i,1);
                 ReloadPage(Tag);
                break;
            }
        }
    }
  static  removeAppareil(appareil){
        for(let i=0; i<Tag.appareilsTaglist.length;i++){
            if(Tag.appareilsTaglist[i]==appareil){
                Tag.appareilsTaglist.splice(i,1);
                ReloadPage(Tag);
                break;
            }
        }
    }
  static  removeUstensil(ustensiles){
        for(let i=0; i<Tag.ustensilesTaglist.length;i++){
            if(Tag.ustensilesTaglist[i]==ustensiles){
                Tag.ustensilesTaglist.splice(i,1);
                ReloadPage(Tag);
                break;
            }
        }
    }




static checkTags(recette){
    checkIngredients(recette);
    checkAppareils(recette);
    checkUstensils(recette);
}

static checkIngredients(recette){

    //pour cette recette rechercher chaque tag dans la liste des ingredients
// et le resultat est un tableau 

// on filtre la taglist pour trouver les tags presents dans la liste des ingredients
   ingredientsPresent= Tag.ingredientsTaglist.filter( function filterTagPresents(taglistElement){

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
    
 

}
static checkAppareils(){}
static checkUstensils(){}

}