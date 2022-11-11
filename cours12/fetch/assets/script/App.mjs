import Ghibli from "./Ghibli.mjs";
import Routeur from "./Routeur.mjs";

export default class App {
    URLGhibli = "https://ghibliapi.herokuapp.com/";
    #routeur;
    #domParent;

    constructor(){
        this.#routeur = new Routeur();
        this.#routeur.ajouterRoute("films", this.getFilms.bind(this));
        this.#routeur.ajouterRoute("personnage", this.getPersonnage.bind(this));
        this.#routeur.ajouterRoute("emplacement", this.getEmplacement.bind(this));
        this.#routeur.ajouterRoute("espece", this.getEspece.bind(this));
        this.#routeur.ajouterRoute("vehicule", this.getVehicule.bind(this));
        this.#routeur.demarrer();

        this.#domParent = document.querySelector(".catalogue");

    }

    getFilms(){
        console.log("films");
        const oGhibli = new Ghibli();
        oGhibli.getRessources("films", (data)=>{
            data.forEach(element=>{
                //console.log(data);
                // Faire quelque chose...
            })
            this.afficherFilms(data);

        });
        
      
    }
    
    getPersonnage(){
        const oGhibli = new Ghibli();
        oGhibli.getRessourcesXHR("people", this.afficherPersonnage.bind(this));
    }

    async getEmplacement(){
        const oGhibli = new Ghibli();
        let res = await oGhibli.getRessourcesAsync("locations");
        this.afficherEmplacement(res)
        

    }
    
    getEspece(){
        const oGhibli = new Ghibli();
        oGhibli.getRessourcesPromise("species")
            .then(data=>data.json())
            .then(this.afficherEspece.bind(this));
    }

    getVehicule(){
        console.log("Vehicule")
    }


    afficherFilms(aFilms){
        let chaineHtml = "";
        aFilms.forEach(unFilm=> {
            chaineHtml += `<article class="carte">
                                <header>
                                    <h2>${unFilm.title} (${unFilm.release_date})</h2>
                                    <h3>${unFilm.original_title}</h3>
                                </header>
                                <img src="${unFilm.image}">
                                <div class="contenu">
                                    <p>${unFilm.description}</p>
                                </div>
                                <footer class="action">x, y z</footer>
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
                                <footer class="action">x, y z</footer>
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
                                <footer class="action">x, y z</footer>
                            </article>`;

        });
        this.#domParent.innerHTML = chaineHtml;
    }

    afficherEspece(aEspece){
        let chaineHtml = "";
        aEspece.forEach(element=> {
            chaineHtml += `<article class="carte">
                                
                                    <h2>${element.name} (${element.films.length})</h2>
                                    <h3>${element.eye_colors                                    }</h3>
                                
                                <div class="contenu">
                                    <p>Nombre de résident : ${element.films.length}</p>
                                </div>
                                <footer class="action">x, y z</footer>
                            </article>`;

        });
        this.#domParent.innerHTML = chaineHtml;
    }
}