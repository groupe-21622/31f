// Attendre le chargement du DOM
window.addEventListener("load", function(){
    const listeItems = document.querySelector(".liste-item");   // Récupère le parent des items
    console.log(listeItems);
    
    // Attache le gestionnaire de clic sur le parent
    listeItems.addEventListener("click",function(e){
        //console.log(e.target);
        // Si c'est un clic sur un btn qui m'a appelé
        if(e.target.classList.contains("btn")){
            const item = e.target.parentElement;    // Récupère le parent (l'item)
            const parent = item.parentElement;      // Récupère le parent de l'item, la div.liste-item
            
            // Si c'est la flèche du bas
            if(e.target.classList.contains("fleche-bas")){
                console.log("descendre");
                const voisin = item.nextElementSibling; // Le voisin (après l'item)
                parent.insertBefore(voisin, item);  // Insère le voisin avant item
            }
            // Si c'est la flèche du haut
            else if(e.target.classList.contains("fleche-haut")){
                console.log("monter")
                const voisin = item.previousElementSibling; // le voisin (avant l'item)
                parent.insertBefore(item, voisin);  // Insère item avant voisin
            }
        }
        
    })
    /**
     * @todo Ajouter un item dynamiquement
     */
});