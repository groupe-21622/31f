
/**
 * @typedef cours
 * @type {Object[]}
 * @property {string} sigle - Le sigle du cours
 * @property {string} nom - Le nom du cours
 * @property {string} prof - Le nom de l'enseignant
 * @property {string[]} horaire - L'horaire possible
 */
 
/**
 * Tableau de donnée de type cours
 * @type {cours[]}
 */
const cours = [{
                    sigle : "582-31F",
                    nom : "Prog Inter Web 2",
                    prof : "JM",
                    horaire : ["8h-11h", "12h-15h"]
                },{
                    sigle : "582-31B",
                    nom : "Prog Web Avancée",
                    prof : "",
                    horaire : ["9h-12h", "14h-17h", "8h-11h"]
                },{
                    sigle : "582-31W",
                    nom : "CMS",
                    prof : "",
                    horaire : ["19h-22h"]
                },{
                    sigle : "582-31D",
                    nom : "UX UI",
                    prof : "",
                    horaire : ["15h-18h", "8h-11h", "9h-12h", "14h-17h"]
                }];
                
                console.log(cours);


let monObjet = {
    prop : "allo",
    toto : function(param){
        console.log(this.prop);
    },
    monTruc : Array(),
    monAutreTruc : {test:"test", test2 : function(){
        console.log("allo mon autre truc");
    }}
}                




console.log(monObjet);
console.log(monObjet.prop);
monObjet.toto();
monObjet.monAutreTruc.test2();

let fct1 = function(){

}

function fct2(){

}

fct1();
fct2();

function Crayon(couleur, volume){

    console.log("Je suis un crayon " + couleur);
    this.couleur = couleur;
    if(volume){
        this.volumeEncre = volume;
    }
    else{
        this.volumeEncre = 10;
    }
}

Crayon.prototype.ecrire = function(){
    if(this.volumeEncre >0){
        console.log("J'écris en "+ this.couleur);
        this.volumeEncre--;
    }
    else{
        console.log("Je manque d'encre ");
    }
}

Crayon.prototype.getVolumeEncre = function(){
    return this.volumeEncre;
}

let crayonRouge = new Crayon("rouge");
crayonRouge.ecrire();


let crayonNoir = new Crayon("Noir", 100);
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonNoir.ecrire();
crayonRouge.ecrire();

console.log(crayonNoir.getVolumeEncre());
console.log(crayonRouge.getVolumeEncre());




class Livre {
    constructor(nbPage){
        this.nbPage = nbPage;
        this.pageActive = 1;
    }

    tournerPage(){
        this.pageActive++;
        console.log(this.pageActive);
        if(this.pageActive > this.nbPage){
            console.log("Vous avez fini le livre");
        }

    }
}


const monLivre = new Livre(5);
monLivre.tournerPage();
monLivre.tournerPage();
monLivre.tournerPage();
monLivre.tournerPage();
monLivre.tournerPage();
monLivre.tournerPage();
monLivre.tournerPage();
monLivre.tournerPage();
monLivre.tournerPage();
monLivre.tournerPage();
monLivre.tournerPage();

console.dir(Crayon)
console.dir(Livre)
