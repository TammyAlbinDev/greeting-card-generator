let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");
let place = prompt("A place:");
let food = prompt("A food:");
let style = prompt("Fancy or silly?");

let closings = [
  "You are a legend.",
  "Stay golden.",
  "Signs point to awesome.",
  "Keep being amazing!",
  "The world is lucky to have you."
    "Keep shining bright!"
];

function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function makeCard() {
  if (style.toLowerCase() === "fancy") {
    console.log("Dearest " + name + ",");
  } else {
    console.log("YO " + name + "!");
  }

  console.log("You are as " + adjective + " as a " + noun + ".");
  console.log("I hope you have a wonderful time at " + place + ".");
  console.log("Enjoy some " + food + " on your special day!");

  let index = randomNumber(0, closings.length - 1);
  console.log(closings[index]);
}

makeCard();