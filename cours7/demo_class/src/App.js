import Information from "./Information.js";
import Inscription from "./Inscription.js";
import Horaire from "./Horaire.js";
import { cours } from "./data.js";
/**
 * Représente l'application
 */
export default class App {

    #aSequence;
    #nIndexSequence = 0;

    constructor(titre) {
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
        const oInscription = new Inscription(sectionInscription, cours, false);

        this.#aSequence = [oInformation, oInscription];
    }

    changementComposant() {
        console.log(this);
        let tempData = [];
        let composantActif = this.#aSequence[this.#nIndexSequence];
        if (composantActif.estValide()) {
            if(composantActif.getData){
                tempData = composantActif.getData();
                console.log(tempData)
            }
            
            composantActif.setActif(false);

            this.#nIndexSequence ++;
            if (this.#nIndexSequence >= this.#aSequence.length) {
                this.#nIndexSequence = 0;
            }
            composantActif = this.#aSequence[this.#nIndexSequence];
            if(composantActif.setData){
                composantActif.setData(tempData);
            }
            composantActif.setActif(true);
        }

    }
}
