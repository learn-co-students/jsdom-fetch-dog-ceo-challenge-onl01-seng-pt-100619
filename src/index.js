console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
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

function getBreeds(json) {
  let dogBreedsList = document.getElementById('dog-breeds');
  Object.keys(json.message).forEach(function(key, index) {
    let li = document.createElement('li')
    li.innerText = `${key}`
    dogBreedsList.appendChild(li);
  });

  let dropDownValue = document.getElementById("breed-dropdown");
  let result = dropDownValue.options[dropDownValue.selectedIndex].value;
  dropDownValue.addEventListener('change', function(e) {
  dogBreedsList.childNodes.forEach(child => {
      dogBreedsList = [];
     if (child.textContent.startsWith(result)){
       dogBreedsList.push(child);
     };
});

  })};

  function changeColor() {
  let ul = document.getElementById("dog-breeds"); // Target colors
  ul.addEventListener('click', function(event) { // On click
    event.target.style.color = "#ff0000"; // Change color of click event target
});}