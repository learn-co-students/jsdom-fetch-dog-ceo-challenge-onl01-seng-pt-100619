
document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
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
              breedContainer.appendChild(listItem)
          }
      })

  }

