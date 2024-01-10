export class  tags {
    static ingredientsTaglist = [];
    static appareilsTaglist = [];
    static ustensilesTaglist = [];
   
    static checkTags(RecetteIngredients,RecetteApplaiance,RecetteUstensiles) {
       let present=false;
    if(
       (checkRecetteIngredients(RecetteIngredients))&& 
       (checkRecetteAppareils(RecetteApplaiance))&&
       (checkRecetteUstensiles(RecetteUstensiles))
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
   
    static checkRecetteUstensiles(RecetteUstensiles){
       present=true;
       for (i=0; i<this.ustensilesTaglist; i++) {
           for(j=0; j<RecetteUstensiles; j++){
               if(this>this.ustensilesTaglist[i] != RecetteUstensiles[j])
               {
                   present=false;
               }
           }
       }
       return present;
     }
   }
   