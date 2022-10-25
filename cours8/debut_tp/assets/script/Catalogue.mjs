export default class Catalogue{
    #aFilms;
    #domParent;

    constructor(domParent){
        this.#domParent = domParent;
    }

    setFilms(data){
        this.#aFilms = data;

    }
    
    rendu(){
        let chaineHtml = "";
        this.#aFilms.forEach(unFilm=> {
            chaineHtml += `<article class="carte">
                                <header>
                                    <h2>${unFilm.title} (${unFilm.release_date})</h2>
                                    <h3>${unFilm.original_title}</h3>
                                </header>
                                <img src="${unFilm.image}">
                                <div class="contenu">
                                    <p>${unFilm.description}</p>
                                </div>
                                <footer class="action">x, y z</footer>
                            </article>`;

        });
        this.#domParent.innerHTML = chaineHtml;
    }

    
}