console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const fetchImgs = () => {
    fetch(imgUrl)
      .then(parseJSON)
      .then(renderImgs);
};

const fetchBreeds = () => {
    fetch(breedUrl)
      .then(parseJSON)
      .then(renderBreeds);
};

const renderImgs = json => {
    const dogImageContainer = document.querySelector("#dog-image-container");
    for (let i = 0; i < json.message.length; i++) {
      dogImageContainer.appendChild(newImg(json.message[i]));
    }
};

const renderBreeds = json => {
    const dogBreeds = document.querySelector("#dog-breeds");
    const breedDropdown = document.querySelector("#breed-dropdown");
 
    //needs event listener for the change in letters from dropdown menu
    breedDropdown.addEventListener("change", () => {
        filterBreedsByAlphabet(breedDropdown.value, json);
    });

    breeds = json.message;
    for(let breed in breeds) {
      let subBreeds = breeds[breed];
      const b = newBreed(breed);
      dogBreeds.append(b);
      b.append(newSubBreeds(subBreeds));
    }
};

const newImg = imgSrc => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.style.width = "350px";
    img.style.height = "350px";
    return img;
};
  
const newBreed = breedName => {
    const breed = document.createElement("li");
    breed.textContent = breedName;
    breed.addEventListener("click", () => {
      changeBreedColor(breed);
    });
    return breed;
};

const newSubBreeds = subBreeds => {
    const newSubBreed = document.createElement("ul");
    subBreeds.forEach(subBreed => {
      newSubBreed.innerHTML += `<li>${subBreed}</li>`;
    });
    return newSubBreed;
};
    
const changeBreedColor = breed => {
    let dogBreeds = document.getElementById("dog-breeds")
    //dogBreeds.style.backgroundColor = "lightblue";
    breed.style.color = "green";
};

const filterBreedsByAlphabet = (letter, json) => {
    const dogBreeds = document.querySelector("#dog-breeds");
    dogBreeds.innerHTML = "";
    breeds = json.message;
    for (var breed in breeds) {
        if (breed.startsWith(letter)) {
            let subBreeds = breeds[breed];
            const b = newBreed(breed);
            dogBreeds.append(b);
            b.append(newSubBreeds(subBreeds));
        }
    }
};

const parseJSON = response => {
    return response.json();
};
  
document.addEventListener("DOMContentLoaded", e => {
    fetchImgs();
    fetchBreeds();
});