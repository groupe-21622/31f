import Ghibli from "./Ghibli.mjs";
import Routeur from "./Routeur.mjs";

export default class App {
    URLGhibli = "https://ghibliapi.herokuapp.com/";
    #routeur;
    #domParent;

    constructor(){
        
        this.#domParent = document.querySelector(".catalogue");

    }

    getFilms(){


        console.time("films")
        console.log("films");
        const oGhibli = new Ghibli();
        oGhibli.getRessources("films", (data)=>{
            this.afficherFilms(data);
                
            })
    }

    
    
    getPersonnage(){
    }

    getEmplacement(){
    
    }
    
    getEspece(){
    }

    getVehicule(){
    }

    

    afficherFilms(aFilms){
        let chaineHtml = "";
        let chainePerso = [];
        aFilms.forEach(unFilm=> {
           

            chaineHtml += `<article data-id=${unFilm.id} class="carte">
                                <header>
                                    <h2>${unFilm.title} (${unFilm.release_date})</h2>
                                    <h3>${unFilm.original_title}</h3>
                                </header>
                                <img src="${unFilm.image}">
                                <div class="contenu">
                                    <p>${unFilm.description}</p>
                                </div>
                                
                            </article>`;

        });
        this.#domParent.innerHTML = chaineHtml;
    }

    afficherPersonnage(aPersonnage){
        let chaineHtml = "";
        aPersonnage.forEach(element=> {
            chaineHtml += `<article class="carte">
                               
                                    <h2>${element.name} (${element.age})</h2>
                                    <h3>${element.gender}</h3>
                               
                                <div class="contenu">
                                    <p>${element.eye_color}</p>
                                </div>
                            </article>`;

        });
        this.#domParent.innerHTML = chaineHtml;
    }

    afficherEmplacement(aEmplacement){
        let chaineHtml = "";
        aEmplacement.forEach(element=> {
            chaineHtml += `<article class="carte">       
                                    <h2>${element.name} (${element.climate})</h2>
                                    <h3>${element.terrain}</h3>
                                <div class="contenu">
                                    <p>Nombre de résident : ${element.residents.length}</p>
                                </div>
                            </article>`;

        });
        this.#domParent.innerHTML = chaineHtml;
    }

    afficherEspece(aEspece){
        let chaineHtml = "";
        aEspece.forEach(element=> {
            chaineHtml += `<article class="carte">
                                
                                    <h2>${element.name} (${element.films.length})</h2>
                                    <h3>${element.eye_colors}</h3>
                                
                                <div class="contenu">
                                    <p>Nombre de résident : ${element.films.length}</p>
                                </div>
                            </article>`;

        });
        this.#domParent.innerHTML = chaineHtml;
    }
}