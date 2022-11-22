/**
 * Représente le routeur de l'application. 
 * Ce concept sera introduit progressivement dans les prochains cours, soyez patient!
 * @see https://dev.to/thedevdrawer/single-page-application-routing-using-hash-or-url-9jh
 * 
 * Pour tester les expressions régulières : https://regex101.com/
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
        let regExp = /^\/.*/;
        if(!regExp.test(route)){
            route = "/" + route;
        }
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

    naviguer(route, redirection){
        let regExp = /^\/.*/;
        if(!regExp.test(route)){
            route = "/" + route;
        }
        
        let hash = `#!${route}`;
        console.log(hash);
        if(redirection){
            history.replaceState({}, "", hash);
        }
        else{
            history.pushState({}, "", hash);
        }

        this.changeRoute(hash);

    }

    changeRoute(hash){
                
        console.log(hash)
        let dataRoute = this.getParamRoute(hash);
        let route = dataRoute.routeActive[0];

        if(this.#routes[route]){
            this.#routes[route].cb();
        }          
    }

    getParamRoute(hash){
        // Chaine type 0 : #!/
        // Chaine type 1 : #!/route
        // Chaine type 2 : #!/route/identifiant
        // Chaine type 3 : #!/route?cle=valeur&cle2=valeur2&cleN=valeurN
        // Chaine type 4 : #!/route/identifiant?cle=valeur&cle2=valeur2&cleN=valeurN
        // Chaine type 5 : #!/route/element/element/elementN/...
        this.dataRoute = {
            routeActive : [],
            parametre : {}
        };

        let route = hash.match(/#!(\/.*)$/)[1];

        if(route.includes("?")){
            let sParam = route.match(/\?(.*)$/)[1];
            let aParam = sParam.split("&");
            console.log(aParam)
            aParam.forEach((unParam)=>{
                let aTemp = unParam.split("=");
                let cle = aTemp[0];
                let valeur = aTemp[1];
                this.dataRoute.parametre[cle] = valeur;
            })
            route = route.split("?")[0];
        }
        
        if(route != "/"){
            if(route.charAt(route.length-1) == "/"){
                route = route.substring(0, route.length-1);
            }
            let elementRoute = route.split("/");
            if(elementRoute[0] == ""){
                elementRoute.shift();
            }
            elementRoute = elementRoute.map((uneRoute)=>{
                return "/" + uneRoute;
            })
            this.dataRoute.routeActive = elementRoute;
            console.log(elementRoute)
        }
        else{   // Route "/"
            this.dataRoute.routeActive = ["/"];
        }
        
        console.log(route);
        console.log(this.dataRoute)
        return this.dataRoute;
    }
   
}