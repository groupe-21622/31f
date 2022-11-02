import Maire from "../src/Maire.mjs";
import { mairesMTL } from "../src/mairesdata.mjs";
//import assert from "assert";
import {assert, expect} from "chai";

describe("Test de base", () => {
        it("test des données", ()=>{
            expect(mairesMTL).to.be.an("array");
        })
    });
