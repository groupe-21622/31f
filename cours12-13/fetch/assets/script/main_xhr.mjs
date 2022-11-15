import App from "./App.mjs";


window.addEventListener("load", function(){
    console.log("prêt");
    new App();
    
    
    /**** 
     * AJAX : Asynchronous Javascript and XML <xml><noeud></noeud></xml>
     * Première technique : Ancienne, mais encore pertinente 
     * XHR
     * */

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", (e)=>{
        console.log(e.target);
        console.log(e.target.readyState);
        if(e.target.readyState == "4" && e.target.status == "200"){
            //console.log(e.target.response)
            // L'afficher ou bien le traiter...
        }
    })

    xhr.addEventListener("load", (e)=>{
        console.log(e.target.response)
            // L'afficher ou bien le traiter...
        
    })
    
    xhr.open("GET", "https://ghibliapi.herokuapp.com/films");
    //xhr.open("GET", "https://data.montreal.ca/dataset/2985215a-a049-4229-81bc-c22f99edb9f7/resource/cb52bb00-912b-4467-a4a8-6f9fc049694f/download/toponymes.json");

    xhr.send();


})
