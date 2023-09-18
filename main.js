let translateButton = document.querySelector(".translate--btn")
let inputText = document.querySelector("#text--one")
let inputTextTwo = document.querySelector("#text--two")
let baseUrl = "https://api.funtranslations.com/translate/minion.json?text="


translateButton.addEventListener('click', translateText)

function translateText(){
  let finalUrl = baseUrl + inputText.value
  fetch(finalUrl)
    .then(response => response.json())
    .then(response => {
      inputTextTwo.value = response.contents.translated
    })
    .catch(error => console.log(error))
}
