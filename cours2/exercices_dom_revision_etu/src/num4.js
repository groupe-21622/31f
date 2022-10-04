const listeItem = [
    {
        id:1,
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
        barre : false,
    },
];


window.addEventListener("DOMContentLoaded", function(){
// Récupère la liste d'item
    const elListeItem = document.querySelector(".liste-item");
    console.log(elListeItem)
    //listeItem.innerHTML = "toto le magicien";
    
    
    dessine();      // Génère le DOM à partir des données
   

    elListeItem.addEventListener("click", function(e){
       
        let elClic = e.target; // Sur quoi j'ai cliqué
        console.dir(elClic)
        // Est-ce un btn?
        if(elClic.classList.contains("btn")){
            let elItem = elClic.parentElement;
            if(elClic.classList.contains("fleche-bas")){
                elItem.parentElement.insertBefore(elItem.nextElementSibling, elItem)
            }
            else if(elClic.classList.contains("fleche-haut")){
                elItem.parentElement.insertBefore(elItem, elItem.previousElementSibling)
            }
        }
        // Est-ce un checkbox ?
        else if(elClic.type == "checkbox"){
            let elItem = elClic.parentElement;  // Récupère son parent
            let id = elItem.dataset.id;         // Récupère l'id (dans le DOM)
            console.log(id);
            if(elClic.checked){                 // Si la case est coché, ajoute la clase "barre"
                elItem.classList.add("barre");
            }
            else{                               // Sinon, on la retire
                elItem.classList.remove("barre");
            }

            // Ajuste les données en fonction de l'état du DOM
            // findIndex récupère l'index de l'item selon le test fait par la fonction appelée.
            let index = listeItem.findIndex(function(item){
                let res = false;
                if(item.id == id){
                    res = true;
                }
                return res;
            })
            console.log(index);
            listeItem[index].barre = elClic.checked;    // Met à jour l'élément dans le tableau de donnée (coché ou non)
            console.log(listeItem[index]);
        }

    })
    // Gestion des clic sur le tri

    document.querySelector(".liste-tri .btn").addEventListener("click", function(e){
        // Faire le tri en ordre croissant
        listeItem.sort(function(a,b){
            let res = 0;
            if(a.item < b.item){
                res = -1;
            }
            else if(b.item < a.item){
                res = 1;
            }
            return res;
        })

        // Gestion de l'affichage du tri
        let cible = e.target;   // Récupérer la cible du click
        if(cible.classList.contains("tri")){    // Si c'est le nom (Par date, Par nom, etc)
            cible = cible.nextElementSibling;   // Récupère le voisin, c'est-à-dire la flèche. Celle-ci remplace la cible initiale
        }
        
        if(cible.classList.contains("btn")){    // Le bouton est la cible
            console.log(cible, "le bouton");    
            if(cible.classList.contains("fleche-haut")){    // Si c'est la fleche-haut
                cible.classList.replace("fleche-haut", "fleche-bas");   // Place la fleche bas
            }
            else if(cible.classList.contains("fleche-bas")){    // Si c'est la fleche bas
                cible.classList.replace("fleche-bas", "fleche-haut");   // Place la fleche haut.
                listeItem.reverse();    // Si le tri est DESC, renversé le tableau
            }
        }
        console.log(listeItem[0])
        dessine();
    })

})

function dessine(){
    const elListeItem = document.querySelector(".liste-item");
    // Création du DOM à partir des données
    let chaineHTML = "";

    for(let item of listeItem){     // Pour chaque item dans listeItem
        // Permet de replacer le DOM selon l'état barre ou non (checkbox + class)
        let barre = ( item.barre? "barre" : "" );   // Est-il barré ? 
        let checked = ( item.barre? "checked" : "" );
        
        // Concatène le DOM de l'item dans la chaine
        chaineHTML +=   `<div class="item ${barre}" data-id="${item.id}">
                            <input type="checkbox" ${checked}>
                            <span class="nom">${item.item}</span>
                            <span class="btn fleche-haut"></span>
                            <span class="btn fleche-bas"></span>
                        </div>`;
    }
    // Insère le DOM final (1 fois)
    elListeItem.innerHTML = chaineHTML;

}