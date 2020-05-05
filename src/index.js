
document.addEventListener('DomContentLoaded', function() {
    // console.log('hi')
    
    loadImages();
    fetchBreeds();
});



function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())

    /*
    .then(data => {
        console.log(data)
    });
    */

    .then(results => {
        results.message.forEach(image => addImage(image))
    });
}


  function addImage(dogPic) {
      let container = document.querySelector('#dog-image-container');
      let newImage = document.createElement('img');
      newImage.src = dogPic;
      container.appendChild(newImage);
  }
  

  function fetchBreeds() {
      const breedUrl = 'https://dog.ceo/api/breeds/list/all'
      fetch(breedUrl)
      .then(resp => resp.json())
      .then(function(dogBreeds){renderBreeds(dogBreeds)});

  }

  function renderBreeds(dogBreeds){
      
  }