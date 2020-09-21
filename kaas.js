//Stijn Dusseldorp
//Software Developer

var cheese = prompt("Is de kaas geel?").toLowerCase();

if (cheese === "ja") {
    cheese = prompt("Zitten er gaten in?").toLowerCase()
    if (cheese === "ja") {
        cheese = prompt("Is de kaas belachelijk duur?").toLowerCase()
        if (cheese === "ja") {
            alert("Emmenthaler");
        } else if (cheese === "nee") {
            alert("Leerdammer");
        }
    } else if (cheese === "nee") {
        cheese = prompt("Is de kaas zo hard als een steen?").toLowerCase()
        if (cheese === "ja") {
            alert("Parmigiano Reggiano");
        } else if (cheese === "nee") {
            alert("Goudse kaas");
        }
    }
} else if (cheese === "nee") {
    cheese = prompt("Heeft de kaas blauwe schimmels?").toLowerCase()
    if (cheese === "ja") {
        cheese = prompt("Heeft de kaas een korst?").toLowerCase()
        if (cheese === "ja") {
            alert("Bleu de Rochbaron");
        } else if (cheese === "nee") {
            alert("Fourme d'Ambert");
        }
    } else if (cheese === "nee") {
        cheese = prompt("Heeft de kaas een korst?").toLowerCase()
        if (cheese === "ja") {
            alert("Camembert");
        } else if (cheese === "nee") {
            alert("Mozzarella");
        }
    }
}