// URL de la API a consumir
const API_PEOPLE = "https://jsonplaceholder.typicode.com/users";

// Funciones
function getUsers() {
  fetch(API_PEOPLE)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error consumiendo la API");
    });
}

function fillData(users) {
  let cards = "";
  users.forEach((e) => {
    cards += `<div class="col">
    <div class="card h-100" style="width: 12rem;">
    <h2 class="card-title" > ${e.name} </h2>
    <div class="card-body">
    <h5 class="card-title">${e.address.suite}</h5>
    <h5 class="card-title">${e.email}</h5>
    <p class="card-text">Episodes: ${e.phone}</p>
    <p class="card-text"> <a  href="${e.website}" target="_blank">Web personal</a></p>
    </div>
    </div>
    </div>`;
  });
  document.getElementById("dataPeople").innerHTML = cards;
}

//Eventos
document.getElementById("btnSearch").addEventListener("click", () => {
  getUsers();
});
