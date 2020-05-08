console.log('%c HI', 'color: firebrick')

function getDogImage() {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
return fetch(imgUrl)
  .then(resp => resp.json())
  .then(function(json) {renderDogImages(json)});
}

function getDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
  .then(resp => resp.json())
  .then(function(json) {renderDogBreeds(json)});
}

function renderDogImages(json){
    const imgContainer = document.getElementById('dog-image-container');
    
    json["message"].forEach(dogUrl => {
        const dogImg = document.createElement("img");
        dogImg.src = dogUrl;
        imgContainer.appendChild(dogImg);
        
    });
} 

function renderDogBreeds(json){
    const breedList = document.getElementById('dog-breeds');
    Object.keys(json["message"]).forEach(breed => {
        const breedListItem = document.createElement("li");
        breedListItem.innerText = breed;
        breedList.appendChild(breedListItem);
    });

    breedList.childNodes.forEach(listItem => {listItem.addEventListener("click", () =>{
        listItem.style.color = "#0000FF";
    })});

};

function filterBreeds() {
    const dropdown = document.querySelector("select#breed-dropdown")
  
    dropdown.addEventListener("change", (e) => {
      const firstLetter = e.target.value
      const allBreeds = document.querySelectorAll("li")
      allBreeds.forEach(breed => {
        if(breed.innerText.startsWith(firstLetter)) {
          breed.hidden = false
        }
        else {
          breed.hidden = true
        }
      })
    })
  }




document.addEventListener('DOMContentLoaded', function() {
    getDogImage();
    getDogBreeds();
    filterBreeds();
  });
