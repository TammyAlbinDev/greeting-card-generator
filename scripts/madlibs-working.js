let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");
let place = prompt("A place:"); 
let food = prompt("A food:");

function makeCard() {
    console.log("Dear " + name + ",");
    console.log("You are as " + adjective + " as a " +      noun + ".");
    console.log("I hope you have a wonderful time at "      + place + "."); 
    console.log("Enjoy some " + food + " on your special day!");
    console.log("Happy birthday from the generator.");
}

makeCard();
