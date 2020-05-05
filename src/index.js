
/*document.addEventListener('DomContentLoaded', function() {

    loadImages();
    loadBreeds();
});
*/

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)

    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(image => addImage(image))
    });
  }

  function addImage(dogPic) {
      let container = document.querySelector('#dog-image-container');
      let NewImage = document.createElement('img');
      NewImage.src = dogPic;
      container.appendChild(newImage);
  }

  function loadBreeds() {
      const breedUrl = 'https://dog.ceo/api/breeds/list/all'
      fetch(breedUrl)
      .then(resp => resp.json())
      .then(results => {
          results.message.forEach(breed => addBreed(breed))
    });

  }

  function addBreed(breed) {

  }

