//window.addEventListener("DOMContentLoaded", function(){
window.addEventListener("load", function(){
    const sectionTri = document.querySelector(".liste-tri");
    console.log(sectionTri);
    
    sectionTri.addEventListener("click", function(e){
        let btnCible = e.target;
        console.log(e.target )
        console.log(e.currentTarget )
        /*if(btnCible.classList.contains("item")){
            btnCible = btnCible.querySelector(".btn");
        }
        else if(btnCible.classList.contains("tri")){
            btnCible = btnCible.nextElementSibling;
        }*/
        if(btnCible.classList.contains("tri")){
            btnCible = btnCible.nextElementSibling;
        }
        //console.log(btnCible);
        if(btnCible.classList.contains("fleche-haut")){
            btnCible.classList.replace("fleche-haut", "fleche-bas");
        }
        else if(btnCible.classList.contains("fleche-bas")){
            btnCible.classList.replace("fleche-bas", "fleche-haut");
        }
    });
})
