console.log('%c HI', 'color: firebrick')
//Challenge 1
//on page load - add event listener for loading of the DOM
document.addEventListener('DOMContentLoaded', onLoad)

function onLoad(){
    fetchImages()
    fetchBreeds()
    //add event listener to filter after fetching breeds -- from Challenge 4
    const breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener('change', filterBreeds) //what event are we listening for? click won't work - we need to use change
}

function fetchImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    //fetch the images using the url above - make a fetch request to imgUrl
    fetch(imgUrl).then((resp) => {
        return resp.json()     
    }).then((json) => {
        //parse the response as JSON - inside of the getch request
        const dogLinks = json.message
        //add image elements to the DOM for each image in the array
        // - access collection of elements from the json
        // - iterate through the collection
        dogLinks.forEach(dogLink => {
            //add image elements to the DOM for each image in the array
            const dogImg = document.createElement('img')
            dogImg.src = dogLink
            //access parent
            const dogContainer = document.getElementById("dog-image-container")
            //append element to parent
            dogContainer.appendChild(dogImg)

        })
    })
}

//Challenge 2
// on page load (meaning we only want to invoke function when DOMContentLoaded)
function fetchBreeds(){
    //fetch all the dog breeds using the url, 'https://dog.ceo/api/breeds/list/all'
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then((resp) => {
        return resp.json()
    }).then((json) => {
        const breedCollection = json.message
        //find parent
        const breedContainer = document.getElementById("dog-breeds")
        for (const breedName in breedCollection) { //iterates through breedcollection and assigning each element to breedName
            // add the breeds to the page in an <ul> (take a look at the included index.html)
            //create li element
            const listItem = document.createElement('li')
            //add breed to list item
            listItem.innerText = breedName
            listItem.addEventListener('click', changeColor)  //from Challenge 3
            breedContainer.appendChild(listItem)
        }
    })
}


//Challenge 3
//Once all of the breeds are rendered in the <ul> add JavaScript so that the font color of a particular <li> changes on click. This can be a color of your choosing.
//all the breeds will be rendered after fetchBreeds is called?
function changeColor(event){
    //When the user clicks any of the dog breed list items, the color the text should change.
    event.target.style.color ="pink"
}


//Challenge 4
//Once we are able to load all of the dog breeds onto the page (happens during onLoad - good place to add event listener)
//For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet
function filterBreeds(event) {
    //add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.
    //get the user input
    const userSelection = event.target.value
    //access the breeds
    const breedList = document.getElementsByTagName('li')
    //go through breeds and ...
    for (const breed of breedList){
        //only display breeds that start with user input
        if(breed.innerText.startsWith(userSelection)) { //starts with user input

        } else {

        }
    }
}