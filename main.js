// variable declarations
var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.","I am worthy of my dreams.",
"I am enough.","I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."];

var mantras = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."];


var submitButton = document.querySelector(".submit-button");
var messageDisplay = document.querySelector(".return-message");
var affirmationRadio = document.querySelector("#affirmations");
var mantraRadio = document.querySelector("#mantras");
var meditateImage = document.querySelector(".meditate-image");
var clearButton = document.querySelector(".clear-button");


// event listeners
submitButton.addEventListener("click", displayMessage);
clearButton.addEventListener("click", clearMessage);
affirmationRadio.addEventListener("click", showSubmitButton);
mantraRadio.addEventListener("click", showSubmitButton);

// event handlers
function displayMessage(){
  event.preventDefault();
  addFade(messageDisplay);
  addFade(clearButton);
  meditateImage.classList.add("hidden");
  clearButton.classList.remove("hidden");
  if(mantraRadio.checked === true){
    messageDisplay.innerText = mantras[getRandom(mantras)];
  } else if(affirmationRadio.checked === true){
    messageDisplay.innerText = affirmations[getRandom(affirmations)];
  } else {
    return;
  }
};
function clearMessage(){
  addFade(meditateImage);
  meditateImage.classList.remove("hidden");
  clearButton.classList.add("hidden");
  messageDisplay.innerText = "";
}
function showSubmitButton(){
  submitButton.classList.add("fade-in");
  submitButton.classList.remove("hidden");
}

function getRandom(array){
  return Math.ceil(Math.random() * array.length -1)
}
function addFade(element){
  element.classList.add("fade-in");
  setTimeout(clearFade, 1500, element);
}
function clearFade(element){
  element.classList.remove("fade-in");
}
