
import { ReloadPage } from "../reloadPage.mjs";




export class Tag {
    static ingredientsTaglist = [];
    static appareilsTaglist = [];
    static ustensilesTaglist = [];
   
//  static  coucou(){return 'coucou' ;}


   static removeIngredient(ingredient){
        for(let i=0; i<ingredientsTaglist;i++){
            if(ingredientsTaglist[i]==ingredient){
                ingredientsTaglist.splice(i,1);
                 ReloadPage(TagObject);
                break;
            }
        }
    }
  static  removeAppareil(appareil){
        for(let i=0; i<appareilsTaglist;i++){
            if(appareilsTaglist[i]==appareil){
                appareilTaglist.splice(i,1);
                ReloadPage(TagObject);
                break;
            }
        }
    }
  static  removeUstensil(ustensil){
        for(let i=0; i<ustensilesTaglist;i++){
            if(ustensilesTaglist[i]==ustensil){
                ustensilTaglist.splice(i,1);
                ReloadPage(TagObject);
                break;
            }
        }
    }

    

 
  
  
static checkTags(RecetteIngredients,RecetteApplaiance,Recetteustensiles){
       let present=false;
    if(
       (Tag.checkRecetteIngredients(RecetteIngredients))&& 
       (Tag.checkRecetteAppareils(RecetteApplaiance))&&
       (Tag.checkRecetteustensiles(Recetteustensiles))
       )
       {present=true;}
   
       return present;
      
    }

   
    
     
   
     static checkRecetteIngredients(RecetteIngredients) {
      let present=true;
       // on boucle sur chaque tag de la liste de tags Selectionnes
       for (let i = 0; i < Tag.ingredientsTaglist.length; i++) {
         // pour ce tag on boucle sour tous les ingredients de cette recette
          present=false;
           for(let j=0; j<RecetteIngredients.length; j++)

           {
            //  si cet ingredient = ce tag
             // present=true
            if(Tag.ingredientsTaglist[i]==RecetteIngredients[j].ingredient)
            {present=true;}
          
           }
           // si present =true un ingredient a matche avec un tag
           // on continue sur la boucle suivante
           // si present= false on return false
           if (present==false){
            return false;
           }
         
       }
       // present a passe toutes les boucles et a matche a chaque fois
       // tous les ingredients sont presents dans la taglist
       // on revoie true
       return true;
     }
    static  checkRecetteAppareils(RecetteApplaiance){
        //on initialise present a true au cas ou la liste soit vide
        var present=true;
// on boucle sur tous les appareils de la taglist
       for(let i=0; i<Tag.appareilsTaglist; i++){
        //la liste n est donc pas vide on met donc present a false
        present=false;
        //si cet appareil match alors l appareil de cette
        // recette a matche avec un tag 
   if (RecetteApplaiance ==Tag.appareilsTaglist[i]){
    //on valid ce tag present=true on passe au prochain tag
    present=true; 
       return present;
       }
       // on a fini la boucle sans match donc l appareil de la recette
       // n est pas dans les tags recette rejettee
       //present= false et recette rejettee
       present=false;
       return present;
     
     }
     return present;
    }

    static checkRecetteustensiles(RecetteUstensiles){
       let  present=true;
        //on boucle sur les ustensiles de la taglist
        for (let i=0; i<Tag.ustensilesTaglist.length; i++) {
            present=false;
            // pour ce tagUstensil on boucle sur les ustensiles de la recette
            for(j=0; j<RecetteUstensiles; j++){
                // si il y a match alors ce tag est
                // present dans les ustensiles de la recette
                if(Tag.ustensilesTaglist[i] == RecetteUstensiles[j])
                { present=true;}
            }
            // a la sortie de cette boucle si present= true le tag est valide
            //  on peut boucler  sur le tag suivant sinon on exclue la recette
            if (present==false){ return false}
        }
        //a la sortie de cette boucle tous les tags ont matches avec des ustensiles
        // on valide les ustensils de cette recette et on renvoie true
        return present;
      }
    
}
