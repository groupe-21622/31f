import Information from "./Information.js";
import Inscription from "./Inscription.js";
import Horaire from "./Horaire.js";
import {cours} from "./data.js";
/**
 * Représente l'application
 */
export default class App{
    constructor(titre){
        // Récupère la section "information" comme point d'attache du composant
        let sectionInformation = document.querySelector(".information");
        let sectionInscription = document.querySelector(".inscription");
        this.titre = titre;
        console.log("App :" + this.titre);
        // Instancie la classe Information en lui passant son "parent"
        const oInformation = new Information(sectionInformation);
        const oInscription = new Inscription(sectionInscription, cours);
        console.log(oInscription.aData);
        //console.log(oInscription.#aData);
        
        oInscription.aData = [];
        //oInscription.#aData = [];
        

    }
}
