import Information from "./Information.js";
import Inscription from "./Inscription.js";
import Horaire from "./Horaire.js";
/**
 * Représente l'application
 */
export default class App{
    constructor(titre){
        // Récupère la section "information" comme point d'attache du composant
        let sectionInformation = document.querySelector(".information");
        this.titre = titre;
        console.log("App :" + this.titre);
        // Instancie la classe Information en lui passant son "parent"
        const oInformation = new Information(sectionInformation);
        //new Information(document.querySelector(".inscription"));
        //new Inscription();
        //new Horaire();
        //console.log(i)

    }
}
