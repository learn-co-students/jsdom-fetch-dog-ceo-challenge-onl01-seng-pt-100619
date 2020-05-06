// challenge 1: FETCH ALL DOG IMAGES 
document.addEventListener('DOMContentLoaded', function(){
    loadImages();  
    dogBreed();
});

function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
        .then(res => res.json())
        .then(results => {
            results.message.forEach(image => addImage(image))
            
    });
}

// CHALLENGE 2: GET ALL THE BREED'S NAME AND SET IT IN A UL
function dogBreed(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
        .then(res => res.json())
        .then(results => {
            const breedObject = results.message
            const breedKeys = Object.keys(breedObject);
            // results.message.forEach(breed => addBreed(breed))
            breedKeys.forEach(breed => addBreed(breed))  
        });
}



function addImage(image){
    let imageContainer = document.querySelector('#dog-image-container');
    let newImageElement = document.createElement('img');
    newImageElement.src = image;
    imageContainer.appendChild(newImageElement);
}


function addBreed(breed){
    let urlBreeds = document.querySelector("#dog-breeds")
    let newBreedElement = document.createElement('ul');
    newBreedElement.innerText = breed;
    urlBreeds.appendChild(newBreedElement);  
}



// QUESTION 1: LINE 18Why would I need to iterage over the message array in the fetch response?
// Could I just say result => somefunction() in line 15 and make my iteration `forEach` 
// inside someFunction() ?

