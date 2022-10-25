export default class Filtre{
    #domParent;
    #aData;
    #aCatFiltre =[{
        propriete :"release_date",
        etiquette : "Date de sortie", 
        valeurs : []
    },
    {
        propriete :"director",
        etiquette : "Réalisateur", 
        valeurs : []
    },
    {
        propriete :"producer",
        etiquette : "Producteur", 
        valeurs : []
    }];
    constructor(domParent){
        this.#domParent = domParent
    }

    setCategorie(data){
        
        this.#aData = data;
        this.#aCatFiltre.forEach((catFiltre)=>{
            let prop = catFiltre.propriete;
            let valeur = [];
            data.forEach(unFilms => {
                valeur.push(unFilms[prop]);
            });
            valeur.sort();
               
            valeur = [...(new Set(valeur))];    // Avec l'opérateur de décomposition (spread operator)
            
            console.log(valeur);
            catFiltre.valeurs = valeur;
        });
        console.log(this.#aCatFiltre)
    }

    /**
     * Applique les filtres sur les données en fonction des paramètres
     * @param {Object} params 
     * @param {String} params.cat - La propriété à filtrer
     * @param {String | Number} params.valeur - La valeur du filtre
     * @return {Array} - Données filtrés
     */
    appliquerFiltre(params){
        let res = [];
        if(params == null){
            res = this.#aData;
        }
        else{
            let valeur = params.valeur;
            res = this.#aData.filter((unElement)=>{
                return (unElement[params.cat] == valeur);
            })
        }
        return res;
    }

    rendu(){
        let chaineHTML = "";
        this.#aCatFiltre.forEach((uneCatFiltre)=>{
            chaineHTML += `<div>${uneCatFiltre.etiquette}<span class="material-icons">arrow_drop_down</span>`;
            uneCatFiltre.valeurs.forEach((uneValeur)=>{
                chaineHTML += `<li class="choixFiltre" data-js-cat="${uneCatFiltre.propriete}" data-js-cat-valeur="${uneValeur}" data-js-actif="0">${uneValeur}</li>`;
            })
            chaineHTML += `</div>`;
        })
        

        this.#domParent.innerHTML = chaineHTML;
    }



}