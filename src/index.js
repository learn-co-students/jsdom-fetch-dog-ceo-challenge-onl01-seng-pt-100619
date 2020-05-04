console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImage() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(function(json) {renderImage(json)});
  
  }
// use json.message to access urls for images and create an img element with sources from json.messages, last appendchild image elements to our desired parent element

  function renderImage(json) {
        const imgDiv = document.getElementById('dog-image-container')
        json.message.forEach(image => {
          const img = document.createElement('img')
          img.src = image
          imgDiv.appendChild(img)
        })
      }

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchAllBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    // .then(json => console.log(json))
    .then(function(json) {renderAllBreeds(json)})
  
  }

// the json object had breeds as keys in a nested hash so the json object was not being defined for the forEach loop, extracting the keys of the json object into an array allowed the forEach loop to access the breed data
function renderAllBreeds(json) {
    let ul = document.getElementById('dog-breeds')
    let breeds = json.message
    // console.log(Object.keys(breeds))
    // for (var i=0; i< breeds.length)
    //modify json.message before the loop
    

    function filterBreeds(breeds) {
      const selectOptions = document.querySelectorAll("option")
        selectOptions.addEventListener('change', function(e){
          // change the allBreeds or other variable that renders the list
          // how do i modify something that has been rendered already (delete?)
          // call this filter function inside of render all?
          // breeds.delete where first letter != to event.target.first letter
          //breed.innerText[0]
          // callback function on changed json/array
          Object.keys(breeds).forEach(breed => {
            const li = document.createElement('li')
            li.innerHTML = breed
            if (li.innerText[0] === e.target.innerText){
              ul.appendChild(li)
            }
            
          })
        })
      
    }
    
  }

  function changeColor() {
    let allBreeds = document.querySelectorAll("li")
    allBreeds.forEach(breed => {
      breed.addEventListener('click', function(e) {
        
          breed.style.color = "magenta" // select all list items in documents with queryselectorall and iterate over the array of list items, then add an event listener to each item of click and the callback is to change the color of the text through the style property/attribute
        
      } )
      
    })
  }

  

  document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
    fetchAllBreeds()
    changeColor()
    
  })

// function fetchBooks() {
//     return fetch('https://anapioficeandfire.com/api/books')
//     .then(resp => resp.json())
//     .then(function(json) {renderBooks(json)});
  
//   }
//   //use fetch and call manipulation function inside the asynchronous parameters instead of console.log the json
//   // use incognito window to evade the CORS policy error
//   function renderBooks(json) {
//     const main = document.querySelector('main')
//     json.forEach(book => {
//       const h2 = document.createElement('h2')
//       h2.innerHTML = `<h2>${book.name}</h2>`
//       main.appendChild(h2)
//     })
//   }
  
//   document.addEventListener('DOMContentLoaded', function() {
//     fetchBooks()
//   })