//window.addEventListener("DOMContentLoaded", function(){
window.addEventListener("load", function(){
    const btnTri = document.querySelectorAll(".item");
    console.log(btnTri);
    btnTri.forEach(function(unBtn){
        console.log(unBtn)
        unBtn.addEventListener("click", function(e){
            let btnCible = e.target;
            console.log(e.target )
            if(btnCible.classList.contains("tri")){
                btnCible = btnCible.nextElementSibling;
            }
            console.log(btnCible);
            if(btnCible.classList.contains("fleche-haut")){
                btnCible.classList.replace("fleche-haut", "fleche-bas");
            }
            else if(btnCible.classList.contains("fleche-bas")){
                btnCible.classList.replace("fleche-bas", "fleche-haut");
            }
        })
    })
/*
    for(let i=0; btnTri.length > i ; i++){
        let element = btnTri[i];
        console.log(element)
    }

    for(let element of btnTri){
        console.log(element)
    }
*/
})
