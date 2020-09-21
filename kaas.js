//Stijn Dusseldorp
//Software Developer

var cheese = prompt("Is de kaas geel?").toLowerCase();

if(cheese === "ja"){
    cheese = prompt("Zitten er gaten in?").toLowerCase()
    if(cheese === "ja"){
        cheese = prompt("Is de kaas belachelijk duur?").toLowerCase()
        if(cheese === "ja"){
            alert("Emmenthaler")
        } else if(cheese === "nee") {
            alert("Leerdammer")
        }
    } else if(cheese === "nee" ) {
        cheese = prompt("Is de kaas zo hard als een steen?").toLowerCase()
            if(cheese === "ja"){
                alert("Parmigiano Reggiano")
            } else if (cheese === "nee"){
                alert("Goudse kaas")
            }
    }
}