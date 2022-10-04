window.addEventListener("DOMContentLoaded", function(){
    const elInput = document.querySelector("[name='message']");
    const elNbCharactere = document.querySelector(".nombre_caractere");
    const btnSoumettre = document.querySelector("[name='soumettre']");
    
    btnSoumettre.disabled = true;
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
    elInput.addEventListener("input", function (e){
        const champTexte = e.target;
        /*console.dir(e)
        console.log("input")
        console.log(e.target)
        console.log(champTexte.value)
        */
        const btnSoumettre = document.querySelector("[name='soumettre']");
        const elNbCharactere = document.querySelector(".nombre_caractere");

        elNbCharactere.innerHTML = champTexte.value.length;

        if(champTexte.value.length <= 100 && champTexte.value.length >=20){
            btnSoumettre.disabled = false;
        }
        else{
            btnSoumettre.disabled = true;
        }
    
    })



    

})
