export async function closeCross(){
  const response= await  fetch('Assets/icons/closeCross.svg');

  if(response.ok)
  {const svgContent= await response.text();

return svgContent;}


}