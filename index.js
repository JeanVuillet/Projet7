import  listMaker  from "./listMaker.mjs";
import recetteMaker from "./recette.mjs";
import  { recipes } from "./recipes.mjs";
import { finderIngredients } from "./finders.mjs";

const finders = document.getElementsByClassName("finders__option");
const ingredientDiv= document.getElementById("finders__ingrédients");
var a=1;
// Utiliser forEach sur la collection pour itérer sur chaque élément
Array.from(finders).forEach(element => {
    element.addEventListener("click", function(){ if(a==1){element.classList.add('active')}
    else{a++;}} )

});
Array.from(finders).forEach(element => {
    //implementing closer
    let chevronUp=element.getElementsByClassName('fa-chevron-up')
chevronUp[0].addEventListener("click",
    function(){ element.classList.remove('active');  a--;})

    //implementing finder
    let input=element.querySelector('.input');

    input.addEventListener('input',
    function newList (){
        ingredientDiv.innerHTML='';
        const newList=finderIngredients(input);

        newList.forEach(function(ingredient){
            let ingredientP =document.createElement('p');
            ingredientP.textContent=`${ingredient}`;
            ingredientDiv.appendChild(ingredientP);
    
    })

});

const listMakerObject= new listMaker();
//including finders content


listMakerObject.sortIngredients().forEach(function(ingredient){
    let ingredientP =document.createElement('p');
    ingredientP.textContent=`${ingredient}`;
    ingredientDiv.appendChild(ingredientP);
})

const sectionRecettes=document.getElementById("recettes");
recipes.forEach(function(recipe){
    let recetteArticle=recetteMaker(recipe);
    sectionRecettes.appendChild(recetteArticle);
});


});

//implementing tagMaker
ingredientDiv.addEventListener('click',function(e){
       const closeCross=document.createElement('i');
       closeCross.className='fa-solid fa-xmark';
      
        let selectedIngredientP=document.createElement('p');
        selectedIngredientP.appendChild(e.target);
        selectedIngredientP.appendChild(closeCross);
        selectedIngredientP.className='ingredientTag';
        let tagDiv=document.getElementById('tags');
        tagDiv.appendChild(selectedIngredientP);
        //adding cross event listener
        closeCross.addEventListener('click',()=>tagDiv.removeChild(selectedIngredientP));
    })