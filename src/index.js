  
console.log('%c HI', 'color: firebrick')
//CHALLENGE 1


// Add JavaScript so that:

// on page load
document.addEventListener('DOMContentLoaded', fetchAllTheThings)

function fetchAllTheThings(){
    fetchImages()
    fetchBreeds()
    //add event listener to filter after fetching breeds!
    const breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener('change', filterBreeds) //every time dropdown changes, filter breed
}

function fetchImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    // fetch the images using the url above
    fetch(imgUrl).then((resp) => {
        // parse the response as JSON
        return resp.json() //if using curly braces need to explicitly return, if use parentheses implictly returns
    }).then((json) => {
        //put in debugger
        // need to iterate through json.message
        // put debugger in like this json.message.forEach( dog => {debugger})
        // arrow functions - can make multi line but then need to explicitly return
        json.message.forEach( dogPic => {
            // add image elements to the DOM for each image in the array
            const dogImg = document.createElement('img')
            dogImg.src = dogPic
            const dogPen = document.getElementById("dog-image-container")
            dogPen.appendChild(dogImg)
            //always use const unless variable needs to change - like in a loop
            // be sure to use const or let, if leave out will be globally scoped
        })
    })
}

// CHALLENGE 2
 // on page load, fetch all the dog breeds using the url above 


function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then((resp) => {
        return resp.json()
    }).then((json) => {
        // returns an object
        // breeds are keys, need to loop through keys
        // use for in to access keys
        // could also do Object.keys(json.message) to call .keys function on Object which collects all keys into array
        for (const breedName in json.message) {
            // console.log(breedName)
            // add the breeds to the page in an <ul> (take a look at the included index.html)
            const listItem = document.createElement('li')
            //challenge 3
            listItem.addEventListener('click', changeColor)
            // use innerText if not putting in html elements
            listItem.innerText = breedName
            const breedContainer = document.getElementById("dog-breeds")
            breedContainer.appendChild(listItem)

            
        }
    })
}

function changeColor(event){
    // Challenge 3
            // Once all of the breeds are rendered in the <ul>, add JavaScript so that the font color of a particular <li> changes on click. This can be a color of your choosing.
            // can add event listener when first created or wait for them to be loaded
            // When the user clicks any of the dog breed list items, the color the text should change.
    //debugger
    event.target.style.color = "pink"
}

// Challenge 4
// Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.

// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet

//add event listener to drop down that grabs letter

function filterBreeds(event){ //have access to event anyway, but if manipulating it should put as parameter
    const userSelection = event.target.value
    // use filter to filter out breeds by letter
    // how to access breeds? get all elements on page that have breed
    // could add class name on creation to make easier, or use other selectors
    // if manipluating them elsewhere, would use class name to eliminate duplication
    // only works here because only lis
    const breedList = document.getElementsByTagName('li') 
    // debugger
    // to filter, could use filter, but the return value would be just list that match
    // would destroy all other ones and never be able to select other ones
    // instead loop through and hide ones that don't start with user selection so not removing!

    //forEach doesn't work, use for...of
    for (const breed of breedList) {
        //breed is html element, need to access innerText
        if (breed.innerText.startsWith(userSelection)) {
            // debugger
            breed.style.display = ''
            //shows any previosuly hidden breeds
        } else {
            breed.style.display = 'none'
        }
    }
}