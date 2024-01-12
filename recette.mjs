
export default function recetteMaker( recette){
    //creating container
const recetteContainer=document.createElement("article");
recetteContainer.className="recetteContainer";

//creating image
const imageRecette=document.createElement("img");
imageRecette.src=`Assets/${recette.image}` 
imageRecette.alt=`${recette.name}`
imageRecette.className="recetteContainer__imageRecette";
recetteContainer.appendChild(imageRecette);

//creating titile
const title=document.createElement("p");
WebTransportBidirectionalStream.className="recetteContainer__title";
title.innerHTML=recette.name;
recetteContainer.appendChild(title);

//creating recepe section
const recepeSection=document.createElement("section");
recepeSection.className="recetteContainer__recepeSection";
//creating title
const recepeSectionTitle=document.createElement("h3");
recepeSectionTitle.innerText="Recette";
recepeSectionTitle.className="recetteContainer__recepeSection__title";
recetteContainer.appendChild(recepeSectionTitle);
//creating timeDiv
const recetteSectionTime=document.createElement('div');
recetteSectionTime.innerText=recette.time+'min';
recetteContainer.appendChild(recetteSectionTime);

//creating description
const recepe=document.createElement("p");
recepe.className="recetteContainer__recepeSection__recepe";
recepe.innerHTML=recette.description;
recetteContainer.appendChild(recepe);

//creating ingredients section

const ingredientsSection=document.createElement("section");
ingredientsSection.className="recetteContainer__ingredientsSection";
//creating title
const ingredientsSectionTitle=document.createElement("h3");
ingredientsSectionTitle.innerHTML="Ingrédients";
ingredientsSectionTitle.className="recetteContainer__ingredientsSection__title";
//creating content
const ingredients=document.createElement("div");
ingredients.className="recetteContainer__ingredientsSection__ingredients";
//implementing ingredients
recette.ingredients.forEach(element => {
    const ingredientDiv=document.createElement("div");
    //name
    const ingredient = document.createElement("p");
    ingredient.className="recetteContainer__ingredientsSection__ingredients__name";
    ingredient.innerHTML = element.ingredient;
    ingredientDiv.appendChild(ingredient);
    //quantity
    const quantity = document.createElement("p");
    quantity.className="recetteContainer__ingredientsSection__ingredients__quantity";
    (element.unit)? quantity.innerHTML = element.quantity+element.unit : quantity.innerHTML =element.quantity;
    

    //name
    const ingredientName = document.createElement("p");
    ingredientDiv.appendChild(quantity);
    ingredients.appendChild(ingredientDiv);

    
});
//implementing ingredients
ingredientsSection.appendChild(ingredients);
//implementing ingredient section in article
recetteContainer.appendChild(ingredientsSection);

return recetteContainer;

}