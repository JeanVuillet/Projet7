import { ReloadPage } from "./reloadPage.mjs";

export class NewTag{
    static ingredientsTaglist = []
    static appareilsTaglist =[]
    static ustensilesTaglist =[]

     static removeIngredient(ingredient){
        for(let i=0; i<NewTag.ingredientsTaglist.length;i++){
            if(NewTag.ingredientsTaglist[i]==ingredient){
                NewTag.ingredientsTaglist.splice(i,1);
                 ReloadPage(NewTag);
                break;
            }
        }
    }
  static  removeAppareil(appareil){
        for(let i=0; i<NewTag.appareilsTaglist.length;i++){
            if(NewTag.appareilsTaglist[i]==appareil){
                NewTag.appareilsTaglist.splice(i,1);
                ReloadPage(NewTag);
                break;
            }
        }
    }
  static  removeUstensil(ustensiles){
        for(let i=0; i<NewTag.ustensilesTaglist.length;i++){
            if(NewTag.ustensilesTaglist[i]==ustensiles){
                NewTag.ustensilesTaglist.splice(i,1);
                ReloadPage(NewTag);
                break;
            }
        }
    }




static checkTags(recette){

    if(
    (NewTag.checkIngredients(recette))&&
    (NewTag.checkAppareils(recette))&&
    (NewTag.checkUstensils(recette))
     )
    { return true;}
    else{return false;}
}

static checkIngredients(recette){

    //pour cette recette rechercher chaque IngredientTag dans la liste des ingredients
// et le resultat est un tableau 


  let ingredientsPresent= NewTag.ingredientsTaglist.filter( 
    // on utilise donc ici filter pour filtrer tous les elements de la taglist presents dans la recette
    function filterTagPresents(taglistElement){

    //verifier que ce tag est dans la recette 
let FindedIngredient=recette.ingredients.find(function findThisTag(ingredientObject){
    if(ingredientObject.ingredient.toLocaleLowerCase()==taglistElement.toLocaleLowerCase()){
        return true
    }
    else{return false}
})
//si tag present renvoyer true sinon false
       if (FindedIngredient)
              //le tag est present et donc ajoute a ingredientsPresent
       {return true}   
// le tag n est pas ajoute a ingredients present
       else{return false}     

    
       })
     //apres le filtre on compar la largeur de la liste 
     //des ingredients presents a celle de la taglistIngreidents
     
       if (ingredientsPresent.length ==NewTag.ingredientsTaglist.length)
       //  si les listes font la meme longeur cela signifie que  tous les ingredients
       // de la taglist sont presents dans la recette
       // donc on valide la taglist Ingredients
       {   return true;}
       // sinon on valide pas
    else{ return false;}
    
 

}
static checkAppareils(recette){
// dans la liste des appareilsTag chercher l appareil de la recette
let present=NewTag.appareilsTaglist.find(function(tag){
    //si un appreil des tags match avec la recette
   // mettre ce tag dans present
    if(tag.toLocaleLowerCase()==recette.appliance.toLocaleLowerCase()){
        return true;
    }
    //sinon renvoyer false
    else{
        return false;
    }
})
//apres le filtre si present n est pas vide ou si la TagAppareilList est vide
//valider le test et revoyer true
if ((present)||NewTag.appareilsTaglist.length==0){
    return true;
    //sinon test non validide renvoyer false
}  else {return false;}
}
static checkUstensils(){
    return true
}

}