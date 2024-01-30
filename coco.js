//INPUT SECTION
const input=document.getElementById('recherche');

const inputDiv=document.getElementById('inputDiv');
let crossDiv=document.createElement('div');
crossDiv.className='Header__inputLabel__finder__closeCross';
crossDiv.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" 
width="13px" height="13px" viewBox="0 0 8 8" fill="none">
<path d="M7 7L4 4M4 4L1 1M4 4L7 1M4 4L1 7" stroke="#7A7A7A" 
stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
crossDiv.style.display='none';
inputDiv.appendChild(crossDiv);
crossDiv.addEventListener('click',function()
{input.value='';
crossDiv.style.display='none';
ReloadPage(NewTag);
});


input.addEventListener('keyup',function(e){
  for(let i=0; i<3; i++){

let active=document.querySelector('.active');
if(active){
active.classList.remove('active');}}
if((input.value.length>0) ){
crossDiv.style.display='flex';

}
else{ crossDiv.style.display='none';
ReloadPage(NewTag)}

  if((input.value.length>2)||(input.value.length==0)){
    ReloadPage(NewTag);
  }
  
})