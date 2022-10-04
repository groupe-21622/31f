// Quand le DOM est chargé
//window.addEventListener("DOMContentLoaded", function(){
window.addEventListener("load", function(){
    // Récupère la section qui contient les éléments du tri
    const sectionTri = document.querySelector(".liste-tri");
    console.log(sectionTri);
    
    // Attache le gestionnaire sur l'événement "click"
    sectionTri.addEventListener("click", function(e){
        let btnCible = e.target;    // Récupère la cible du clic
        console.log(e.target );
        console.log(e.currentTarget );
        /*if(btnCible.classList.contains("item")){
            btnCible = btnCible.querySelector(".btn");
        }
        else if(btnCible.classList.contains("tri")){
            btnCible = btnCible.nextElementSibling;
        }*/

        // Si c'est le "Label"
        if(btnCible.classList.contains("tri")){
            btnCible = btnCible.nextElementSibling; // Récupère l'élément suivant (span.btn)
        }
        //console.log(btnCible);
        // Si btnCible à la classe fleche-haut ou fleche-bas, change la flèche (bas=>haut, haut=>bas)
        if(btnCible.classList.contains("fleche-haut")){
            btnCible.classList.replace("fleche-haut", "fleche-bas");
        }
        else if(btnCible.classList.contains("fleche-bas")){
            btnCible.classList.replace("fleche-bas", "fleche-haut");
        }
    });
});
