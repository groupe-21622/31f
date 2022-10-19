/**
 * Représente le composant Information
 */
export default class Information{
    /**
     * Structure de données interne au composant
     */
    #aData = [
        { 
            etiquette:"Nom :",
            nom: "nom",
            valeur: "",
            type: "text",
            cbValidation : function(){
                return true;
                return (this.valeur.length >= 1)
            }
        },
        { 
            etiquette:"Prénom :",
            nom: "prenom",
            valeur: "",
            type: "text",
            cbValidation : function(){
                return true;
                return (this.valeur.length >= 1)
            }
        },
        { 
            etiquette:"Courriel : ",
            nom: "courriel",
            valeur: "",
            type: "email",
            cbValidation : function(){
                return true;
                return this.valeur.includes("@");   // @todo : à compléter...
            }
        },
        { 
            etiquette:"Nombre de cours : ",
            nom: "nbCours",
            valeur: "4",
            type: "number",
            cbValidation : function(){
                console.log(this);
                let res = false;
                if(this.valeur >= 1 && this.valeur <=4){
                    res =true;
                }
                console.log(this.valeur);
                return res;
            }
        }

    ];

    #bActif;

    /**
     * Constructeur de la classe, fait la configuration de base du composant
     * @param {HTMLElement} domParent 
     * @param {Cours[]} data
     * @parem {boolean} bRendu - Dessiner ou pas le composant lors de l'instanciation
     */
    constructor(domParent, data, bActif){
        this.domParent = domParent;
        console.log("Information");
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
        let res = [];
        this.sauvegarderValeur();
        /*this.#aData.forEach((champs)=>{
            res.push (champs.cbValidation());
        })
        console.log(res);
        return res.every((resultat)=>{
            return resultat;
        })*/

        return this.#aData.every((unChamp)=>{
            return unChamp.cbValidation();
        }
        )
        //return true;
    }

    sauvegarderValeur (){
        this.#aData.forEach((unChamp)=>{
            let selecteur = `[name='${unChamp.nom}']`;
            unChamp.valeur = document.querySelector(selecteur)?.value;
        });
    }
    getData(){
        /*let donnees = [];
        this.#aData.forEach((unChamp)=>{
            donnees.push({  "cle": unChamp.nom, 
                            "valeur" : unChamp.valeur 
                        });
        });*/
        let donnees = {};
        this.#aData.forEach((unChamp)=>{
            donnees[unChamp.nom] = unChamp.valeur;
        });
        return donnees;
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
        let chaineHTML = `<legend>Informations personnelles</legend>`;
        this.#aData.forEach((element)=>{
            //console.log(element)
            chaineHTML += ` <p>
                                <label for="${element.nom}">${element.etiquette}</label>
                                <input type="${element.type}" value="${element.valeur}" name="${element.nom}">
                            </p>`;
        })

        this.domParent.innerHTML = chaineHTML;
    }

}

