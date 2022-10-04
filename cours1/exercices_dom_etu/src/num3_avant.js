window.addEventListener("load", function(){
    const listeItems = document.querySelectorAll(".item");
    console.log(listeItems);
    for(let i = 0; i< listeItems.length; i++){
        const item = listeItems[i];
        item.addEventListener("click",function(e){
            //console.log(e.target);
            if(e.target.classList.contains("fleche-bas")){
                console.log("descendre");
                const item = e.target.parentElement;
                const parent = item.parentElement;
                const voisin = item.nextElementSibling;
                parent.insertBefore(voisin, item);
            }
            else if(e.target.classList.contains("fleche-haut")){
                console.log("monter");
                const item = e.target.parentElement;
                const parent = item.parentElement;
                const voisin = item.previousElementSibling;
                parent.insertBefore(item, voisin);
                console.log(item, parent, voisin)
            }
        })
    }

    
});