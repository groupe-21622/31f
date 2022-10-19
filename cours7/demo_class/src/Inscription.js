
export default class Inscription{
    /**
     * @type {Cours[]}
     * @private
     */
    #aData;
    #nbCours;
    #bActif;

    /**
     * Constructeur de la classe, fait la configuration de base du composant
     * @param {HTMLElement} domParent 
     * @param {Cours[]} data
     * @parem {boolean} bRendu - Dessiner ou pas le composant lors de l'instanciation
     */
     constructor(domParent, data, bActif){
        this.domParent = domParent;
        this.#aData = data;
        console.log("Inscription");
        this.#bActif = bActif;
        if(bActif){
            this.rendu();   // Appel la méthode d'affichage du composant
        }
    }
    /**
     * Permet de valider les données du composant
     * @returns {boolean} Validité du composant
     * @todo - A faire.
     */
    estValide(){
        let choix = document.querySelectorAll("option:checked");
        console.log(choix);
        return (choix.length == this.#nbCours);
        
    }
    setData(donnees){
        if(donnees.nbCours){
            this.#nbCours = donnees.nbCours;
        }

        console.log(this.#nbCours);

    }
    setActif(bActif){
        this.#bActif = bActif;
        if(bActif){
            this.rendu();
        }
        else{
            this.domParent.innerHTML = "";
        }
    }

    /**
     * Méthode qui affiche le composant dans son parent. 
     */
    rendu(){
        let chaineHTML = `<legend>Inscription</legend>`;
        chaineHTML += ` <p><label for="nbCours">Cours:</label>
                            <div class="selectCours">
                                <select multiple>`;
        this.#aData.forEach(function(unCours){
            chaineHTML += `<option value="${unCours.sigle}">${unCours.nom}</option>`;

        });
        chaineHTML +=   `</select></div></p>`;

        this.domParent.innerHTML = chaineHTML;
    }
}