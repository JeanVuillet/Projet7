const finders = document.getElementsByClassName("finders__option");

// Utiliser forEach sur la collection pour itérer sur chaque élément
Array.from(finders).forEach(element => {
    element.addEventListener("click",()=>  element.classList.toggle('active'))

});