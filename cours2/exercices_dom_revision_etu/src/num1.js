window.addEventListener("DOMContentLoaded", function(){
    // Aller chercher le champs texte
    const elMessage = document.querySelector('[name="message"]');
    // Aller chercher le bouton soumettre
    const btnSoumettre = document.querySelector('[name="soumettre"]');
    btnSoumettre.disabled = true;   // Désactiver le bouton, pourrait se faire avec la condition longueur (20 à 100) même initialement
    
    // Affecte le nombre de caractère initiale du champs texte
    document.querySelector(".nombre_caractere").innerHTML = elMessage.value.length;

    // Getsion du click sur le bouton soumettre (s'il est actif)
    btnSoumettre.addEventListener("click", function(e){
        console.log("click");
        console.log(elMessage);
        const sMessage = elMessage.value;
        console.log(sMessage);
    })

    
    /*événement input au lieu de keyup (solution initiale avec keyup)*/ 
    elMessage.addEventListener("input", function(e){
        console.log("input");
        console.log(e.target.value.length);
        
        const longueur = e.target.value.length; // La longueur de la chaine de texte
        if(longueur >= 20 && longueur <=100){   //Entre 20 et 100
            btnSoumettre.disabled = false;      // Gestion du bouton
        }
        else{
            btnSoumettre.disabled = true;       // Gestion du bouton
        }
        // Écrire la longueur dans le DOM
        document.querySelector(".nombre_caractere").innerHTML = longueur;
    })

    
    // Test de solution alternative à l'événement input
    /*elMessage.addEventListener("keyup", function(e){
        console.log("keyup");
        console.log(e.target.value.length);
    })*/
    /*elMessage.addEventListener("change", function(e){
        console.log("changement");
        console.log(e.target.value.length);
    })*/
    /*elMessage.addEventListener("keydown", function(e){
        console.log("keydown");
        console.log(e.target.value.length);
    })*/
    /*elMessage.addEventListener("keypress", function(e){
        console.log("keypress");
        console.log(e.target.value.length);
    })*/
    console.log(btnSoumettre)

})