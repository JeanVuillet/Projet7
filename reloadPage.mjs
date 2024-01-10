import { recipes } from "./recipes.mjs";
import { reloadMasterList} from"./reloadPage/reloadMasterList.mjs";
import { Finders } from "./reloadPage/reloadFinders.mjs";




export function  ReloadPage(tag){
        
        reloadMasterList(tag);
        Finders.reloadFinders(tag);
           
        }
 
    
            


            

                


