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

    // Gestionnaire des clics sur la liste des items (case à cocher, ordre)
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


})