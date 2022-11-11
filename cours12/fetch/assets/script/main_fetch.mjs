import App from "./App.mjs";


window.addEventListener("load", function(){
    console.log("prêt");
    new App();
    const url = "https://ghibliapi.herokuapp.com/films";
    
    /**** 
     * AJAX : Asynchronous Javascript and XML
     * seconde technique : Fetch
     * */

    fetch("https://ghibliapi.herokuapp.com/films")
        .then((data)=>data.json())
        .then((data)=>{
            // Traitement de la donnée + Affichage    
            console.log(data)
        });

    
})
