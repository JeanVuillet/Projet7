import { recipes } from "./recipes.mjs";
import { FunctionalMasterList} from"./reloadPage/reloadMlFunctional.mjs";
import { Finders } from "./reloadPage/reloadFinders.mjs";



export function  ReloadPage(tag){
        
        FunctionalMasterList.reloadFunctionalMasterList(tag);
        // FunctionalMasterList.logMasterList();
        Finders.reloadFinders(tag);
        FunctionalMasterList.masterList.forEach((recette)=>console.log('RecetteUstensiles'+recette.ustensiles));
        FunctionalMasterList.masterList.forEach((recette)=>console.log('RecetteIngredients'+recette.ingredients));
        FunctionalMasterList.masterList.forEach((recette)=>console.log('RecetteAppareil'+recette.appliance));
        console.log('tagIngredients'+tag.ingredientsTaglist)
        console.log('tagAppareils'+tag.appareilsTaglist)
        console.log('tagUstensils'+tag.ustensilesTaglist)
           
        }
 
    
            


            

                


