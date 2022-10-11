import Information from "./Information.js";
import Inscription from "./Inscription.js";
import Horaire from "./Horaire.js";
import {cours} from "./data.js";
/**
 * Représente l'application
 */
export default class App{

    #aSequence;
    #nIndexSequence = 0;

    constructor(titre){
        // Récupère la section "information" comme point d'attache du composant
        let sectionInformation = document.querySelector(".information");
        let sectionInformation2 = document.querySelector(".information2");
        let sectionInscription = document.querySelector(".inscription");

        let btnSuivant = document.querySelector(".suivant");
        btnSuivant.addEventListener("click", this.changementComposant.bind(this));

        this.titre = titre;
        console.log("App :" + this.titre);
        // Instancie la classe Information en lui passant son "parent"
        const oInformation = new Information(sectionInformation, null, true);
        const oInformation2 = new Information(sectionInformation2, null, false);
        const oInscription = new Inscription(sectionInscription, cours, false);
        
        this.#aSequence = [oInformation, oInformation2, oInscription];
    }

    changementComposant(){
        console.log(this);
        let composantActif = this.#aSequence[this.#nIndexSequence];
        if(composantActif.estValide()){
            composantActif.setActif(false);
            this.#nIndexSequence ++;
            if(this.#nIndexSequence >= this.#aSequence.length){
                this.#nIndexSequence =0;
            }
            composantActif = this.#aSequence[this.#nIndexSequence];
            composantActif.setActif(true);
        }
        
    }
}
