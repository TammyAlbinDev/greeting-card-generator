const makeButton = document.querySelector("#make-button");

let nameInput = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let cardText = document.getElementById("card-text");
let closingText = document.getElementById("closing-text");
let cardSection = document.getElementById("card-section");
let bonusLine = document.getElementById("bonus-line");

let cardsMade = 0;

let resetButton = document.getElementById("reset-button");

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
    cardsMade = cardsMade + 1;
    if (cardsMade >= 5){
        bonusLine.hidden = false;
}
    
  cardSection.hidden = false;
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

function resetCard() {
  nameInput.value = "";
  adjectiveInput.value = "";
  nounInput.value = "";

  cardText.textContent = "Your card will appear here.";
  closingText.textContent = "";
  cardSection.hidden = true;
}

surpriseButton.addEventListener("click", surpriseMe);

makeButton.addEventListener("click", makeCard);

resetButton.addEventListener("click", resetCard);

