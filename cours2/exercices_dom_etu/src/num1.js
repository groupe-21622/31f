// Attendre que le DOM soit chargé
window.addEventListener("load", function(){
    console.log("load")    
    const btn = document.querySelector(".btn_num1");    // Récupérer mon bouton
    console.log(btn);
    
    // Lorsque le bouton est cliqué
    btn.addEventListener("click", function (e){
        const btn = e.target;   // Récupère la source du clic
        btn.disabled =true;     // Désactive le bouton

        console.log(btn)
        const maDiv = document.querySelector(".maDiv"); // Récupère la div qu'on doit manipuler
        maDiv.classList.add("animationDiv");            // Ajoute la classe qui démarre l'animation
        
        // Lorsque l'animation sera terminée
        maDiv.addEventListener("animationend", function(e){
            const maDiv = e.target; // Récupère la div (source de l'événement)
            maDiv.classList.remove("animationDiv");  // Retrait de la classe, pour pouvoir redémarrer l'animation
            const btn = document.querySelector(".btn_num1");    // Récupère le bouton
            btn.disabled = false;       // Réactive le bouton
        });
    })
})
