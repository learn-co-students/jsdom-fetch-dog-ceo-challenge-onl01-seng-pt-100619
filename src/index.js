console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    fetchImages();
    fetchBreeds()
})


function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderImages(json));
}

function renderImages(json) {
    const imgContainer = document.getElementById('dog-image-container');
    json.message.forEach(element => {
        const imgTag = document.createElement('img');
        imgTag.src = `${element}`
        imgContainer.appendChild(imgTag)
        
    })
}



function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
       let breeds = Object.keys(json.message);
       renderBreeds(breeds);
       breedSelector(breeds);
    });
   
}

function renderBreeds(breeds) {
    const breedContainer = document.getElementById('dog-breeds');
    removeChildren(breedContainer);
    breeds.forEach(element => {
        const listItemBreeds = document.createElement('li');
        listItemBreeds.innerText = `${element}`
        listItemBreeds.addEventListener('click', updateColor)
        breedContainer.appendChild(listItemBreeds)
    })
}

function removeChildren(elements) {
    let child = elements.lastElementChild; 
    while (child) {
        elements.removeChild(child);
        child = elements.lastElementChild;
    }
}


function breedSelector(breeds) { 
    const selector = document.getElementById('breed-dropdown');
    selector.addEventListener('change', function(event){
        const letter = event.target.value;
        let selectedBreeds =  breeds.filter( breed => breed.startsWith(`${letter}`));
   
        renderBreeds(selectedBreeds);
    })
}

function updateColor(event) {
    event.target.style.color = 'red';
}


