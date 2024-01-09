import { recipes } from "./recipes.mjs";
import { CheckTags } from "./Tag/tags.mjs";
import { TagObject } from "./Tag/tags.mjs";


class ReloadFinders{

    
    constructor (TagObject){
        reloadAllFinders(TagObject);
       
    }
    reloadAllFinders(TagObject){
        reloadIngredientsFinder(Chec)
    };
}

class ReloadPage extends ReloadFinders{
    constructor(TagObject){
       ReloadMasterList(TagObject);
        ReloadFinders(TagObject);
    }
    ReloadMasterList(TagObject){
        masterList=[];
      
      
      //traiter chaque recette
          for (let i = 0; i < recipes.length; i++) {
            // parcourir la liste de tag
            // par defaut on dit qu il est present au cas ou tagList serait vide
           let present=true;
      
      present=CheckTags(recipes[i].ingredients, recipes[i].appliance, recipes[i].ustensils);
      
          if (present==true){masterList.push(recipes[i])}
          }
      
        
      
      
          const sectionRecettes = document.getElementById("recettes");
          sectionRecettes.innerHTML='';
        
          masterList.forEach(function (recipe) {
            let recetteArticle = recetteMaker(recipe);
            sectionRecettes.appendChild(recetteArticle);})
      
          return masterList;
      
      }
      ReloadFinders(TagObjet){

      }
}