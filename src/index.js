console.log('%c HI', 'color: firebrick')

/* 
on page load
fetch the images using the url: const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
parse the response as JSON
add image elements to the DOM for each image in the array
    access elements
    create node to attach to/grab node
    iterate to attach each element to node
 */


document.addEventListener("DOMContentLoaded", onLoad) 
        
function onLoad() {
    fetchImages()
    fetchBreeds()
    const breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener("change", filterBreeds)
}

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl).then((resp) => {
        return resp.json() 
    }).then((json) => {

        const dogLinks = json.message
        dogLinks.forEach(link => {
            const dogImg = document.createElement("img")
            dogImg.src = link
            const dogContainer = document.getElementById("dog-image-container")
            dogContainer.appendChild(dogImg)
        })
    })
}

function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then((resp) => {
        return resp.json()
    }).then((json) => {
        const breeds = json.message
        const breedContainer = document.getElementById("dog-breeds")
        for (const breedName in breeds) {
        const listItem = document.createElement('li')
        listItem.innerText = breedName
        listItem.addEventListener("click", changeColor)
        breedContainer.appendChild(listItem)
        }
    })
}

function changeColor(event) {
    event.target.style.color = "magenta"
}

function filterBreeds(event){
    const userSelection = event.target.value
    const breedList = document.getElementsByTagName("li")
    for (const breed of breedList) {
        if (breed.innerText.startsWith(userSelection)) {
            breed.style.display = ""
        } else {
            breed.style.display = "none"
        }
    }
}