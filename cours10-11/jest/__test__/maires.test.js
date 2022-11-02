import Maire from "../src/Maire.js";
import {mairesMTL} from "../src/mairesdata.js";

describe("Recherche par date", ()=>{
    let oMaire = new Maire(mairesMTL);
    test("Pour la valeur 2013", ()=>{
        let param = {type: "date", valeur: 2013};
        expect(oMaire.rechercheMaires(param)).toHaveLength(3);
        
    })
    test("Pour la valeur 2022", ()=>{
        let param = {type: "date", valeur: 2022};
        const expected = [{
            nom:"Plante",
            prenom : "Valérie",
            debut : 2017,
            fin : null
        }];
        //expect(oMaire.rechercheMaires(param)).toHaveLength(1);
        expect(oMaire.rechercheMaires(param)).toEqual(expected);
        expect(oMaire.rechercheMaires(param))
        .toEqual(expect.arrayContaining([expect.objectContaining({nom:"Plante"})]));
        
    })
})



