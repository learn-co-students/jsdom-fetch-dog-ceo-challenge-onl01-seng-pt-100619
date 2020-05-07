console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', onLoad)

function onLoad(){
    fetchImages()
    fetchBreeds()
    const breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener('change', filterBreeds)
}

function fetchImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl).then((resp) => {
        return resp.json()
    }).then((json) => {
        const dogLinks = json.message
        dogLinks.forEach( dogLink => {
            const dogImg = document.createElement('img') //safer and cleaner
            dogImg.src = dogLink
            const dogContainer = document.getElementById('dog-image-container') //parent
            dogContainer.appendChild(dogImg) //add child to parent
        })
    })
}

function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then((resp) => {
        return resp.json()
    }).then((json) => {
        const breedCollection = json.message
        const breedContainer = document.getElementById('dog-breeds') //before the loop so doesn't get reassigned each time
        for (const breedName in breedCollection){ //iterate through OBJECT
            const listItem = document.createElement('li')
            listItem.innerText = breedName
            listItem.addEventListener('click', changeColor) //add listener to change color on click
            breedContainer.appendChild(listItem)
        }
    })
}

function changeColor(event){
    event.target.style.color = 'pink'
}

function filterBreeds(){
    //get user input
    const userSelection = event.target.value
    //go through breeds and only display ones that start with user input
    const breedList = document.getElementsByTagName('li')
    for (const breed of breedList) { //html collection acts like an array
        if (breed.innerText.startsWith(userSelection)) {
            breed.style.display = ''
        } else {
            breed.style.display = 'none'
        }
    }
}