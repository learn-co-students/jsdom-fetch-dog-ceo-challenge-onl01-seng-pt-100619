console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImage() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(function(json) {renderImage(json)});
  
  }

  function renderImage(json) {
        const imgDiv = document.getElementById('dog-image-container')
        json.message.forEach(image => {
          const img = document.createElement('img')
          img.src = image
          imgDiv.appendChild(img)
        })
      }



  document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
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