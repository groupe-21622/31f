export default class Maire {
    /**
     * @typedef UnMaire
     * @type {object}
     * @property {string} nom - Le nom
     * @property {string} prenom - Le prénom
     * @property {number} debut - Année du début du mandat
     * @property {?number} fin - Année de fin du mandat ou null
     */

    /**
     * @type {UnMaire[]} Tableau des maires
     * @private
     */
    #aMaires;

    /**
     * Création de la liste des maires
     * @param {UnMaire[]} lesMaires - Tableau des maires pour la ville
     */
    constructor (lesMaires){
        this.#aMaires = lesMaires;
    }
    
     /**
      * Retourne les résultats de la recherche
      * @param {Object} params - Objet de paramètre
      * @param {string} params.type - Le type de recherche : ["date", "nom"]
      * @param {string | Number} params.valeur - La valeur recherchée
      * @returns {UnMaire[]} - Tableau des résultats;
     */
    rechercheMaires(params){
        // Pour chaque
        // Si x == y
        // push dans le tableau de résultat
        // Retourne le tableau de résultat...
    }

    /**
     * Retourne la liste des maires trié selon les paramètres
     * @param {Object} params - Objet de paramètre
     * @param {string} params.type - Le type de tri : ["date", "nom"]
     * @param {string} params.ordre - L'ordre du tri : ["ASC", "DESC"]
     * @returns {UnMaire[]} - Tableau des résultats
     */
    listeMaires(params) {
        if(params.type === "nom"){
            this.#aMaires.sort(function(a, b){
                return a.nom.localeCompare(b.nom, "fr");
            });
            /*this.#aMaires.sort((a, b) => {
                return a.nom.localeCompare(b.nom, "fr");
            });*/
            //this.#aMaires.sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
        }
        console.log(this.#aMaires[0]);
        if(params.ordre === "DESC"){
            this.#aMaires.reverse();
        }
        return this.#aMaires;
    }

    /**
     * @returns {Number} - Le nombre d'enregistrement dans le tableau des maires
     */
    getNombreMaires(){
        return this.#aMaires.length;
    }
    
  }