const makeButton = document.querySelector("#make-button");

let nameInput = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let cardText = document.getElementById("card-text");

function makeCard() {
  let friendName = nameInput.value;
  let adjective = adjectiveInput.value;
  let noun = nounInput.value;

  cardText.textContent = `Dear ${friendName}, you are a ${adjective} ${noun}!`;
}

makeButton.addEventListener("click", makeCard);
