import { newReloadMasterList, reloadMasterList } from "../listMaker.mjs";

export class TagObject extends CheckTags {

}


export class TagSetter {
    static ingredientsTaglist = [];
    static appareilsTaglist = [];
    static ustensilsTaglist = [];

   static removeIngredient(ingredient){
        for(let i=0; i<ingredientsTaglist;i++){
            if(ingredientsTaglist[i]==ingredient){
                ingredientsTaglist.splice(i,1);
                 newReloadMasterList(TagObject);
                break;
            }
        }
    }
  static  removeAppareil(appareil){
        for(let i=0; i<appareilsTaglist;i++){
            if(appareilsTaglist[i]==appareil){
                appareilTaglist.splice(i,1);
                newReloadMasterList(TagObject);
                break;
            }
        }
    }
  static  removeUstensil(ustensil){
        for(let i=0; i<ustensilsTaglist;i++){
            if(ustensilsTaglist[i]==ustensil){
                ustensilTaglist.splice(i,1);
                newReloadMasterList(TagObject);
                break;
            }
        }
    }
}


export class  CheckTags extends TagSetter{

    constructor (RecetteIngredients,RecetteApplaiance,RecetteUstensils) {
       let present=false;
    if(
       (checkRecetteIngredients(RecetteIngredients))&& 
       (checkRecetteAppareils(RecetteApplaiance))&&
       (checkRecetteUstensils(RecetteUstensils))
       )
       {present=true;}
   
       return present;
       }
   
    
     
   
     static checkRecetteIngredients(RecetteIngredients) {
       let present=true;
       for (let i = 0; i < this.ingredientsTaglist.length; i++) {
         
           for(let j=0; j<RecetteIngredients.length; j++)
           {
            if(this.ingredientsTaglist[i]!=RecetteIngredients[j].ingredient)
            {present=false;}
           }
           return present;
       }
     }
    static  checkRecetteAppareils(RecetteApplaiance){
       let present=true;
       for(let i=0; i<this.appareilsTaglist; i++){
   if (RecetteApplaiance !=this.appareilsTaglist){
       present=false;
   }
       }
       return false;
     }
   
    static checkRecetteUstensils(RecetteUstensils){
       present=true;
       for (i=0; i<this.ustensilsTaglist; i++) {
           for(j=0; j<RecetteUstensils; j++){
               if(this>this.ustensilsTaglist[i] != RecetteUstensils[j])
               {
                   present=false;
               }
           }
       }
       return present;
     }

    }

   

   