import { recipes } from "./recipes.mjs";
import { FunctionalMasterList} from"./reloadPage/reloadMlFunctional.mjs";
import { Finders } from "./reloadPage/reloadFinders.mjs";



export function  ReloadPage(tag){
        
        FunctionalMasterList.reloadFunctionalMasterList(tag);
        // FunctionalMasterList.logMasterList();
        Finders.reloadFinders(tag);
           
        // CONSOLE.LOG POUR VERIFIER LES APPAREILS ET USTENSILES
        // FunctionalMasterList.masterList.forEach((recette)=>console.log('RecetteAppareil'+recette.appliance));
        // console.log('tagIngredients'+tag.ingredientsTaglist)
        // console.log('tagAppareils'+tag.appareilsTaglist)
        // console.log('tagUstensils'+tag.ustensilesTaglist)
           
        }
 
    
            


            

                


