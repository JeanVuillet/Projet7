import { recipes } from "./recipes.mjs";
import { MasterList} from"./reloadPage/reloadMasterList.mjs";
import { Finders } from "./reloadPage/reloadFinders.mjs";




export function  ReloadPage(tag){
        
        MasterList.reloadMasterList(tag);
        Finders.reloadFinders(tag);

        // CONSOLE.LOG FORT TESTING APPAREILS USTENSILES
        // MasterList.masterList.forEach((recette)=>console.log('RecetteUstensiles'+recette.ustensiles));
        // MasterList.masterList.forEach((recette)=>console.log('RecetteIngredients'+recette.ingredients));
        // MasterList.masterList.forEach((recette)=>console.log('RecetteAppareil'+recette.appliance));
        // console.log('tagIngredients'+tag.ingredientsTaglist)
        // console.log('tagAppareils'+tag.appareilsTaglist)
        // console.log('tagUstensils'+tag.ustensilesTaglist)
           
        }
 
    
            


            

                


