/**
 * Représente le composant Information
 */
export default class Information{
    /**
     * Structure de données interne au composant
     */
    data = [
        { 
            etiquette:"Nom :",
            nom: "nom",
            valeur: "",
            type: "text",
        },
        { 
            etiquette:"Prénom :",
            nom: "prenom",
            valeur: "",
            type: "text",
        },
        { 
            etiquette:"Courriel : ",
            nom: "courriel",
            valeur: "",
            type: "email",
        },
        { 
            etiquette:"Nombre de cours : ",
            nom: "nbcours",
            valeur: "4",
            type: "number",
        }

    ];
    /**
     * Constructeur de la classe, fait la configuration de base du composant
     * @param {HTMLElement} domParent 
     */
    constructor(domParent){
        this.domParent = domParent;
        console.log("Information");
        
        this.rendu();   // Appel la méthode d'affichage du composant
    }
    /**
     * Permet de valider les données du composant
     * @returns {boolean} Validité du composant
     * @todo - A faire.
     */
    estValide(){
        return true;
    }
    /**
     * Méthode qui affiche le composant dans son parent. 
     */
    rendu(){
        let chaineHTML = `<legend>Informations personnelles</legend>`;
        this.data.forEach((element)=>{
            console.log(element)
            chaineHTML += ` <p>
                                <label for="${element.nom}">${element.etiquette}</label>
                                <input type="${element.type}" value="${element.valeur}" name="${element.nom}">
                            </p>`;
        })

        this.domParent.innerHTML = chaineHTML;
    }

}

