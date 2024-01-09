export class  tags {
    static ingredientsTaglist = [];
    static appareilsTaglist = [];
    static ustensilsTaglist = [];
   
    static checkTags(RecetteIngredients,RecetteApplaiance,RecetteUstensils) {
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
   