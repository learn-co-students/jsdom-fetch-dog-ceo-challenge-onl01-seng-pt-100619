console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', fetchAllTheThings)

function fetchAllTheThings(){
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
        json.message.forEach( dogPic => {
            const dogImg = document.createElement('img')
            dogImg.src = dogPic
            const dogPen = document.getElementById("dog-image-container")
            dogPen.appendChild(dogImg)

        })
    })
}

function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then((resp) => {
        return resp.json()
    }).then((json) => {

        for (const breedName in json.message) {

            const listItem = document.createElement('li')
            listItem.addEventListener('click', changeColor)

            listItem.innerText = breedName
            const breedContainer = document.getElementById("dog-breeds")
            breedContainer.appendChild(listItem)

            
        }
    })
}

function changeColor(event){
    event.target.style.color = "pink"
}


function filterBreeds(event){
    const userSelection = event.target.value

    const breedList = document.getElementsByTagName('li') 

    for (const breed of breedList) {

        if (breed.innerText.startsWith(userSelection)) {
            breed.style.display = ''
        } else {
            breed.style.display = 'none'
        }
    }
}