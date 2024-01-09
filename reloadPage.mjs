import { recipes } from "./recipes.mjs";
import { reloadMasterList} from"./reloadPage/reloadMasterList.mjs";
import { reloadFinders } from "./reloadPage/reloadFinders.mjs";




export function  ReloadPage(tag){
        
        reloadMasterList(tag);
        reloadFinders(tag);
           
        }
 
    
            


            

                


