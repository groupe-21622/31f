
export default class Horaire{
    /**
     * @type {Cours[]}
     * @private
     */
    #aData;
    #bActif;
    #aChoixCours;
    #monHoraire;
    /**
     * Constructeur de la classe, fait la configuration de base du composant
     * @param {HTMLElement} domParent 
     * @param {Cours[]} data
     * @parem {boolean} bRendu - Dessiner ou pas le composant lors de l'instanciation
     */
     constructor(domParent, data, bActif){
        this.domParent = domParent;
        this.#aData = data;
        console.log("Horaire");
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
        //const aRes = []
        let res = true;
        this.sauvegarderValeur();
        for(let sigle in this.#monHoraire){
            if(this.#monHoraire[sigle].length < 1){
                res = false;
            }
            //aRes.push(this.#monHoraire[sigle].length >= 1);
        }
        //aRes = [true, false, true, true];
        //return aRes.every((res)=>{return res});
        return res;
        
    }

    setData(donnees){
       this.#aChoixCours = donnees;

    }
    sauvegarderValeur (){
        const valeur = {};
        /**
         * valeur.582-31F = [choix, choix, choix]
         */
        this.#aChoixCours.forEach((sigle)=>{
           let mesChoix = document.querySelectorAll(`[data-sigle='${sigle}']:checked`);
           valeur[sigle] = [];
           mesChoix.forEach((unChoix)=>{
            valeur[sigle].push(unChoix.value);
           })
        })
        console.log(valeur)
        this.#monHoraire = valeur;
    }

    getData(){
       return this.#monHoraire;
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
        let chaineHTML = `<legend>Horaire</legend>`;
        this.#aData.forEach((unCours)=>{
            if(this.#aChoixCours.includes(unCours.sigle)){
                chaineHTML += `<p>${unCours.nom}</p>`;
                unCours.horaire.forEach((sHeure)=>{
                    chaineHTML += `<p><input type="checkbox" data-sigle='${unCours.sigle}' name="horaire[${unCours.sigle}][]" value="${sHeure}">${sHeure}</p>`;
                })
            }

        })


        this.domParent.innerHTML = chaineHTML;
        
    }
}