const aListeItem = [
    {
        id:451,
        item : "ZZZMon item 1",
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

    listeItems.addEventListener("click",function(e){
        const cibleElement = e.target;
        if(cibleElement.type == "checkbox"){
            const parent = cibleElement.parentElement;
            const id = parent.dataset.id;
            console.log(id)
            let indexItem = aListeItem.findIndex(function(element){
                                                                    let res = false;
                                                                    if(element.id == id){
                                                                        res = true;
                                                                    }
                                                                    return res;
                                                                });
            /*let indexItem = aListeItem.findIndex(function(element){
                return (element.id == id);
            });*/
            //let indexItem = aListeItem.findIndex((element)=>element.id == id);

            aListeItem[indexItem].barre = cibleElement.checked;
            if(cibleElement.checked){
                parent.classList.add("barre");

            }else{
                parent.classList.remove("barre")
            }
        }
        console.log(aListeItem)

    });

    const listeTri = document.querySelector(".liste-tri");
    listeTri.addEventListener("click", function(e){
        console.log(aListeItem[0])
        aListeItem.sort(function(a, b){
            return a.item.localeCompare(b.item, "fr", { sensitivity: 'base' });
        })
        /*if("DESC")
        {
            aListeItem.reverse();
        }*/
        console.log(aListeItem[0])
        AfficherItem();
    })

    const btnAjout = document.querySelector(".ajout-item button");
    btnAjout.addEventListener("click", function(e){
        e.preventDefault();
        const input = document.querySelector(".ajout-item [name='item']");
        const item = input.value;
        
        const nouvElement = {
            id: aListeItem.length,
            item : item,
            barre : false
        };
        aListeItem.unshift(nouvElement);
        console.log(input);
        input.value = "";
        AfficherItem();
    })

    AfficherItem();
});

function AfficherItem(){
    let chaineHTML = "";
    aListeItem.forEach(function(item){
        let barre = (item.barre ? "barre" : "" );
        let checked = (item.barre ? "checked" : "" );

        /*chaineHTML += '<div class="item '+ barre +' " data-id="'+item.id  +'">';
        chaineHTML += '<input type="checkbox" '+ checked+ '>';
        chaineHTML += '<span class="nom">'+ item.item +'</span>';
        chaineHTML += '<span class="btn fleche-haut"></span>';
        chaineHTML += '<span class="btn fleche-bas"></span>';
        chaineHTML += '</div>';*/

        chaineHTML += ` <div class="item ${barre}" data-id="${item.id}">
                            <input type="checkbox" ${checked}>
                            <span class="nom">${item.item}</span>
                            <span class="btn fleche-haut"></span>
                            <span class="btn fleche-bas"></span>
                        </div>`;
    })

    document.querySelector(".liste-item").innerHTML = chaineHTML;
}

