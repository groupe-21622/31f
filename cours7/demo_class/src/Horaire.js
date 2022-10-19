
export default class Horaire{
    /**
     * @type {Cours[]}
     * @private
     */
    #aData;
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
        this.sauvegarderValeur();
        return true;
        
    }

    setData(donnees){
       

    }
    sauvegarderValeur (){
        
    }

    getData(){
       
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
            chaineHTML += `<p>${unCours.nom}</p>`;
            unCours.horaire.forEach((sHeure)=>{
                chaineHTML += `<p>Ceci devrait être un checkbox pour : ${sHeure}`;
            })
        })


        this.domParent.innerHTML = chaineHTML;
        
    }
}