document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
    const breedDropdown = document.getElementById('breed-dropdown')
    breedDropdown.addEventListener('change', filterBreeds)
});

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(dogLink => addImage(dogLink))
    });
}

function addImage(dogLink) {
    let imageContainer = document.querySelector('#dog-image-container');
    let newImage = document.createElement('img');
    newImage.src = dogLink;
    imageContainer.appendChild(newImage);
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then((resp) => {
    return resp.json()
    }).then((json) => {
        const breedCollection = json.message
        const breedContainer = document.getElementById('dog-breeds')
        for (const breedName in breedCollection){
            const listItem = document.createElement('li')
            listItem.innerText = breedName
            listItem.addEventListener('click', changeColor)
            breedContainer.appendChild(listItem)
        }
    })
}

function changeColor(event){
    event.target.style.color = 'blue'
}

function filterBreeds (event){
    const userSelection = event.target.value
    const breedList = document.getElementsByTagName('li')
    for (const breed of breedList){
        console.log(breed)
        if (breed.innerText.startsWith(userSelection)) {
        breed.style.display = ""
        } else {
            breed.style.display = "none"
        }
    }
}