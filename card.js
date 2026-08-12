const makeButton = document.querySelector("#make-button");

let nameInput = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let cardText = document.getElementById("card-text");
let closingText = document.getElementById("closing-text");

let closings = [
  "Warmly,",
  "With love,",
  "Best wishes,",
  "Take care,",
  "Your friend,"
];

function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function makeCard() {
  let friendName = nameInput.value;
  let adjective = adjectiveInput.value;
  let noun = nounInput.value;

  cardText.textContent = `Dear ${friendName}, you are a ${adjective} ${noun}!`;

  let closing = closings[randomNumber(0, closings.length - 1)];
  closingText.textContent = closing;
}
function makeCard() {
  let friendName = nameInput.value;
  let adjective = adjectiveInput.value;
  let noun = nounInput.value;

  cardText.textContent = `Dear ${friendName}, you are a ${adjective} ${noun}!`;

  let closing = closings[randomNumber(0, closings.length - 1)];
  closingText.textContent = closing;
}

let surpriseButton = document.getElementById("surprise-button");

function surpriseMe() {
  let randomIndex = randomNumber(0, closings.length - 1);
  closingText.textContent = closings[randomIndex];
}

surpriseButton.addEventListener("click", surpriseMe);

makeButton.addEventListener("click", makeCard);

