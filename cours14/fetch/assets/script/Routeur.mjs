/**
 * Représente le routeur de l'application. 
 * Ce concept sera introduit progressivement dans les prochains cours, soyez patient!
 * @see https://dev.to/thedevdrawer/single-page-application-routing-using-hash-or-url-9jh
 */
 export default class Routeur{
    #routeActive;
    #routes ={}

    /**
     * À l'instanciation du routeur, ajoute les gestionnaires d'événement sur les href déjà présent dans le DOM. 
     * 
     */
    constructor(){
        window.addEventListener("popstate", this.dePopState.bind(this));
        document.querySelectorAll('[href^="#!/"]').forEach((lien)=>{
            lien.addEventListener("click", (evt)=>{
                evt.preventDefault();
                const monLien = evt.target;
                const hash = monLien.hash;
                history.pushState({}, "", hash);
                this.changeRoute(hash);      
            })
       })
    }
    
    ajouterRoute(route, fctRappel){
        this.#routes[route] = {cb:fctRappel};
        console.log(this.#routes);
    }

    demarrer(){
        let hash = location.hash;
        if(!hash.includes("#!/")){
            hash = "#!/";
        }
        history.pushState({}, "", hash);
        this.changeRoute(hash);
    }

    dePopState(evt){
        console.log(evt);
        let hash = location.hash;
        this.changeRoute(hash);
    }

    changeRoute(hash){
        let route = hash.match("#!/(.*)$")[1].replace("/", "");

        if(this.#routes[route]){
            this.#routes[route].cb();
        }          
    }
   
}