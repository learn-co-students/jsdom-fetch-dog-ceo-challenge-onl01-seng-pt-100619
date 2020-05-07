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
      let container = document.querySelector('#dog-image-container');
      let newImage = document.createElement('img');
      newImage.src = dogLink;
      container.appendChild(newImage);
  }
  
  function fetchBreeds() {
      const breedUrl = 'https://dog.ceo/api/breeds/list/all'
      fetch(breedUrl).then((resp) => {
        return resp.json()
      }).then((json) => {
          const breedCollection = json.message
          // find parent
          const breedContainer = document.getElementById('dog-breeds')
          for (const breedName in breedCollection){
              //add breeds to page in a <ul>
              //create li element
              const listItem = document.createElement('li')
              //add breed to list item
              listItem.innerText = breedName
              // add event listener for changing color
              listItem.addEventListener('click', changeColor)
              breedContainer.appendChild(listItem)
          }
      })

  }

  function changeColor(event){
      event.target.style.color = 'pink'
  }

  //challenge4
  // user can filter breeds that start with a particular letter using a dropdown
  function filterBreeds (event){
      //get user input
      const userSelection = event.target.value
        // debugger;
      //access the breeds
      const breedList = document.getElementsByTagName('li')

      //go through breeds
      for (const breed of breedList){
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
      let container = document.querySelector('#dog-image-container');
      let newImage = document.createElement('img');
      newImage.src = dogLink;
      container.appendChild(newImage);
  }
  
  function fetchBreeds() {
      const breedUrl = 'https://dog.ceo/api/breeds/list/all'
      fetch(breedUrl).then((resp) => {
        return resp.json()
      }).then((json) => {
          const breedCollection = json.message
          // find parent
          const breedContainer = document.getElementById('dog-breeds')
          for (const breedName in breedCollection){
              //add breeds to page in a <ul>
              //create li element
              const listItem = document.createElement('li')
              //add breed to list item
              listItem.innerText = breedName
              // add event listener for changing color
              listItem.addEventListener('click', changeColor)
              breedContainer.appendChild(listItem)
          }
      })

  }

  function changeColor(event){
      event.target.style.color = 'pink'
  }

  //challenge4
  // user can filter breeds that start with a particular letter using a dropdown
  function filterBreeds (event){
      //get user input
      const userSelection = event.target.value

      //access the breeds
      const breedList = document.getElementsByTagName('li')

      //go through breeds
      for (const breed of breedList){
          console.log(breed)
          if (breed.innerText.startsWith(userSelection)) {
            breed.style.display = ""
          } else {
                breed.style.display = "none"
          }
      }
  }
          console.log(breed)
          if (breed.innerText.startsWith(userSelection)) {
            //   debugger
            breed.style.display = ""
            debugger
          } else {
                breed.style.display = "none"
          }
      }
  }