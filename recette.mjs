
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
// creating details Div
const detailDiv=document.createElement('div');
detailDiv.className='recetteContainer__detail';
//creating titile
const title=document.createElement("p");
WebTransportBidirectionalStream.className="recetteContainer__detail__title";
title.innerHTML=recette.name;
detailDiv.appendChild(title);

//creating recepe section
const recepeSection=document.createElement("section");
recepeSection.className="recetteContainer__detail__recepeSection";
//creating title
const recepeSectionTitle=document.createElement("h3");
recepeSectionTitle.innerText="Recette";
recepeSectionTitle.className="recetteContainer__detail__recepeSection__title";
detailDiv.appendChild(recepeSectionTitle);
//creating timeDiv
const recetteSectionTime=document.createElement('div');
recetteSectionTime.className="recetteContainer__detail__time";
recetteSectionTime.innerText=recette.time+'min';
detailDiv.appendChild(recetteSectionTime);

//creating description
const recepe=document.createElement("p");
recepe.className="recetteContainer__detail__recepeSection__recepe";
recepe.innerHTML=recette.description;
detailDiv.appendChild(recepe);

//creating ingredients section

const ingredientsSection=document.createElement("section");
ingredientsSection.className="recetteContainer__detail__ingredientsSection";
//creating title
const ingredientsSectionTitle=document.createElement("h3");
ingredientsSectionTitle.innerHTML="Ingrédients";
ingredientsSectionTitle.className="recetteContainer__detail__ingredientsSection__title";

//creating content
const ingredients=document.createElement("div");
ingredients.className="recetteContainer__detail__ingredientsSection__ingredients";
// implementing title
detailDiv.appendChild(ingredientsSectionTitle);
//implementing ingredients
recette.ingredients.forEach(element => {
    const ingredientDiv=document.createElement("div");
    ingredientDiv.className="recetteContainer__detail__ingredientsSection__ingredients__nameQuantity";
    //name
    const ingredient = document.createElement("p");
    ingredient.className="recetteContainer__detail__ingredientsSection__ingredients__nameQuantity__name";
    ingredient.innerHTML = element.ingredient;
    ingredientDiv.appendChild(ingredient);
    //quantity
    const quantity = document.createElement("p");
    quantity.className="recetteContainer__detail__ingredientsSection__ingredients__nameQuantity__quantity";
    (element.unit)? quantity.innerHTML = element.quantity+element.unit : quantity.innerHTML =element.quantity;
    

    //name
    const ingredientName = document.createElement("p");
    ingredientDiv.appendChild(quantity);
    ingredients.appendChild(ingredientDiv);

    
});
//implementing ingredients
ingredientsSection.appendChild(ingredients);
//implementing ingredient section in article
detailDiv.appendChild(ingredientsSection);
recetteContainer.appendChild(detailDiv);

return recetteContainer;

}