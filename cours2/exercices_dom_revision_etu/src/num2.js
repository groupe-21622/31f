window.addEventListener("DOMContentLoaded", function(){
    // Récupérer la section listeTri
    const listeTri = document.querySelector(".liste-tri");
    
    // Gestion du click
    listeTri.addEventListener("click", function(e){
        console.log(e);
        let cible = e.target;   // Récupérer la cible du click
        if(cible.classList.contains("tri")){    // Si c'est le nom (Par date, Par nom, etc)
            cible = cible.nextElementSibling;   // Récupère le voisin, c'est-à-dire la flèche. Celle-ci remplace la cible initiale
        }
        
        if(cible.classList.contains("btn")){    // Le bouton est la cible
            console.log(cible, "le bouton");    
            if(cible.classList.contains("fleche-haut")){    // Si c'est la fleche-haut
                //cible.classList.add("fleche-bas");
                //cible.classList.remove("fleche-haut");
                cible.classList.replace("fleche-haut", "fleche-bas");   // Place la fleche bas
            }
            else if(cible.classList.contains("fleche-bas")){    // Si c'est la fleche bas
                //cible.classList.remove("fleche-bas");
                //cible.classList.add("fleche-haut");
                cible.classList.replace("fleche-bas", "fleche-haut");   // Place la fleche haut.
            }
        }
    })


})