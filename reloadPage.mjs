import { recipes } from "./recipes.mjs";
import { MasterList} from"./reloadPage/reloadMasterList.mjs";
import { Finders } from "./reloadPage/reloadFinders.mjs";




export function  ReloadPage(tag){
        
        MasterList.reloadMasterList(tag);
        Finders.reloadFinders(tag);
           
        }
 
    
            


            

                


