var viewMessagePage = document.querySelector(".show-message-page");
var affirmationsList = document.querySelector("#affirmation-list");
var mantrasList = document.querySelector("#mantra-list");
var affirmations = JSON.parse(sessionStorage.getItem("affirmations"));
var mantras = JSON.parse(sessionStorage.getItem("mantras"));
var splitMantras = mantras.join("\n\n");
var splitAffirmations = affirmations.join("\n\n");

mantrasList.innerText = splitMantras;
affirmationsList.innerText = splitAffirmations;


viewMessagePage.onload = bodyFade(viewMessagePage);
function clearFadeout(element){
  element.classList.remove("fade-out");
};
function bodyFade(element){
  element.classList.add("fade-in");
  setTimeout(clearFadeout, 1500, element);
}
