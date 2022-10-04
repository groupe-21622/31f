// Attendre que le DOM soit chargé
window.addEventListener("DOMContentLoaded", function(){
    // Récupère les éléments à manipuler au chargement
    const elInput = document.querySelector("[name='message']");
    const elNbCharactere = document.querySelector(".nombre_caractere");
    const btnSoumettre = document.querySelector("[name='soumettre']");
    
    // Désactive le bouton soumettre
    btnSoumettre.disabled = true;
    // Afficher la longueur initiale du texte dans le champs
    elNbCharactere.innerHTML = elInput.value.length;

    console.log(elInput);
    /*elInput.addEventListener("change", function(){
        console.log("change")
    })
    elInput.addEventListener("keypress", function(){
        console.log("keypress")
    })
    elInput.addEventListener("keydown", function(){
        console.log("keydown")
    })
    elInput.addEventListener("keyup", function(){
        console.log("keyup")
    })*/

    // Quand il y a une entrée de donnée dans le champs texte
    elInput.addEventListener("input", function (e){
        const champTexte = e.target;    // Récupère le champs texte
        /*console.dir(e)
        console.log("input")
        console.log(e.target)
        console.log(champTexte.value)
        */
        // Récupère les éléments du DOM à manipuler
        const btnSoumettre = document.querySelector("[name='soumettre']");
        const elNbCharactere = document.querySelector(".nombre_caractere");
        
        //Met à jour la longueur de la chaine
        elNbCharactere.innerHTML = champTexte.value.length;

        // Condition de chaine valide
        if(champTexte.value.length <= 100 && champTexte.value.length >=20){
            btnSoumettre.disabled = false;  // Réactive le bouton
        }
        else{
            btnSoumettre.disabled = true;   // Sinon, désactive le bouton
        }
    
    });
});
