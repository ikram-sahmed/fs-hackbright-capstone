
const scentButton = document.querySelector("#scentButton");
console.log(scentButton)
const randomScent = document.querySelector("#randomScent");

const scents = [
    'Maison Francis Kurkdjian Aqua Universalis',
    'Tom Ford Soleil Blanc',
    'Maison Margiela REPLICA Beach Walk',
    'Dior JAdore In Joy',
    'Lancôme La Vie Est Belle Soleil Cristal',
    'Marc Jacobs Daisy Love',
    'Byredo Bal d’Afrique',
    'Diptyque Philosykos',
    'Chanel Chance Eau Fraiche',
    'Giorgio Armani Acqua di Gioia',
];


function newScent() {
let randomNumber = Math.floor(Math.random() * (scents.length));
randomScent.innerHTML = scents[randomNumber]
}

scentButton.addEventListener("click",newScent);


