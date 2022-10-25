import {dataGhibli} from "../data/film.js";
import Catalogue from "./Catalogue.mjs";
import Filtre from "./Filtre.mjs";



export default class Application{
    #oFiltre;
    #oCatalogue;
    constructor(){
        const domCatalogue = document.querySelector(".catalogue");
        const domListeCategorie = document.querySelector(".liste-categorie");

        domListeCategorie.addEventListener("click", this.appliquerFiltre.bind(this))

        console.log(domCatalogue)
        this.#oCatalogue = new Catalogue(domCatalogue);
        
        this.#oFiltre = new Filtre(domListeCategorie);
        this.#oFiltre.setCategorie(dataGhibli);
        this.#oFiltre.rendu();


        /*let data = dataGhibli.filter((unFilm)=>{
            return (unFilm.release_date >= 1980 && unFilm.release_date <= 1989 );
        })*/
        this.#oCatalogue.setFilms(dataGhibli);
        this.#oCatalogue.rendu();


    }

    appliquerFiltre(e){
        const cible = e.target;
        let dataFiltre;
        if(cible.classList.contains("choixFiltre")){
            if(cible.dataset.jsActif == 1){
                dataFiltre = this.#oFiltre.appliquerFiltre();    
                cible.dataset.jsActif = 0;
            }
            else{
                let param = {
                    cat: cible.dataset.jsCat,
                    valeur : cible.dataset.jsCatValeur
                };
                document.querySelectorAll("[data-js-actif='1']").forEach((unElement)=>{
                    unElement.dataset.jsActif = 0;
                })
                cible.dataset.jsActif = 1;
                dataFiltre = this.#oFiltre.appliquerFiltre(param);
                
            }
            this.#oCatalogue.setFilms(dataFiltre);
            this.#oCatalogue.rendu();

        }
    }
}