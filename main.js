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
var affirmationsShown = [];
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
var mantrasShown = [];

var submitButton = document.querySelector(".submit-button");
var messageDisplay = document.querySelector(".return-message");
var affirmationRadio = document.querySelector("#affirmations");
var mantraRadio = document.querySelector("#mantras");
var meditateImage = document.querySelector(".meditate-image");
var clearButton = document.querySelector(".clear-button");
var addMessageDropBtn = document.querySelector("#add-message");
var addMessageMenu = document.querySelector(".add-message-menu");
var addMessageSubmitBtn = document.querySelector("#add-form-button");
var addMessageInput = document.querySelector("#add-message-input");
var addMessageAffirmation = document.querySelector("#add-affirmations");
var addMessageMantra = document.querySelector("#add-mantras");



// event listeners
submitButton.addEventListener("click", displayMessage);
clearButton.addEventListener("click", clearMessage);
affirmationRadio.addEventListener("click", showSubmitButton);
mantraRadio.addEventListener("click", showSubmitButton);
addMessageDropBtn.addEventListener("click", showAddMessage);
addMessageSubmitBtn.addEventListener("click", addMessage);

// event handlers
function displayMessage(){
  event.preventDefault();
  gong.currentTime = 0;
  gong.play();
  addFade(messageDisplay);
  addFade(clearButton);
  meditateImage.classList.add("hidden");
  clearButton.classList.remove("hidden");
  if(mantraRadio.checked === true){
    for(var i = 0; i < mantras.length - 1; i++){
      var mantra = mantras[getRandom(mantras)];
      if(mantrasShown.length == mantras.length) {
        messageDisplay.innerText = "✨You have seen all the mantras, and will now see repeats✨";
        clearMantras();
        break;
      } else if(mantrasShown.includes(mantra)){
          continue;
      } else {
          messageDisplay.innerText = mantra;
          mantrasShown.push(mantra);
          return;
        }
      }
    }else if(affirmationRadio.checked === true){
      for(var i = 0; i < affirmations.length -1; i++){
        var affirmation = affirmations[getRandom(affirmations)];
        if(affirmationsShown.length == affirmations.length){
          clearAffirmations();
          messageDisplay.innerText = "✨You have seen all the affirmations, and will now see repeats✨";
          break;
        } else if(affirmationsShown.includes(affirmation)){
            continue;
        } else {
            messageDisplay.innerText = affirmation;
            affirmationsShown.push(affirmation);
            return;
        }
      }
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
function playGong(){
  console.log("test");
  gong.play();
}
function clearMantras(){
  mantrasShown = [];
}
function clearAffirmations(){
  affirmationsShown = [];
}
function showAddMessage(){
  addFade(addMessageMenu);
  addMessageMenu.classList.add("opacity");
}
function addMessage(){
  if(mantras.includes(addMessageInput.value) || affirmations.includes(addMessageInput.value){

  } else if(addMessageAffirmation.checked === true){
    mantras.push(addMessageInput.value);
  } else if {}
}
