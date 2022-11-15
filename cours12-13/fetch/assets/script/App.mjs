import Ghibli from "./Ghibli.mjs";
import Routeur from "./Routeur.mjs";

export default class App {
    URLGhibli = "https://ghibliapi.herokuapp.com/";
    #routeur;
    #domParent;

    constructor(){
        this.#routeur = new Routeur();
        this.#routeur.ajouterRoute("films", this.getFilms.bind(this));
        this.#routeur.ajouterRoute("films", this.getFilmsAsync.bind(this));
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
            data.forEach(unFilm=>{
                unFilm.perso = [];
                if(unFilm.people.length > 1){
                    let aPromesses = [];
                    for(let unPerso of unFilm.people){
                        console.log (unPerso);
                        aPromesses.push(fetch(unPerso));
                    }
                    Promise.all(aPromesses).then((aData)=>{
                        console.log(aData)
                        return Promise.all(aData.map((unElement)=>{
                            return unElement.json();
                        }))
                        console.log(aData)
                    }).then(aData=>{
                        unFilm.perso = aData;
                        console.log(unFilm.perso)
                        let domPerso = this.renderDomPerso(unFilm.perso);
                        document.querySelector(`[data-id="${unFilm.id}"] .personnage`).innerHTML = domPerso;
                        //this.afficherFilms(data);
                    });
                    
                }
                //console.log(unFilm.people)
            })
            
            this.afficherFilms(data);

        });
    }

    async getFilmsAsync(){
        const oGhibli = new Ghibli();
        let films = await oGhibli.getRessourcesAsync("films");
        for(let unFilm of films){
            unFilm.perso = [];
            if(unFilm.people.length > 1){
                for(let unPerso of unFilm.people){
                    console.log (unPerso);
                    let unElement = await fetch(unPerso);
                    let dataElement = await unElement.json();
                    unFilm.perso.push(dataElement);
                }
            }
        }
        this.afficherFilms(films);
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

    renderDomPerso(aPerso){
        let chainePerso = aPerso.map(unPerso=>{
                return `<p>${unPerso.name}</p>`;
            });
        return chainePerso.join("");
    }

    afficherFilms(aFilms){
        let chaineHtml = "";
        aFilms.forEach(unFilm=> {
            console.log(unFilm.perso)
            let chainePerso = unFilm.perso.map(unPerso=>{
                return `<p>${unPerso.name}</p>`;
            });
            chainePerso = chainePerso.join("");
            //console.log(chainePerso);

            chaineHtml += `<article data-id=${unFilm.id} class="carte">
                                <header>
                                    <h2>${unFilm.title} (${unFilm.release_date})</h2>
                                    <h3>${unFilm.original_title}</h3>
                                </header>
                                <img src="${unFilm.image}">
                                <div class="contenu">
                                    <p>${unFilm.description}</p>
                                    <p class="personnage">${chainePerso}</p>
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