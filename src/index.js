console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
  dogBreedsList = document.getElementById('dog-breeds');
  fetchImages()
  fetchBreeds()
  changeColor()
})
function fetchImages() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(json =>  {showImage(json)});
}
function showImage(json) {
  let dogImageContainer = document.getElementById('dog-image-container');
  dogImageContainer.style.display = "flex";
  json.message.forEach(dogImage => {
    let img = document.createElement("img")
    img.src = dogImage
    img.style.width = "250px"
    img.style.height = "auto"
    dogImageContainer.appendChild(img)
  });
  /* Alternative with for loop
  for (let i = 0; i < json.message.length; i++) {
    // Create element for image

    let dogImage = document.createElement("img");
    
    // Sets attribute for image

    dogImage.setAttribute('src', json.message[i]);
    dogImageContainer.appendChild(dogImage);
  */
}
function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => {getBreeds(json)});
}
function breedFind(jsonObj) {
  Object.keys(jsonObj.message).forEach(function(key, index) {
  let li = document.createElement('li');
  li.innerText = `${key}`;
  dogBreedsList.appendChild(li);
  });
}
function getBreeds(json) {
  let dropDownValue = document.getElementById("breed-dropdown");
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
  for (x in alphabet) {
    let options = document.createElement('option');
    options.innerText += alphabet[x];
    dropDownValue.appendChild(options)
  }
  dropDownValue.addEventListener('change', function(e) {
    breedFind(json);
    const result = dropDownValue.options[dropDownValue.selectedIndex].value
    const pickedDogBreedsList = document.createElement('ul');
    for (let i = 0; i < dogBreedsList.children.length; i++) {
      if (dogBreedsList.children[i].innerText[0] === result) {
        let li = document.createElement('li');
        li.innerText = dogBreedsList.children[i].innerText;
        pickedDogBreedsList.appendChild(li);
      }
    }
    dogBreedsList.innerHTML = pickedDogBreedsList.innerHTML;
  })
  breedFind(json);
}
  function changeColor() {
  let ul = document.getElementById("dog-breeds"); // Target colors
  ul.addEventListener('click', function(event) { // On click
    event.target.style.color = "#ff0000"; // Change color of click event target
});}