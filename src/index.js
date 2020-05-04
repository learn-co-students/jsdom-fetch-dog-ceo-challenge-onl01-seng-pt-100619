
function returnDogImg() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(function(json) {renderDogImages(json)});
}
function returnAllDogBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(function(json){renderDogBreeds(json)});
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
        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        listItem.style.color = "#" + randomColor;
    })});
        const breedSelector = document.getElementById("breed-dropdown");
        breedSelector.addEventListener("click", () => {
            
            const breedIndex = breedSelector.selectedIndex;
            const selectedBreed = breedSelector.children[breedIndex].value;
    
            breedSelection(selectedBreed);
        });
    function breedSelection(letter) {
    breedList.childNodes.forEach(listItem => {

        if(listItem.innerText != undefined)
        { if (!listItem.innerText.startsWith(letter)){
            listItem.style.display = "none";
            
        }
        else {
            listItem.style.display = "list-item";
        }
    
    }
                
    });}
}

document.addEventListener('DOMContentLoaded', function() {
    returnDogImg();
    returnAllDogBreeds();
    
  });
