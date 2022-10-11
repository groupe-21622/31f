import MonApp from "./App.js";
import {cours, ValideData} from "./data.js";

console.log(cours);

window.addEventListener("load", function(){
    const app = new MonApp("Inscription scolaire");
    ValideData();
    console.log(cours);
})

