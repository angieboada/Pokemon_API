// URL de la API a consumir
const API_ALBUM = "https://jsonplaceholder.typicode.com/photos";

// Funciones
function getAlbum() {
  fetch(API_ALBUM)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error consumiendo la API");
    });
}

function fillData(photos) {
  let cards = "";
  for (let i = 0; i < 20; i++) {
    cards += `<div class="col">
    <div class="card h-100" style="width: 12rem;">
    <img src="${photos[i].url}" class="card-img-top" alt="">
    <h2 class="card-title" > ${photos[i].title} </h2>
    <div class="card-body">
    <h5 class="card-title">${photos[i].id}</h5>
    </div>
    </div>
    </div>`;
  }
  document.getElementById("dataAlbum").innerHTML = cards;
}

getAlbum();
