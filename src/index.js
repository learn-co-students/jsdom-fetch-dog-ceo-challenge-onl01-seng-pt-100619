console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
var changed = false;

document.addEventListener("DOMContentLoaded", dogContentLoad);

function dogContentLoad() {
    fetchDog();
    fetchBreeds();

    document.getElementById('breed-dropdown').addEventListener('change', function () {
        changed = true;
        document.getElementById('dog-breeds').innerHTML = "";
        fetchBreeds();
    });
}

function fetchDog() {
    return fetch(imgUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            // console.log(json)
            json["message"].forEach(addImage)
        });

};

function addImage(item, index) {
    const element = document.getElementById("dog-image-container")
    var img = document.createElement("img");
    img.src = item
    element.appendChild(img)
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreeds() {
    return fetch(breedUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json)
            Object.keys(json["message"]).forEach(addBreed);
        });
}

function addBreed(breed, index) {
    if (changed != true || document.getElementById("breed-dropdown").value == breed[0]) {



        const element = document.getElementById("dog-breeds")
        var li = document.createElement("li");
        var content = document.createTextNode(breed);

        element.appendChild(li);
        li.appendChild(content);

        li.addEventListener("click", function () {
            li.style.color = "#FF1493";
        });
    }
}