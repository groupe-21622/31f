const aListeItem = [
    {
        id:451,
        item : "Mon item 1",
        barre : true,
    },
    {
        id:2,
        item : "Mon item 2",
        barre : false,
    },
    {
        id:3,
        item : "Mon item 3",
        barre : true,
    },
    {
        id:4,
        item : "Mon item 4",
        barre : false,
    },
    {
        id:5,
        item : "Mon item 5",
        barre : false,
    },
    {
        id:6,
        item : "Mon item 6",
        barre : true,
    },
];

window.addEventListener("DOMContentLoaded", ()=>{
    

    const listeItems = document.querySelector(".liste-item");   // Récupère le parent des items
    console.log(listeItems);
    
    // Attache le gestionnaire de clic sur le parent
    // Section qui gère le déplacement des items (haut et bas)
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
        
    });
    // Section qui gère le changement de status (barre ou non) sur le click du checkbox
    listeItems.addEventListener("click",function(e){
        const cibleElement = e.target;  

        if(cibleElement.type == "checkbox"){    // Si la cible est un checkbox
            const parent = cibleElement.parentElement;  // Récupère le parent (donc l'item)
            const id = parent.dataset.id;               // Récupère sa propriété id (data-id)
            console.log(id)
            
            // Cherche la correspondance (avec l'id) dans le tableau de données
            let indexItem = aListeItem.findIndex(function(element){
                                                                    let res = false;
                                                                    if(element.id == id){
                                                                        res = true;
                                                                    }
                                                                    return res;
                                                                });
            /*let indexItem = listeItem.findIndex(function(element){
                return (element.id == id);
            });*/
            //let indexItem = listeItem.findIndex((element)=>element.id == id);
            
            // Met à jour le statut de la propriété barre afin qu'elle corresponde à l'interface (DOM)
            aListeItem[indexItem].barre = cibleElement.checked;
            // Fait les changements de classe sur le DOM
            if(cibleElement.checked){
                parent.classList.add("barre");

            }else{
                parent.classList.remove("barre")
            }
        }
        console.log(aListeItem)

    });

    // Affiche les items au chargement du DOM
    AfficherItem();
});

/**
 * Permet d'affiche les items dans le DOM à partir du tableau de valeur (aListeItem)
 */
function AfficherItem(){
    let chaineHTML = "";    // Initialise la chaine à ajouter à ""
    
    // Parcours chaque item du tableau de données
    aListeItem.forEach(function(item){
        let barre = (item.barre ? "barre" : "" );       // Prépare les variables pour mettre les bonnes valeurs dans le DOM
        let checked = (item.barre ? "checked" : "" );

        /*chaineHTML += '<div class="item '+ barre +' " data-id="'+item.id  +'">';
        chaineHTML += '<input type="checkbox" '+ checked+ '>';
        chaineHTML += '<span class="nom">'+ item.item +'</span>';
        chaineHTML += '<span class="btn fleche-haut"></span>';
        chaineHTML += '<span class="btn fleche-bas"></span>';
        chaineHTML += '</div>';*/
        
        // Créer la chaineHTLM avec les littéraux de gabarit
        chaineHTML += ` <div class="item ${barre}" data-id="${item.id}">
                            <input type="checkbox" ${checked}>
                            <span class="nom">${item.item}</span>
                            <span class="btn fleche-haut"></span>
                            <span class="btn fleche-bas"></span>
                        </div>`;
    })
    // Affecte le nouveau DOM dans le noeud .liste-item
    document.querySelector(".liste-item").innerHTML = chaineHTML;
}

